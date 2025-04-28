/**
 * Shared types for MCP API endpoints
 */

/**
 * Basic component metadata used in index listings
 */
export type ComponentMetadata = {
  category?: string;
  description?: string;
  id: string;
  name: string;
  path?: string;
  tags?: string[];
};

/**
 * Detailed component documentation
 */
export type ComponentDocumentation = {
  [key: string]: unknown;
  category?: string;
  description?: string;
  examples?: ComponentExample[];
  id: string;
  name: string;
  path?: string;
  props?: Record<string, PropDocumentation>;
  tags?: string[];
};

/**
 * Documentation for a component prop
 */
export type PropDocumentation = {
  [key: string]: unknown;
  defaultValue?: unknown;
  description?: string;
  name: string;
  required?: boolean;
  type?: string;
};

/**
 * Example usage of a component
 */
export type ComponentExample = {
  [key: string]: unknown;
  code?: string;
  description?: string;
  name?: string;
};

/**
 * Response structure for the components list endpoint
 */
export type ComponentsResponse = {
  components: ComponentMetadata[];
  pagination?: {
    limit: number;
    next?: string;
    offset: number;
    total: number;
  };
};

/**
 * Response structure for the health check endpoint
 */
export type HealthResponse = {
  components?: {
    api: {
      message?: string;
      status: 'ok' | 'error';
    };
    documentation: {
      componentCount?: number;
      message?: string;
      status: 'ok' | 'error';
    };
  };
  status: 'ok' | 'degraded' | 'error';
  timestamp: string;
  version: string;
};

/**
 * Standardized error response
 */
export type ErrorResponse = {
  error: {
    code: string;
    details?: Record<string, unknown>;
    message: string;
  };
};
