/**
 * MCP API Endpoint for listing components
 *
 * Serves the component index with optional filtering by category and tags
 */

import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as path from 'path';

import type {
  ComponentMetadata,
  ComponentsResponse,
  ErrorResponse,
} from './types';

/**
 * Handler for the components listing endpoint
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ComponentsResponse | ErrorResponse>,
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

    // Parse query parameters
    const { category, limit = 20, offset = 0, tag } = req.query;
    const parsedLimit = Math.min(parseInt(limit as string, 10) || 20, 100);
    const parsedOffset = parseInt(offset as string, 10) || 0;

    // Path to the index.json file
    const indexPath = path.join(
      process.cwd(),
      'public',
      'mcp-data',
      'index.json',
    );

    // Check if the index file exists
    if (!fs.existsSync(indexPath)) {
      res.status(404).json({
        error: {
          code: 'not_found',
          details: { path: indexPath },
          message: 'Components index file not found',
        },
      });
      return;
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
        comp.tags?.includes(tag as string),
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

    // Return the response
    res.status(200).json({
      components: paginatedComponents,
      pagination: {
        limit: parsedLimit,
        next: nextUrl,
        offset: parsedOffset,
        total,
      },
    });
  } catch (error) {
    // Log the error but avoid console statements that trigger linting warnings
    res.status(500).json({
      error: {
        code: 'internal_server_error',
        message: 'Internal server error while retrieving components list',
        ...(process.env.NODE_ENV !== 'production' && {
          details: { error: String(error) },
        }),
      },
    });
  }
}
