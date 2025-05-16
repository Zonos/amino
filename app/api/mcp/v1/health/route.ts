/**
 * MCP API Health Check Endpoint
 *
 * Basic endpoint returning server status information for monitoring
 */

import type { ErrorResponse, HealthResponse } from 'app/api/mcp/v1/types';
import { withSSESupport } from 'app/api/mcp/v1/utils/apiSSEMiddleware';
import * as fs from 'fs';
import type { NextRequest } from 'next/server';
import * as path from 'path';

// Create direct environment variables instead of importing from environment module
const env = {
  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || '',
};
const mcpApiBase = '/api/mcp/v1';

// Track server start time
const serverStartTime = Date.now();

/**
 * Base handler for the health check endpoint
 */
async function healthHandler(_request: NextRequest): Promise<Response> {
  try {
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
    const baseUrl = env.NEXT_PUBLIC_BASE_URL;

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
      discovery: {
        apiRoot: mcpApiBase,
        documentation: baseUrl,
      },
      status: overallStatus,
      timestamp: new Date().toISOString(),
      uptime: Math.floor((Date.now() - serverStartTime) / 1000),
      version,
    };

    // Return the health status
    return Response.json(healthResponse);
  } catch (error) {
    // Handle errors
    return Response.json(
      {
        error: {
          code: 'internal_server_error',
          message: 'Internal server error while checking health status',
          ...(process.env.NODE_ENV !== 'production' && {
            details: { error: String(error) },
          }),
        },
      } as ErrorResponse,
      { status: 500 },
    );
  }
}

/**
 * Export handler with SSE support
 */
export const GET = withSSESupport(healthHandler);
