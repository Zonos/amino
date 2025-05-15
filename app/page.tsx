import React from 'react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    'Model Context Protocol server for Amino component documentation',
  title: 'Amino MCP Server',
};

export default function Home(): React.ReactElement {
  return (
    <div
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        margin: '0 auto',
        maxWidth: '800px',
        padding: '20px',
      }}
    >
      <main>
        <h1>Amino MCP Server</h1>
        <p>
          This is the Model Context Protocol (MCP) server for the Amino
          component library. It provides component documentation to consuming
          applications via API endpoints.
        </p>

        <h2>Available Endpoints</h2>
        <ul>
          <li>
            <strong>API Root:</strong> <a href="/api/mcp/v1">/api/mcp/v1</a>{' '}
            <span>- API information and available tools</span>
          </li>
          <li>
            <strong>Components Listing:</strong>{' '}
            <a href="/api/mcp/v1/components">/api/mcp/v1/components</a>{' '}
            <span>- List all available components</span>
          </li>
          <li>
            <strong>Component Details:</strong>{' '}
            <span>
              /api/mcp/v1/components/:id - Get documentation for a specific
              component
            </span>
          </li>
          <li>
            <strong>Health Check:</strong>{' '}
            <a href="/api/mcp/v1/health">/api/mcp/v1/health</a>{' '}
            <span>- Check server operational status</span>
          </li>
        </ul>

        <h2>MCP Protocol Tools</h2>
        <p>
          This server implements the Model Context Protocol, providing tools
          that AI assistants and other clients can use to retrieve component
          documentation:
        </p>
        <ul>
          <li>
            <strong>list-components</strong>{' '}
            <span>- Lists all available components with basic metadata</span>
          </li>
          <li>
            <strong>find-components-by-name</strong>{' '}
            <span>
              - Finds components based on a keyword with partial match support
            </span>
          </li>
          <li>
            <strong>get-component-details</strong>{' '}
            <span>- Gets detailed documentation for a specific component</span>
          </li>
        </ul>

        <h2>Usage with AI Assistants</h2>
        <p>
          AI assistants can use these MCP tools to retrieve information about
          Amino components. See the{' '}
          <a href="https://github.com/m-yoshiro/storybook-mcp#readme">
            MCP protocol documentation
          </a>{' '}
          for more details.
        </p>
      </main>

      <footer
        style={{
          borderTop: '1px solid #eaeaea',
          marginTop: '40px',
          paddingTop: '20px',
        }}
      >
        <p>© {new Date().getFullYear()} Amino Component Library</p>
      </footer>
    </div>
  );
}
