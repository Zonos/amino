/**
 * MCP Documentation Extractor Logger
 * Provides a centralized logging system for the MCP documentation extraction process.
 */

import fs from 'fs';
import path from 'path';

/**
 * Log level enum for the MCP logger
 */
export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3,
}

/**
 * Logger configuration options
 */
export type LoggerOptions = {
  /** Buffer size for file logging (bytes) */
  bufferSize?: number;
  /** Whether to write logs to console */
  console: boolean;
  /** File path for log output (if null, no file logging) */
  filePath: string | null;
  /** Log level threshold */
  level: LogLevel;
  /** Format for timestamps */
  timestampFormat: string;
};

/**
 * Default logger configuration
 */
const DEFAULT_OPTIONS: LoggerOptions = {
  bufferSize: 4096, // 4KB buffer
  console: true,
  filePath: null,
  level: LogLevel.INFO,
  timestampFormat: 'yyyy-MM-dd HH:mm:ss',
};

/**
 * MCP Logger class for handling logging operations
 */
export class McpLogger {
  private options: LoggerOptions;
  private logBuffer: string[] = [];
  private writeTimer: NodeJS.Timeout | null = null;

  /**
   * Creates a new MCP logger instance
   * @param options - Logger configuration options
   */
  constructor(options: Partial<LoggerOptions> = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };

    // Create log directory if it doesn't exist and we're logging to a file
    if (this.options.filePath) {
      const logDir = path.dirname(this.options.filePath);
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
    }
  }

  /**
   * Log an error message
   * @param message - The message to log
   * @param data - Optional data to include in the log
   */
  public error(message: string, data?: unknown): void {
    this.log(LogLevel.ERROR, message, data);
  }

  /**
   * Log a warning message
   * @param message - The message to log
   * @param data - Optional data to include in the log
   */
  public warn(message: string, data?: unknown): void {
    this.log(LogLevel.WARN, message, data);
  }

  /**
   * Log an info message
   * @param message - The message to log
   * @param data - Optional data to include in the log
   */
  public info(message: string, data?: unknown): void {
    this.log(LogLevel.INFO, message, data);
  }

  /**
   * Log a debug message
   * @param message - The message to log
   * @param data - Optional data to include in the log
   */
  public debug(message: string, data?: unknown): void {
    this.log(LogLevel.DEBUG, message, data);
  }

  /**
   * Log a message at the specified level
   * @param level - The log level
   * @param message - The message to log
   * @param data - Optional data to include in the log
   */
  private log(level: LogLevel, message: string, data?: unknown): void {
    // Skip if level is higher than configured threshold
    if (level > this.options.level) {
      return;
    }

    const timestamp = this.formatTimestamp();
    const levelStr = LogLevel[level].padEnd(5);
    let logMessage = `[${timestamp}] [${levelStr}] ${message}`;

    if (data !== undefined) {
      try {
        const dataStr =
          typeof data === 'object' ? JSON.stringify(data) : String(data);
        logMessage += ` - ${dataStr}`;
      } catch (error) {
        logMessage += ` - [Data serialization error: ${error instanceof Error ? error.message : String(error)}]`;
      }
    }

    // Console logging
    if (this.options.console) {
      switch (level) {
        case LogLevel.ERROR:
          console.error(logMessage);
          break;
        case LogLevel.WARN:
          console.warn(logMessage);
          break;
        case LogLevel.INFO:
          console.info(logMessage);
          break;
        default:
          console.log(logMessage);
          break;
      }
    }

    // File logging
    if (this.options.filePath) {
      this.appendToLogFile(logMessage);
    }
  }

  /**
   * Append a message to the log file with buffering
   * @param message - The message to append
   */
  private appendToLogFile(message: string): void {
    this.logBuffer.push(message);

    // If the buffer has reached its size, flush immediately
    const bufferSizeLimit =
      this.options.bufferSize ?? DEFAULT_OPTIONS.bufferSize ?? 4096;
    if (this.getBufferSize() >= bufferSizeLimit) {
      this.flushLogBuffer();
      return;
    }

    // Otherwise, set a timer to flush after a delay
    if (!this.writeTimer) {
      this.writeTimer = setTimeout(() => {
        this.flushLogBuffer();
        this.writeTimer = null;
      }, 1000);
    }
  }

  /**
   * Calculate the current size of the log buffer in bytes
   * @returns The size of the buffer in bytes
   */
  private getBufferSize(): number {
    return this.logBuffer.reduce(
      (size, message) => size + message.length + 1,
      0,
    ); // +1 for newline
  }

  /**
   * Flush the log buffer to the file
   */
  private flushLogBuffer(): void {
    if (this.logBuffer.length === 0 || !this.options.filePath) {
      return;
    }

    try {
      const filePath = this.options.filePath; // Store in a local variable to avoid TypeScript "possibly undefined" error
      fs.appendFileSync(filePath, this.logBuffer.join('\n') + '\n');
      this.logBuffer = [];
    } catch (error) {
      // If we can't write to the file, log to console as a fallback
      if (this.options.console) {
        console.error(
          `Failed to write to log file: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    }
  }

  /**
   * Format the current timestamp according to the configured format
   * @returns The formatted timestamp string
   */
  private formatTimestamp(): string {
    const date = new Date();
    const format = this.options.timestampFormat;

    // Simple formatter with basic patterns
    return format
      .replace('yyyy', date.getFullYear().toString())
      .replace('MM', (date.getMonth() + 1).toString().padStart(2, '0'))
      .replace('dd', date.getDate().toString().padStart(2, '0'))
      .replace('HH', date.getHours().toString().padStart(2, '0'))
      .replace('mm', date.getMinutes().toString().padStart(2, '0'))
      .replace('ss', date.getSeconds().toString().padStart(2, '0'));
  }

  /**
   * Ensure all buffered logs are written to the file
   * Call this when the application is shutting down
   */
  public flush(): void {
    if (this.writeTimer) {
      clearTimeout(this.writeTimer);
      this.writeTimer = null;
    }
    this.flushLogBuffer();
  }
}

// Singleton instance with default configuration
const defaultLogger = new McpLogger();

/**
 * Create a configured logger
 * @param options - Logger configuration options
 * @returns A new logger instance
 */
export function createLogger(options: Partial<LoggerOptions> = {}): McpLogger {
  return new McpLogger(options);
}

/**
 * Get the default logger instance (singleton)
 * @returns The default logger instance
 */
export function getLogger(): McpLogger {
  return defaultLogger;
}

// Export a pre-configured logger based on environment variables
export const logger = (() => {
  const options: Partial<LoggerOptions> = {};

  // Configure log level from environment
  const envLogLevel = process.env.MCP_LOG_LEVEL?.toUpperCase();
  if (envLogLevel && envLogLevel in LogLevel) {
    options.level = LogLevel[envLogLevel as keyof typeof LogLevel];
  }

  // Configure file logging from environment
  if (process.env.MCP_LOG_FILE) {
    options.filePath = process.env.MCP_LOG_FILE;
  }

  // Configure console logging from environment
  if (process.env.MCP_LOG_CONSOLE) {
    options.console = process.env.MCP_LOG_CONSOLE.toLowerCase() === 'true';
  }

  return createLogger(options);
})();
