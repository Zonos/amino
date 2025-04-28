import type {
  ComponentDetails,
  ComponentListing,
  FindComponentOptions,
  MCPClientOptions,
  MCPResponse,
} from './types';

/**
 * Client for interacting with MCP server
 */
export class MCPClient {
  private baseUrl: string;

  /**
   * Create a new MCP client
   * @param options - Client options
   */
  constructor(options: MCPClientOptions) {
    this.baseUrl = options.baseUrl.endsWith('/')
      ? options.baseUrl.slice(0, -1)
      : options.baseUrl;
  }

  /**
   * Make a request to the MCP server
   * @param path - API path
   * @param options - Fetch options
   * @returns Response data or error
   */
  private async request<T>(
    path: string,
    options?: RequestInit,
  ): Promise<MCPResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        ...options,
      });

      if (!response.ok) {
        return {
          error: {
            code: response.status.toString(),
            message: `Request failed with status ${response.status}`,
          },
        };
      }

      const data = (await response.json()) as T;
      return { data };
    } catch (error) {
      return {
        error: {
          message: error instanceof Error ? error.message : 'Unknown error',
        },
      };
    }
  }

  /**
   * List all available components
   * @returns List of components or error
   */
  public async listComponents(): Promise<MCPResponse<ComponentListing>> {
    return this.request<ComponentListing>('/components');
  }

  /**
   * Find component by name
   * @param name - Component name to search for
   * @param options - Search options
   * @returns Matching component or error
   */
  public async findComponentByName(
    name: string,
    options: FindComponentOptions = { exact: true },
  ): Promise<MCPResponse<ComponentListing>> {
    const queryParams = new URLSearchParams({
      exact: options.exact !== false ? 'true' : 'false',
      name,
    });

    return this.request<ComponentListing>(
      `/components?${queryParams.toString()}`,
    );
  }

  /**
   * Get detailed information about a component
   * @param id - Component identifier
   * @returns Component details or error
   */
  public async getComponentDetails(
    id: string,
  ): Promise<MCPResponse<ComponentDetails>> {
    return this.request<ComponentDetails>(
      `/components/${encodeURIComponent(id)}`,
    );
  }
}
