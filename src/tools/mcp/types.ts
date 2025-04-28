/**
 * Types for Model Context Protocol (MCP) implementation
 */

export type ComponentListingItem = {
  /**
   * Brief description of the component
   */
  description?: string;

  /**
   * Unique identifier for the component
   */
  id: string;

  /**
   * Display name of the component
   */
  name: string;

  /**
   * Path to the component file relative to project root
   */
  path: string;

  /**
   * Tags associated with the component
   */
  tags?: string[];
};

export type ComponentListing = {
  /**
   * List of available components
   */
  components: ComponentListingItem[];
};

export type PropDefinition = {
  /**
   * Default value for the prop if any
   */
  defaultValue?: string;

  /**
   * Description of the prop
   */
  description?: string;

  /**
   * Example usage of the prop
   */
  example?: string;

  /**
   * Name of the prop
   */
  name: string;

  /**
   * Whether the prop is required
   */
  required: boolean;

  /**
   * Type of the prop
   */
  type: string;
};

export type ComponentDetails = {
  /**
   * Full description of the component
   */
  description?: string;

  /**
   * Usage examples
   */
  examples?: string[];

  /**
   * Unique identifier for the component
   */
  id: string;

  /**
   * Name of the component
   */
  name: string;

  /**
   * Path to the component file
   */
  path: string;

  /**
   * Component props definition
   */
  props: PropDefinition[];

  /**
   * Related components
   */
  relatedComponents?: string[];

  /**
   * Tags associated with the component
   */
  tags?: string[];
};

export type MCPClientOptions = {
  /**
   * Base URL for MCP server
   */
  baseUrl: string;
};

export type MCPError = {
  /**
   * Error code
   */
  code?: string;

  /**
   * Error message
   */
  message: string;
};

export type MCPResponse<T> = {
  /**
   * Response data
   */
  data?: T;

  /**
   * Error information if request failed
   */
  error?: MCPError;
};

export type FindComponentOptions = {
  /**
   * Whether to use exact name matching
   * @default true
   */
  exact?: boolean;
};
