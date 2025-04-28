/**
 * MCP API Endpoint for individual component documentation
 *
 * Serves detailed documentation for a specific component by ID
 */

import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import type {
  ComponentDocumentation,
  ErrorResponse,
} from 'pages/api/mcp/v1/types';
import * as path from 'path';

/**
 * Handler for the component detail endpoint
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ComponentDocumentation | ErrorResponse>,
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

    // Get component ID from the query parameters
    const { id } = req.query;

    // Validate the component ID
    if (!id || Array.isArray(id)) {
      res.status(400).json({
        error: {
          code: 'invalid_component_id',
          details: { id },
          message: 'Component ID is required and must be a single string value',
        },
      });
      return;
    }

    // Path to the component documentation file
    const componentPath = path.join(
      process.cwd(),
      'public',
      'mcp-data',
      'components',
      `${id}.json`,
    );

    // Check if the component file exists
    if (!fs.existsSync(componentPath)) {
      res.status(404).json({
        error: {
          code: 'component_not_found',
          details: { id, path: componentPath },
          message: `Component with ID '${id}' not found`,
        },
      });
      return;
    }

    // Read and parse the component file
    const componentContent = fs.readFileSync(componentPath, 'utf-8');
    const componentData = JSON.parse(
      componentContent,
    ) as ComponentDocumentation;

    // Return the component documentation
    res.status(200).json(componentData);
  } catch (error) {
    // Handle errors without console statements to comply with linting rules
    res.status(500).json({
      error: {
        code: 'internal_server_error',
        message:
          'Internal server error while retrieving component documentation',
        ...(process.env.NODE_ENV !== 'production' && {
          details: { error: String(error) },
        }),
      },
    });
  }
}
