/**
 * MCP API Endpoint for listing components
 *
 * Serves the component index with optional filtering by category and tags
 */

import type {
  ComponentMetadata,
  ComponentsResponse,
  ErrorResponse,
} from 'app/api/mcp/v1/types';
import { createResponse } from 'app/api/mcp/v1/utils/sse';
import * as fs from 'fs';
import * as path from 'path';

// Use environment variable directly instead of importing from environment module
const inProdEnvironment = process.env.NODE_ENV === 'production';

/**
 * Handler for the components listing endpoint
 */
export async function GET(request: Request): Promise<Response> {
  try {
    // Parse query parameters from URL
    const url = new URL(request.url);
    const category = url.searchParams.get('category');
    const tag = url.searchParams.get('tag');
    const limitParam = url.searchParams.get('limit') || '20';
    const offsetParam = url.searchParams.get('offset') || '0';

    const parsedLimit = Math.min(parseInt(limitParam, 10) || 20, 100);
    const parsedOffset = parseInt(offsetParam, 10) || 0;

    // Path to the index.json file
    const indexPath = path.join(
      process.cwd(),
      'public',
      'mcp-data',
      'index.json',
    );

    // Check if the index file exists
    if (!fs.existsSync(indexPath)) {
      const errorResponse = {
        error: {
          code: 'not_found',
          details: { path: indexPath },
          message: 'Components index file not found',
        },
      } as ErrorResponse;

      return createResponse(request, errorResponse, { status: 404 });
    }

    // Read and parse the index file
    const indexContent = fs.readFileSync(indexPath, 'utf-8');
    const indexData = JSON.parse(indexContent) as {
      components?: ComponentMetadata[];
    };

    // Get all components from the index
    let components = indexData.components || [];

    // Filter by category if specified
    if (category) {
      components = components.filter(
        (comp: ComponentMetadata) => comp.category === category,
      );
    }

    // Filter by tag if specified
    if (tag) {
      components = components.filter((comp: ComponentMetadata) =>
        comp.tags?.includes(tag),
      );
    }

    // Total number of components after filtering
    const total = components.length;

    // Apply pagination
    const paginatedComponents = components.slice(
      parsedOffset,
      parsedOffset + parsedLimit,
    );

    // Generate the next URL if there are more components
    let nextUrl: string | undefined;
    if (parsedOffset + parsedLimit < total) {
      const nextOffset = parsedOffset + parsedLimit;
      nextUrl = `/api/mcp/v1/components?limit=${parsedLimit}&offset=${nextOffset}`;

      // Add category and tag to next URL if they were specified
      if (category) {
        nextUrl += `&category=${category}`;
      }
      if (tag) {
        nextUrl += `&tag=${tag}`;
      }
    }

    // Prepare response data
    const responseData: ComponentsResponse = {
      components: paginatedComponents,
      pagination: {
        limit: parsedLimit,
        next: nextUrl,
        offset: parsedOffset,
        total,
      },
    };

    // Return response in appropriate format based on client request
    return createResponse(request, responseData);
  } catch (error) {
    // Handle errors
    const errorResponse = {
      error: {
        code: 'internal_server_error',
        message: 'Internal server error while retrieving components list',
        ...(inProdEnvironment === false && {
          details: { error: String(error) },
        }),
      },
    } as ErrorResponse;

    return createResponse(request, errorResponse, { status: 500 });
  }
}
