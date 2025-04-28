/**
 * Tests for the TypeScript Interface Parser
 */

import * as tsParser from 'build-utils/mcp/extractors/typescript-interface-parser';
import type { InterfaceDefinition } from 'build-utils/mcp/types';
import * as fs from 'fs';
import { describe, expect, it, vi } from 'vitest';

// Mock fs module
vi.mock('fs', () => ({
  readFileSync: vi.fn(),
}));

describe('TypeScript Interface Parser', () => {
  describe('parseInterface', () => {
    it('should parse an interface and extract property information', () => {
      const code = `
        /**
         * Test interface
         */
        export interface TestInterface extends BaseProps {
          /**
           * A string property
           * @default "test"
           */
          stringProp: string;
          
          /**
           * A number property
           */
          numberProp: number;
          
          /**
           * An optional boolean property
           */
          boolProp?: boolean;
          
          /**
           * A union type property
           */
          unionProp: 'a' | 'b' | 'c';
          
          /**
           * A nested object property
           */
          objectProp: {
            nestedProp: string;
          };
        }
      `;

      // Mock readFileSync to return our test code
      vi.mocked(fs.readFileSync).mockImplementation(() => code);

      const result = tsParser.parseInterface('test.tsx', 'TestInterface');

      expect(result).toBeDefined();
      expect(result!.name).toBe('TestInterface');
      expect(result!.description).toBe('Test interface');
      expect(result!.extends).toEqual(['BaseProps']);
      expect(result!.properties).toHaveLength(5);

      // Check stringProp
      const stringProp = result!.properties.find(p => p.name === 'stringProp');
      expect(stringProp).toBeDefined();
      expect(stringProp!.description).toBe('A string property');
      expect(stringProp!.type).toBe('string');
      expect(stringProp!.defaultValue).toBe('"test"');
      expect(stringProp!.required).toBe(true);

      // Check boolProp (optional)
      const boolProp = result!.properties.find(p => p.name === 'boolProp');
      expect(boolProp).toBeDefined();
      expect(boolProp!.required).toBe(false);

      // Check unionProp
      const unionProp = result!.properties.find(p => p.name === 'unionProp');
      expect(unionProp).toBeDefined();
      expect(unionProp!.type).toBe("'a' | 'b' | 'c'");
    });

    it('should handle generic interfaces', () => {
      const code = `
        /**
         * Generic interface
         */
        export interface GenericInterface<T> {
          /**
           * Generic value
           */
          value: T;
          
          /**
           * Generic array
           */
          values: T[];
          
          /**
           * A function that returns the generic type
           */
          getValue(): T;
        }
      `;

      vi.mocked(fs.readFileSync).mockImplementation(() => code);

      const result = tsParser.parseInterface('test.tsx', 'GenericInterface');

      expect(result).toBeDefined();
      expect(result!.name).toBe('GenericInterface<T>');
      expect(result!.description).toBe('Generic interface');
      expect(result!.properties).toHaveLength(2); // Only value and values, not the method

      // Check generic property
      const valueProp = result!.properties.find(p => p.name === 'value');
      expect(valueProp).toBeDefined();
      expect(valueProp!.type).toBe('T');
    });

    it('should handle interfaces without JSDoc comments', () => {
      const code = `
        export interface NoComments {
          prop1: string;
          prop2: number;
        }
      `;

      vi.mocked(fs.readFileSync).mockImplementation(() => code);

      const result = tsParser.parseInterface('test.tsx', 'NoComments');

      expect(result).toBeDefined();
      expect(result!.name).toBe('NoComments');
      expect(result!.description).toBe('');
      expect(result!.properties).toHaveLength(2);

      // Properties should not have descriptions
      const prop1 = result!.properties.find(p => p.name === 'prop1');
      expect(prop1).toBeDefined();
      expect(prop1!.description).toBe('');
    });

    it('should handle multiple interfaces in a file', () => {
      const code = `
        export interface FirstInterface {
          prop1: string;
        }
        
        export interface SecondInterface {
          prop2: number;
        }
      `;

      vi.mocked(fs.readFileSync).mockImplementation(() => code);

      // Find the second interface
      const result = tsParser.parseInterface('test.tsx', 'SecondInterface');

      expect(result).toBeDefined();
      expect(result!.name).toBe('SecondInterface');
      expect(result!.properties).toHaveLength(1);
      expect(result!.properties[0]?.name).toBe('prop2');
    });

    it('should return null if interface is not found', () => {
      const code = `
        export interface ExistingInterface {
          prop: string;
        }
      `;

      vi.mocked(fs.readFileSync).mockImplementation(() => code);

      const result = tsParser.parseInterface(
        'test.tsx',
        'NonExistingInterface',
      );

      expect(result).toBeNull();
    });

    it('should handle file read errors gracefully', () => {
      // Mock readFileSync to throw an error
      vi.mocked(fs.readFileSync).mockImplementation(() => {
        throw new Error('File read error');
      });

      // Spy on console.error
      const consoleErrorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      // We expect this to throw an error since we're rethrowing in parseInterface
      expect(() => {
        tsParser.parseInterface('test.tsx', 'TestInterface');
      }).toThrow('File read error');

      // Check that error was logged before being rethrown
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        expect.stringContaining('Error parsing interface'),
      );

      // Clean up
      consoleErrorSpy.mockRestore();
    });
  });

  describe('extractInterfaces', () => {
    it('should extract interfaces from component files', () => {
      const mockComponentMetadata = [
        {
          filePath: 'src/components/button/index.tsx',
          id: 'button',
          name: 'Button',
          path: 'src/components/button',
        },
        {
          filePath: 'src/components/text/index.tsx',
          id: 'text',
          name: 'Text',
          path: 'src/components/text',
        },
      ];

      // Mock the file contents
      vi.mocked(fs.readFileSync).mockImplementation(
        (filePath: string | Buffer | URL | number) => {
          const path = filePath.toString();

          if (path.includes('button')) {
            return `
            export interface ButtonProps extends BaseProps {
              /**
               * Button variant
               * @default "primary"
               */
              variant?: 'primary' | 'secondary';
              
              /**
               * Button size
               */
              size: 'small' | 'medium' | 'large';
            }
            
            export const Button = (props: ButtonProps): JSX.Element => {
              // Component implementation
            };
          `;
          }

          if (path.includes('text')) {
            return `
            export interface TextProps extends BaseProps {
              /**
               * Text weight
               */
              weight?: 'normal' | 'bold';
            }
            
            export const Text = (props: TextProps): JSX.Element => {
              // Component implementation
            };
          `;
          }

          throw new Error(`Unexpected file path: ${path}`);
        },
      );

      // Mock the interface parsing function
      const parseInterfaceSpy = vi
        .spyOn(tsParser, 'parseInterface')
        .mockImplementation((filePath, interfaceName) => {
          if (filePath.includes('button') && interfaceName === 'ButtonProps') {
            return {
              description: '',
              extends: ['BaseProps'],
              name: 'ButtonProps',
              properties: [
                {
                  defaultValue: '"primary"',
                  description: 'Button variant',
                  name: 'variant',
                  required: false,
                  type: "'primary' | 'secondary'",
                },
                {
                  description: 'Button size',
                  name: 'size',
                  required: true,
                  type: "'small' | 'medium' | 'large'",
                },
              ],
            } as InterfaceDefinition;
          }

          if (filePath.includes('text') && interfaceName === 'TextProps') {
            return {
              description: '',
              extends: ['BaseProps'],
              name: 'TextProps',
              properties: [
                {
                  description: 'Text weight',
                  name: 'weight',
                  required: false,
                  type: "'normal' | 'bold'",
                },
              ],
            } as InterfaceDefinition;
          }

          return null;
        });

      // Run the test
      const result = tsParser.extractInterfaces(mockComponentMetadata);

      // Check that the correct interfaces were extracted
      expect(result).toHaveLength(2);
      expect(result[0]?.id).toBe('button');
      expect(result[0]?.name).toBe('Button');
      expect(result[0]?.interface).toBeDefined();
      expect(result[0]?.interface!.name).toBe('ButtonProps');
      expect(result[0]?.interface!.properties).toHaveLength(2);

      expect(result[1]?.id).toBe('text');
      expect(result[1]?.name).toBe('Text');
      expect(result[1]?.interface).toBeDefined();
      expect(result[1]?.interface!.name).toBe('TextProps');
      expect(result[1]?.interface!.properties).toHaveLength(1);

      // Clean up spy
      parseInterfaceSpy.mockRestore();
    });

    it('should handle components without interfaces', () => {
      // Component without a proper interface
      const mockComponentMetadata = [
        {
          filePath: 'src/components/no-interface/index.tsx',
          id: 'no-interface',
          name: 'NoInterface',
          path: 'src/components/no-interface',
        },
      ];

      // Mock reading file with no interface
      vi.mocked(fs.readFileSync).mockImplementation(
        () => `
          // No interface here
          export const NoInterface = (props: any): JSX.Element => {
            // Component implementation
          };
        `,
      );

      // Mock interface parsing to return null (no interface found)
      const parseInterfaceSpy = vi
        .spyOn(tsParser, 'parseInterface')
        .mockReturnValue(null);

      const result = tsParser.extractInterfaces(mockComponentMetadata);

      expect(result).toHaveLength(1);
      expect(result[0]?.id).toBe('no-interface');
      expect(result[0]?.interface).toBeNull();

      parseInterfaceSpy.mockRestore();
    });

    it('should handle errors gracefully', () => {
      const mockComponentMetadata = [
        {
          filePath: 'src/components/error/index.tsx',
          id: 'error-component',
          name: 'ErrorComponent',
          path: 'src/components/error',
        },
      ];

      // Create an explicit error for our test
      const testError = new Error('Test error');

      // Mock parseInterface to throw our explicit error
      const parseInterfaceSpy = vi
        .spyOn(tsParser, 'parseInterface')
        .mockImplementation(() => {
          throw testError;
        });

      // Temporarily redirect console.error to prevent test output noise
      const originalConsoleError = console.error;
      console.error = vi.fn();

      try {
        // The main behavior we care about is that the function doesn't throw
        // and returns components with null interfaces when errors occur
        const result = tsParser.extractInterfaces(mockComponentMetadata);

        // Verify the expected behavior
        expect(result).toHaveLength(1);
        expect(result[0]?.id).toBe('error-component');
        expect(result[0]?.interface).toBeNull();
      } finally {
        // Always restore the original console.error
        console.error = originalConsoleError;
        parseInterfaceSpy.mockRestore();
      }
    });
  });
});
