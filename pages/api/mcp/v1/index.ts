import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from 'pages/environment.client';

type ToolDescription = {
  description: string;
  name: string;
  parameters: Record<
    string,
    {
      description: string;
      required: boolean;
      type: string;
    }
  >;
};

type RootResponse = {
  description: string;
  endpoints: Record<
    string,
    {
      description: string;
      method: string;
      url: string;
    }
  >;
  name: string;
  tools: ToolDescription[];
  version: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RootResponse>,
): void {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL;

  // Return API information with available tools and endpoints
  res.status(200).json({
    description:
      'Model Context Protocol server for Amino component documentation',
    endpoints: {
      component: {
        description: 'Get detailed documentation for a specific component',
        method: 'GET',
        url: `${baseUrl}/api/mcp/v1/components/:id`,
      },
      components: {
        description:
          'Get a list of all available components with basic metadata',
        method: 'GET',
        url: `${baseUrl}/api/mcp/v1/components`,
      },
      health: {
        description: 'Check if the MCP server is operational',
        method: 'GET',
        url: `${baseUrl}/api/mcp/v1/health`,
      },
    },
    name: 'Amino MCP Server',
    tools: [
      {
        description: 'Lists all available components with basic metadata',
        name: 'list-components',
        parameters: {
          path: {
            description: 'Optional path to the index.json file',
            required: false,
            type: 'string',
          },
        },
      },
      {
        description:
          'Finds components based on a keyword with partial match support',
        name: 'find-components-by-name',
        parameters: {
          name: {
            description: 'Component name or keyword to search for',
            required: true,
            type: 'string',
          },
          path: {
            description: 'Optional path to the index.json file',
            required: false,
            type: 'string',
          },
        },
      },
      {
        description: 'Gets detailed documentation for a specific component',
        name: 'get-component-details',
        parameters: {
          id: {
            description: 'Component identifier',
            required: true,
            type: 'string',
          },
          path: {
            description: 'Optional path to the components directory',
            required: false,
            type: 'string',
          },
        },
      },
    ],
    version: '1.0.0',
  });
}
