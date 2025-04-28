import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import fs from 'fs';
import path from 'path';

// Mock the extractors
vi.mock('../extractors/jsdoc-extractor', () => ({
  extractAllComponentsDocumentation: vi.fn().mockReturnValue([
    { name: 'TestButton', filePath: 'src/components/button/Button.tsx', comment: 'A test button component' },
    { name: 'TestCard', filePath: 'src/components/card/Card.tsx', comment: null },
  ]),
}));

vi.mock('../extractors/json-file-generator', () => ({
  generateDocumentationFiles: vi.fn(),
}));

// Mock environment variables and console
const originalEnv = { ...process.env };
const consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

describe('build-integration', () => {
  beforeEach(() => {
    vi.resetModules();
    consoleLogSpy.mockClear();
    consoleErrorSpy.mockClear();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should run extraction with default options', async () => {
    // Import here instead of at the top to allow mocking before import
    const { runMcpExtraction } = await import('../build-integration');
    const { extractAllComponentsDocumentation } = await import('../extractors/jsdoc-extractor');
    const { generateDocumentationFiles } = await import('../extractors/json-file-generator');
    
    await runMcpExtraction();
    
    expect(extractAllComponentsDocumentation).toHaveBeenCalledWith({
      componentDirs: ['src/components'],
      outputDir: 'public/mcp-data',
      verbose: false,
    });
    
    expect(generateDocumentationFiles).toHaveBeenCalledWith(
      [
        { name: 'TestButton', filePath: 'src/components/button/Button.tsx', comment: 'A test button component' },
        { name: 'TestCard', filePath: 'src/components/card/Card.tsx', comment: null },
      ],
      {
        outputDir: 'public/mcp-data',
        verbose: false,
      }
    );
    
    // Verify logs
    expect(consoleLogSpy).toHaveBeenCalledWith('Starting MCP documentation extraction as part of the build process...');
    expect(consoleLogSpy).toHaveBeenCalledWith('Processed 2 components');
    expect(consoleLogSpy).toHaveBeenCalledWith('Components with JSDoc comments: 1');
    expect(consoleLogSpy).toHaveBeenCalledWith('Components without JSDoc comments: 1');
  });

  it('should handle errors without failing', async () => {
    // Mock extractAllComponentsDocumentation to throw an error
    const { extractAllComponentsDocumentation } = await import('../extractors/jsdoc-extractor');
    vi.mocked(extractAllComponentsDocumentation).mockImplementationOnce(() => {
      throw new Error('Test error');
    });
    
    const { runMcpExtraction } = await import('../build-integration');
    
    // This should not throw
    await runMcpExtraction();
    
    // Verify error was logged
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error during MCP documentation extraction:', expect.any(Error));
  });

  it('should respect verbose mode from environment variable', async () => {
    process.env.MCP_VERBOSE = 'true';
    
    // Re-import to pick up the new environment variable
    const { runMcpExtraction } = await import('../build-integration');
    const { extractAllComponentsDocumentation } = await import('../extractors/jsdoc-extractor');
    
    await runMcpExtraction();
    
    expect(extractAllComponentsDocumentation).toHaveBeenCalledWith(
      expect.objectContaining({
        verbose: true,
      })
    );
  });
});