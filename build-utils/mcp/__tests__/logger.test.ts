import {
  createLogger,
  LogLevel,
  McpLogger,
} from 'build-utils/mcp/utils/logger';
import fs from 'fs';
import type path from 'path';
import type { MockInstance } from 'vitest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock fs and path modules
vi.mock('fs');
vi.mock('path', async () => {
  const actual = await vi.importActual<typeof path>('path');
  return {
    ...actual,
    dirname: vi
      .fn()
      .mockImplementation((p: string) => p.split('/').slice(0, -1).join('/')),
  };
});

// Mock setTimeout and clearTimeout
vi.useFakeTimers();

const originalEnv = { ...process.env };

describe('logger', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.clearAllTimers();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('McpLogger', () => {
    it('should create a logger with default options', () => {
      const logger = createLogger();
      expect(logger).toBeInstanceOf(McpLogger);
    });

    it('should create logger with custom options', () => {
      const options = {
        console: false,
        filePath: '/logs/mcp.log',
        level: LogLevel.DEBUG,
        timestampFormat: 'MM-dd-yyyy',
      };

      const logger = createLogger(options);
      expect(logger).toBeInstanceOf(McpLogger);
    });

    it("should create log directory if it doesn't exist", () => {
      vi.mocked(fs.existsSync).mockReturnValue(false);

      createLogger({ filePath: '/logs/mcp.log' });

      expect(fs.existsSync).toHaveBeenCalledWith('/logs');
      expect(fs.mkdirSync).toHaveBeenCalledWith('/logs', { recursive: true });
    });

    it('should not create log directory if it exists', () => {
      vi.mocked(fs.existsSync).mockReturnValue(true);

      createLogger({ filePath: '/logs/mcp.log' });

      expect(fs.existsSync).toHaveBeenCalledWith('/logs');
      expect(fs.mkdirSync).not.toHaveBeenCalled();
    });

    it('should not create log directory if no file path is provided', () => {
      createLogger();

      expect(fs.existsSync).not.toHaveBeenCalled();
      expect(fs.mkdirSync).not.toHaveBeenCalled();
    });
  });

  describe('logging methods', () => {
    let consoleErrorSpy: MockInstance;
    let consoleWarnSpy: MockInstance;
    let consoleInfoSpy: MockInstance;
    let consoleLogSpy: MockInstance;
    let appendFileSyncSpy: MockInstance;

    beforeEach(() => {
      consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      consoleInfoSpy = vi.spyOn(console, 'info').mockImplementation(() => {});
      consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      appendFileSyncSpy = vi
        .spyOn(fs, 'appendFileSync')
        .mockImplementation(() => {});
    });

    it('should log to console at appropriate levels', () => {
      const logger = createLogger({ level: LogLevel.DEBUG });

      logger.error('Error message');
      logger.warn('Warning message');
      logger.info('Info message');
      logger.debug('Debug message');

      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(consoleWarnSpy).toHaveBeenCalled();
      expect(consoleInfoSpy).toHaveBeenCalled();
      expect(consoleLogSpy).toHaveBeenCalled();
    });

    it('should respect log level threshold', () => {
      const logger = createLogger({ level: LogLevel.WARN });

      logger.error('Error message');
      logger.warn('Warning message');
      logger.info('Info message');
      logger.debug('Debug message');

      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(consoleWarnSpy).toHaveBeenCalled();
      expect(consoleInfoSpy).not.toHaveBeenCalled();
      expect(consoleLogSpy).not.toHaveBeenCalled();
    });

    it('should not log to console when disabled', () => {
      const logger = createLogger({ console: false });

      logger.error('Error message');
      logger.warn('Warning message');
      logger.info('Info message');

      expect(consoleErrorSpy).not.toHaveBeenCalled();
      expect(consoleWarnSpy).not.toHaveBeenCalled();
      expect(consoleInfoSpy).not.toHaveBeenCalled();
    });

    it('should log to file when filePath is provided', () => {
      const filePath = '/logs/mcp.log';
      const logger = createLogger({ filePath });

      logger.info('Info message');

      vi.advanceTimersByTime(2000);

      expect(appendFileSyncSpy).toHaveBeenCalledWith(
        filePath,
        expect.any(String),
      );
    });

    it('should buffer log messages for file output', () => {
      const filePath = '/logs/mcp.log';
      const logger = createLogger({ filePath });

      logger.info('Message 1');
      logger.info('Message 2');

      expect(appendFileSyncSpy).not.toHaveBeenCalled();

      vi.advanceTimersByTime(2000);

      expect(appendFileSyncSpy).toHaveBeenCalledTimes(1);
      expect(appendFileSyncSpy).toHaveBeenCalledWith(
        filePath,
        expect.stringContaining('Message 1'),
      );
      expect(appendFileSyncSpy).toHaveBeenCalledWith(
        filePath,
        expect.stringContaining('Message 2'),
      );
    });

    it('should flush buffer on flush()', () => {
      const filePath = '/logs/mcp.log';
      const logger = createLogger({ filePath });

      logger.info('Message');

      expect(appendFileSyncSpy).not.toHaveBeenCalled();

      logger.flush();

      expect(appendFileSyncSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('environment variable configuration', () => {
    it('should respect log level configuration', () => {
      // Create a logger with ERROR level
      const logger = createLogger({ level: LogLevel.ERROR });
      const consoleErrorSpy: MockInstance = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      const consoleInfoSpy: MockInstance = vi
        .spyOn(console, 'info')
        .mockImplementation(() => {});

      // This should log (ERROR level)
      logger.error('Test error message');

      // This should not log (INFO level < ERROR level)
      logger.info('Test info message');

      // Verify only error was logged
      expect(consoleErrorSpy).toHaveBeenCalled();
      expect(consoleInfoSpy).not.toHaveBeenCalled();
    });
  });
});
