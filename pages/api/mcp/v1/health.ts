/**
 * MCP API Health Check Endpoint
 *
 * Basic endpoint returning server status information for monitoring
 */

import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as path from 'path';

import type { ErrorResponse, HealthResponse } from './types';

/**
 * Handler for the health check endpoint
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse | ErrorResponse>,
): void {
  try {
    // Only allow GET requests
    if (req.method !== 'GET') {
      res.status(405).json({
        error: {
          code: 'method_not_allowed',
          message: `Method ${req.method || 'unknown'} is not allowed, use GET instead`,
        },
      });
      return;
    }

    // Read package.json to get current version
    const packagePath = path.join(process.cwd(), 'package.json');
    let version = 'unknown';

    if (fs.existsSync(packagePath)) {
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf-8')) as {
        version?: string;
      };
      version = packageJson.version || 'unknown';
    }

    // Check if documentation index exists
    const indexPath = path.join(
      process.cwd(),
      'public',
      'mcp-data',
      'index.json',
    );
    const docsStatus: {
      message: string;
      status: 'ok' | 'error';
    } = {
      message: 'Documentation not found',
      status: 'error',
    };
    let componentCount: number | undefined;

    if (fs.existsSync(indexPath)) {
      try {
        const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf-8')) as {
          components?: Array<unknown>;
        };
        componentCount = (indexData.components || []).length;
        docsStatus.status = 'ok';
        docsStatus.message = `${componentCount} components available`;
      } catch {
        // Just update the message in case of error, no need to use the error parameter
        docsStatus.message = 'Error reading documentation index';
      }
    }

    // Determine overall status
    const overallStatus = docsStatus.status === 'ok' ? 'ok' : 'degraded';

    // Compose the health response
    const healthResponse: HealthResponse = {
      components: {
        api: {
          status: 'ok',
        },
        documentation: {
          componentCount,
          message: docsStatus.message,
          status: docsStatus.status,
        },
      },
      status: overallStatus,
      timestamp: new Date().toISOString(),
      version,
    };

    // Return the health status
    res.status(200).json(healthResponse);
  } catch (error) {
    // Handle errors without console statements to comply with linting rules
    res.status(500).json({
      error: {
        code: 'internal_server_error',
        message: 'Internal server error while checking health status',
        ...(process.env.NODE_ENV !== 'production' && {
          details: { error: String(error) },
        }),
      },
    });
  }
}
