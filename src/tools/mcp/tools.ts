import { MCPClient } from './client';
import type {
  ComponentDetails,
  ComponentListing,
  FindComponentOptions,
  MCPResponse,
} from './types';

/**
 * Default MCP client instance
 */
let defaultClient: MCPClient | null = null;

/**
 * Get or create the default MCP client
 */
function getDefaultClient(): MCPClient {
  if (!defaultClient) {
    // Default to localhost during development
    const baseUrl = process.env.MCP_SERVER_URL || 'http://localhost:3100';
    defaultClient = new MCPClient({ baseUrl });
  }
  return defaultClient;
}

/**
 * Set the default MCP client
 * @param client - MCP client instance
 */
export function setMCPClient(client: MCPClient): void {
  defaultClient = client;
}

/**
 * List all available components
 *
 * This tool corresponds to the Model Context Protocol's list-components
 * capability, providing a way to discover all components available in the design system.
 *
 * @returns Promise resolving to component listing or error
 */
export async function listComponents(): Promise<MCPResponse<ComponentListing>> {
  const client = getDefaultClient();
  return client.listComponents();
}

/**
 * Find component by name
 *
 * This tool corresponds to the Model Context Protocol's find-component-by-name
 * capability, allowing lookup of components by their name.
 *
 * @param name - Component name to search for
 * @param options - Optional search configuration
 * @returns Promise resolving to matching components or error
 */
export async function findComponentByName(
  name: string,
  options?: FindComponentOptions,
): Promise<MCPResponse<ComponentListing>> {
  const client = getDefaultClient();
  return client.findComponentByName(name, options);
}

/**
 * Get detailed information about a component
 *
 * This tool corresponds to the Model Context Protocol's get-component-details
 * capability, providing comprehensive information about a specific component.
 *
 * @param id - Component identifier
 * @returns Promise resolving to component details or error
 */
export async function getComponentDetails(
  id: string,
): Promise<MCPResponse<ComponentDetails>> {
  const client = getDefaultClient();
  return client.getComponentDetails(id);
}
