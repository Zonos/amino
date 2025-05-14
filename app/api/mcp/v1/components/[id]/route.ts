/**
 * MCP API Endpoint for individual component documentation
 *
 * Serves detailed documentation for a specific component by ID
 */

import type {
  ComponentDocumentation,
  ErrorResponse,
} from 'app/api/mcp/v1/types';
import { inProdEnvironment } from 'app/environment';
import * as fs from 'fs';
import type { NextRequest } from 'next/server';
import * as path from 'path';

/**
 * Handler for the component detail endpoint
 */
export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
): Promise<Response> {
  try {
    const { id } = context.params;

    if (!id) {
      return Response.json(
        {
          error: {
            code: 'invalid_component_id',
            details: { id },
            message: 'Component ID is required',
          },
        } as ErrorResponse,
        { status: 400 },
      );
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
      return Response.json(
        {
          error: {
            code: 'component_not_found',
            details: { id, path: componentPath },
            message: `Component with ID "${id}" not found`,
          },
        } as ErrorResponse,
        { status: 404 },
      );
    }

    // Read and parse the component file
    const componentContent = fs.readFileSync(componentPath, 'utf-8');
    const componentData = JSON.parse(
      componentContent,
    ) as ComponentDocumentation;

    // Return the component documentation
    return Response.json(componentData);
  } catch (error) {
    // Handle errors
    return Response.json(
      {
        error: {
          code: 'internal_server_error',
          message: 'Internal server error while retrieving component details',
          ...(inProdEnvironment === false && {
            details: { error: String(error) },
          }),
        },
      } as ErrorResponse,
      { status: 500 },
    );
  }
}
