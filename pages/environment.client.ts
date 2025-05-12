/* eslint-disable no-console */
import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

import { parseBooleanEnv } from './parseBooleanEnv';

// Environment condition checks
export const inProdEnvironment = process.env.NODE_ENV === 'production';
export const inDevEnvironment = process.env.NODE_ENV === 'development';
export const inTestEnvironment = process.env.NODE_ENV === 'test';
export const isClientSide = typeof window !== 'undefined';

// Deployment environment checks
const inVercel = !!process.env.VERCEL;
const inCiOutsideVercel = !!process.env.CI && !inVercel;

// Special environment checks
const inStorybook = !!process.env.STORYBOOK;
const skipEnvValidation =
  (inTestEnvironment || inCiOutsideVercel || inStorybook) &&
  !parseBooleanEnv(process.env.NEXT_PUBLIC_VALIDATE_CLIENT_ENV);

// Schema definitions for validation
const schemaUrl = z
  .string()
  .url()
  .refine(val => !val.endsWith('/'), {
    message: 'URLs cannot have a trailing slash',
  });

// Environment validation
export const env = createEnv({
  client: {
    // Optional analytics/monitoring settings
    NEXT_PUBLIC_ANALYTICS_ID: z.string().optional(),
    // Base URLs
    NEXT_PUBLIC_BASE_URL: schemaUrl,
    NEXT_PUBLIC_DEBUG_MODE: z.boolean().optional(),

    // Feature flags
    NEXT_PUBLIC_ENABLE_API_CACHING: z.boolean().optional(),

    // MCP specific settings
    NEXT_PUBLIC_MCP_ENABLED: z.boolean().optional(),
    NEXT_PUBLIC_MCP_VERSION: z.string().optional().default('v1'),

    // Optional display configuration
    NEXT_PUBLIC_SITE_NAME: z.string().optional().default('Amino MCP Server'),
  },
  clientPrefix: 'NEXT_PUBLIC_',
  onInvalidAccess: variable => {
    throw new Error(
      `❌ Attempted to access a server-side environment variable on the client: ${variable}`,
    );
  },
  onValidationError: error => {
    console.error('❌ Invalid environment variables:', error);
    throw new Error('Invalid environment variables');
  },
  runtimeEnvStrict: {
    // Optional analytics/monitoring settings
    NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    // Base URLs
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_DEBUG_MODE: parseBooleanEnv(process.env.NEXT_PUBLIC_DEBUG_MODE),

    // Feature flags
    NEXT_PUBLIC_ENABLE_API_CACHING: parseBooleanEnv(
      process.env.NEXT_PUBLIC_ENABLE_API_CACHING,
    ),

    // MCP specific settings
    NEXT_PUBLIC_MCP_ENABLED: parseBooleanEnv(
      process.env.NEXT_PUBLIC_MCP_ENABLED,
    ),
    NEXT_PUBLIC_MCP_VERSION: process.env.NEXT_PUBLIC_MCP_VERSION,

    // Optional display configuration
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  },
  skipValidation: skipEnvValidation,
});

// Storybook environment validation
export const storybookEnv = createEnv({
  client: {
    STORYBOOK_COMPONENTS_PATH: z.string().optional(),
    STORYBOOK_MCP_ENDPOINT: schemaUrl.optional(),
  },
  clientPrefix: 'STORYBOOK_',
  onInvalidAccess: variable => {
    throw new Error(
      `❌ Attempted to access a server-side environment variable on the client: ${variable}`,
    );
  },
  onValidationError: error => {
    console.error('❌ Invalid environment variables:', error);
    throw new Error('Invalid environment variables');
  },
  runtimeEnvStrict: {
    STORYBOOK_COMPONENTS_PATH: process.env.STORYBOOK_COMPONENTS_PATH,
    STORYBOOK_MCP_ENDPOINT: process.env.STORYBOOK_MCP_ENDPOINT,
  },
  skipValidation: !inStorybook,
});

// Helper exports for common conditions
export const mcpEnabled = env.NEXT_PUBLIC_MCP_ENABLED !== false;
export const apiCachingEnabled = env.NEXT_PUBLIC_ENABLE_API_CACHING === true;
export const debugMode = env.NEXT_PUBLIC_DEBUG_MODE === true;
export const mcpVersion = env.NEXT_PUBLIC_MCP_VERSION;
export const mcpApiBase = `${env.NEXT_PUBLIC_BASE_URL}/api/mcp/${mcpVersion}`;
