import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import clsx from 'clsx';

import { Button } from 'src/components/button/Button';
import { Flex } from 'src/components/flex/Flex';
import { Input } from 'src/components/input/Input';
import { Text } from 'src/components/text/Text';
import { CheckmarkIcon } from 'src/icons/CheckmarkIcon';
import { ChevronDownIcon } from 'src/icons/ChevronDownIcon';
import { ChevronRightIcon } from 'src/icons/ChevronRightIcon';
import { CopyIcon } from 'src/icons/CopyIcon';
import { HelpIcon } from 'src/icons/HelpIcon';
import { LinkIcon } from 'src/icons/LinkIcon';
import { SearchIcon } from 'src/icons/SearchIcon';
import { jsonParse } from 'src/utils/jsonParse';

// Types
type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

type ViewMode = 'column' | 'tree' | 'editor';
type SortMode = 'original' | 'keys-asc' | 'keys-desc';

/**
 * Props for the JsonVisionViewer component
 */
export type JsonVisionViewerProps = {
  /** The JSON data to display */
  data: object | null;
  /**
   * Default view mode
   * @default 'tree'
   */
  defaultViewMode?: ViewMode;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Called when user clicks Share. Should return the shareable URL. */
  onShare?: () => Promise<string>;
  /** Optional title displayed in the header */
  title?: string;
};

// Utility functions
const getValueType = (
  value: JsonValue,
): 'string' | 'number' | 'boolean' | 'null' | 'array' | 'object' => {
  if (value === null) {
    return 'null';
  }
  if (Array.isArray(value)) {
    return 'array';
  }
  return typeof value as 'string' | 'number' | 'boolean' | 'object';
};

const getValueAtPath = (
  data: JsonValue,
  path: string[],
): JsonValue | undefined => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = data;
  for (const key of path) {
    if (current === null || typeof current !== 'object') {
      return undefined;
    }
    if (Array.isArray(current)) {
      const index = parseInt(key, 10);
      if (Number.isNaN(index) || index < 0 || index >= current.length) {
        return undefined;
      }
      current = current[index];
    } else if (key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  return current as JsonValue;
};

const getTypeIcon = (type: string): string => {
  switch (type) {
    case 'object':
      return '{}';
    case 'array':
      return '[]';
    case 'string':
      return '""';
    case 'number':
      return '#';
    case 'boolean':
      return '◯';
    case 'null':
      return '∅';
    default:
      return '?';
  }
};

/**
 * Recursively sorts JSON data by keys.
 * Objects get their keys sorted, arrays keep their order but nested objects are sorted.
 */
const sortJsonByKeys = (
  value: JsonValue,
  direction: 'asc' | 'desc',
): JsonValue => {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    // Arrays: keep order, but sort nested objects
    return value.map(item => sortJsonByKeys(item, direction));
  }

  // Objects: sort keys
  const obj = value as Record<string, JsonValue>;
  const sortedKeys = Object.keys(obj).sort((a, b) => {
    const comparison = a.localeCompare(b, undefined, { sensitivity: 'base' });
    return direction === 'asc' ? comparison : -comparison;
  });

  const sorted: Record<string, JsonValue> = {};
  for (const key of sortedKeys) {
    const val = obj[key];
    if (val !== undefined) {
      sorted[key] = sortJsonByKeys(val, direction);
    }
  }
  return sorted;
};

/**
 * Escapes a string for use in a CSS attribute selector.
 * Handles special characters that would otherwise cause DOMException.
 */
const escapeCssSelector = (str: string): string => {
  // Use CSS.escape if available (modern browsers), otherwise manual escape
  if (typeof CSS !== 'undefined' && CSS.escape) {
    return CSS.escape(str);
  }
  // Fallback: escape special characters manually
  return str.replace(/["\\]/g, '\\$&');
};

const formatPreview = (value: JsonValue, type: string): string => {
  switch (type) {
    case 'array': {
      const arr = value as JsonValue[];
      return `${arr.length} ${arr.length === 1 ? 'item' : 'items'}`;
    }
    case 'object': {
      const obj = value as Record<string, JsonValue>;
      const keys = Object.keys(obj);
      return `${keys.length} ${keys.length === 1 ? 'field' : 'fields'}`;
    }
    case 'string':
      return String(value);
    case 'number':
      return String(value);
    case 'boolean':
      return value ? 'true' : 'false';
    case 'null':
      return 'null';
    default:
      return '';
  }
};

/**
 * Get tooltip text for a value (full value for primitives, summary for complex types)
 */
const getTooltipText = (value: JsonValue, type: string): string | undefined => {
  switch (type) {
    case 'string': {
      const str = String(value);
      // Only show tooltip if value is long enough to be truncated
      return str.length > 30 ? str : undefined;
    }
    case 'number':
    case 'boolean':
    case 'null':
      return undefined; // These are short enough to display fully
    case 'array':
    case 'object':
      return undefined; // Summary is already clear
    default:
      return undefined;
  }
};

type SearchResult = {
  key: string;
  matchType: 'key' | 'value';
  path: string[];
  preview: string;
};

/**
 * Recursively search JSON for matching keys or values.
 */
const searchJson = (
  value: JsonValue,
  term: string,
  currentPath: string[] = [],
  results: SearchResult[] = [],
  maxResults = 50,
): SearchResult[] => {
  if (results.length >= maxResults) {
    return results;
  }

  const lowerTerm = term.toLowerCase();

  if (value === null || typeof value !== 'object') {
    // Check if primitive value matches
    const strValue = String(value);
    if (strValue.toLowerCase().includes(lowerTerm)) {
      results.push({
        key: currentPath[currentPath.length - 1] ?? 'root',
        matchType: 'value',
        path: currentPath,
        preview:
          strValue.length > 50 ? `${strValue.slice(0, 50)}...` : strValue,
      });
    }
    return results;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      if (results.length < maxResults) {
        searchJson(
          item,
          term,
          [...currentPath, String(index)],
          results,
          maxResults,
        );
      }
    });
  } else {
    Object.entries(value).forEach(([key, val]) => {
      if (results.length >= maxResults) {
        return;
      }

      // Check if key matches
      if (key.toLowerCase().includes(lowerTerm)) {
        const type = getValueType(val);
        results.push({
          key,
          matchType: 'key',
          path: [...currentPath, key],
          preview: formatPreview(val, type),
        });
      }

      // Recurse into value
      searchJson(val, term, [...currentPath, key], results, maxResults);
    });
  }

  return results;
};

// Column View Component
type ColumnEntry = {
  key: string;
  type: string;
  value: JsonValue;
};

type ColumnProps = {
  data: JsonValue;
  onSelect: (key: string) => void;
  selectedKey: string | null;
};

// Value Detail Column - shows when a primitive value is selected
type ValueColumnProps = {
  name: string;
  value: JsonValue;
};

const ValueColumn = ({ name, value }: ValueColumnProps) => {
  const type = getValueType(value);

  const getValueClass = () => {
    switch (type) {
      case 'string':
        return 'text-orange-200';
      case 'number':
        return 'text-blue-200';
      case 'boolean':
        return 'text-purple-200';
      case 'null':
        return 'text-blue-200 italic';
      default:
        return '';
    }
  };

  const getDisplayValue = () => {
    if (type === 'boolean') {
      return value ? 'true' : 'false';
    }
    return String(value);
  };
  const displayValue = getDisplayValue();

  return (
    <div className="min-w-[260px] max-w-[320px] shrink-0 overflow-y-auto border-r border-amino-border-color bg-amino-surface-color dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center gap-2 bg-blue-600 px-3 py-2.5">
        <span className="flex size-5 shrink-0 items-center justify-center rounded bg-blue-500 text-[10px] font-semibold text-white">
          {getTypeIcon(type)}
        </span>
        <span className="whitespace-nowrap text-[13px] font-medium text-white">
          {name}
        </span>
        <span
          className={clsx(
            'ml-auto max-w-[180px] overflow-hidden text-ellipsis whitespace-nowrap font-mono text-[13px]',
            getValueClass(),
          )}
        >
          {displayValue}
        </span>
      </div>
    </div>
  );
};

type ColumnPropsExtended = {
  columnIndex: number;
  isActiveColumn: boolean;
  onFocusColumn: (index: number) => void;
} & ColumnProps;

const Column = ({
  columnIndex,
  data,
  isActiveColumn,
  onFocusColumn,
  onSelect,
  selectedKey,
}: ColumnPropsExtended) => {
  const columnRef = useRef<HTMLDivElement>(null);

  const entries: ColumnEntry[] = useMemo(() => {
    if (data === null || typeof data !== 'object') {
      return [];
    }
    if (Array.isArray(data)) {
      return data.map((v, i) => ({
        key: i.toString(),
        type: getValueType(v),
        value: v,
      }));
    }
    return Object.entries(data).map(([k, v]) => ({
      key: k,
      type: getValueType(v),
      value: v,
    }));
  }, [data]);

  // Focus the selected element when this column becomes active
  useEffect(() => {
    if (isActiveColumn && selectedKey && columnRef.current) {
      const escapedKey = escapeCssSelector(selectedKey);
      const selectedEl = columnRef.current.querySelector<HTMLElement>(
        `[data-key="${escapedKey}"]`,
      );
      if (selectedEl) {
        selectedEl.focus();
        selectedEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [isActiveColumn, selectedKey]);

  // Also scroll into view when selection changes (even if not active)
  useEffect(() => {
    if (selectedKey && columnRef.current) {
      const escapedKey = escapeCssSelector(selectedKey);
      const selectedEl = columnRef.current.querySelector(
        `[data-key="${escapedKey}"]`,
      );
      if (selectedEl) {
        selectedEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [selectedKey]);

  if (entries.length === 0) {
    return (
      <div className="w-[280px] min-w-[280px] max-w-[280px] shrink-0 grow-0 overflow-y-auto border-r border-amino-border-color bg-amino-surface-color dark:border-gray-700 dark:bg-gray-800 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar]:w-1.5">
        <div className="p-6 text-center italic text-gray-500">Empty</div>
      </div>
    );
  }

  return (
    <div
      ref={columnRef}
      className="w-[280px] min-w-[280px] max-w-[280px] shrink-0 grow-0 overflow-y-auto border-r border-amino-border-color bg-amino-surface-color dark:border-gray-700 dark:bg-gray-800 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar]:w-1.5"
    >
      {entries.map(entry => {
        const isExpandable = entry.type === 'object' || entry.type === 'array';
        const isSelected = selectedKey === entry.key;

        return (
          <button
            key={entry.key}
            className={clsx(
              'flex w-full cursor-pointer items-center gap-2 border-none bg-transparent px-3 py-2.5 text-left transition-colors duration-100 hover:bg-gray-50 dark:hover:bg-gray-700',
              isSelected &&
                'bg-blue-600 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-600',
            )}
            data-key={entry.key}
            onClick={() => {
              onFocusColumn(columnIndex);
              onSelect(entry.key);
            }}
            onFocus={() => onFocusColumn(columnIndex)}
            type="button"
          >
            <span
              className={clsx(
                'flex size-5 shrink-0 items-center justify-center rounded bg-gray-100 text-[10px] font-semibold text-gray-500 dark:bg-gray-700 dark:text-gray-400',
                isSelected &&
                  'bg-blue-500 text-white dark:bg-blue-500 dark:text-white',
              )}
            >
              {getTypeIcon(entry.type)}
            </span>
            <span
              className={clsx(
                'flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[13px] font-medium text-gray-800 dark:text-gray-200',
                isSelected && 'text-white dark:text-white',
              )}
              title={entry.key}
            >
              {entry.key}
            </span>
            <span
              className={clsx(
                'max-w-[100px] shrink-0 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-500 dark:text-gray-500',
                isSelected && 'text-blue-200 dark:text-blue-200',
              )}
              title={getTooltipText(entry.value, entry.type)}
            >
              {formatPreview(entry.value, entry.type)}
            </span>
            {isExpandable && (
              <ChevronRightIcon
                className={clsx(
                  'shrink-0 text-gray-400',
                  isSelected && 'text-blue-200 dark:text-blue-200',
                )}
                size={14}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

// Tree View Component
type TreeNodeProps = {
  depth: number;
  expandedPaths: Set<string>;
  nodeKey: string;
  onCopy: (value: JsonValue) => void;
  onSelect: (path: string[], value: JsonValue) => void;
  onToggle: (path: string) => void;
  path: string;
  selectedPath: string[] | null;
  value: JsonValue;
};

const TreeNode = ({
  depth,
  expandedPaths,
  nodeKey,
  onCopy,
  onSelect,
  onToggle,
  path,
  selectedPath,
  value,
}: TreeNodeProps) => {
  const type = getValueType(value);
  const isExpandable = type === 'object' || type === 'array';
  const isExpanded = expandedPaths.has(path);
  const [isHovered, setIsHovered] = useState(false);
  // Convert path string to array for comparison (skip 'root' prefix)
  // Use '::' as separator to support keys containing dots
  const pathArray = path.split('::').slice(1);
  const isSelected =
    selectedPath !== null &&
    pathArray.length === selectedPath.length &&
    pathArray.every((seg, i) => seg === selectedPath[i]);

  const entries: Array<{ key: string; value: JsonValue }> = useMemo(() => {
    if (!isExpandable || !isExpanded) {
      return [];
    }
    if (Array.isArray(value)) {
      return value.map((v, i) => ({ key: i.toString(), value: v }));
    }
    return Object.entries(value as Record<string, JsonValue>).map(([k, v]) => ({
      key: k,
      value: v,
    }));
  }, [value, isExpandable, isExpanded]);

  const renderValue = () => {
    switch (type) {
      case 'string':
        return (
          <span className="text-orange-600 dark:text-orange-400">
            &quot;{String(value)}&quot;
          </span>
        );
      case 'number':
        return (
          <span className="text-blue-600 dark:text-blue-400">
            {String(value)}
          </span>
        );
      case 'boolean':
        return (
          <span className="text-purple-600 dark:text-purple-400">
            {value ? 'true' : 'false'}
          </span>
        );
      case 'null':
        return (
          <span className="italic text-gray-500 dark:text-gray-500">null</span>
        );
      default:
        return null;
    }
  };

  const handleRowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Always select the node
    onSelect(pathArray, value);
    // Toggle expansion for expandable nodes
    if (isExpandable) {
      onToggle(path);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(pathArray, value);
      if (isExpandable) {
        onToggle(path);
      }
    }
  };

  return (
    <div className="block">
      <div
        className={clsx(
          'relative mx-2 flex cursor-pointer items-center gap-1 rounded px-2 py-1 hover:bg-gray-50 dark:hover:bg-gray-800',
          isSelected &&
            'bg-blue-50 hover:bg-blue-100 dark:bg-gray-700 dark:hover:bg-gray-600',
        )}
        data-path={JSON.stringify(pathArray)}
        onClick={handleRowClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        style={{ paddingLeft: `${depth * 20 + 8}px` }}
        tabIndex={0}
      >
        {isExpandable && (
          <span className="flex size-[18px] items-center justify-center text-gray-500">
            {isExpanded ? (
              <ChevronDownIcon size={14} />
            ) : (
              <ChevronRightIcon size={14} />
            )}
          </span>
        )}
        {!isExpandable && <span className="w-[18px]" />}

        <span className="mr-1 flex size-[18px] shrink-0 items-center justify-center rounded-[3px] bg-gray-100 text-[9px] font-semibold text-gray-500 dark:bg-gray-700 dark:text-gray-400">
          {getTypeIcon(type)}
        </span>
        <span
          className="font-medium text-gray-800 dark:text-gray-200"
          title={nodeKey}
        >
          {nodeKey}
        </span>

        {!isExpandable && (
          <>
            <span className="mx-1 text-gray-500 dark:text-gray-600">:</span>
            {renderValue()}
          </>
        )}

        {isExpandable && !isExpanded && (
          <span
            className="ml-2 text-xs text-gray-400 dark:text-gray-600"
            title={getTooltipText(value, type)}
          >
            {formatPreview(value, type)}
          </span>
        )}

        {isHovered && (
          <button
            className="absolute right-2 top-1/2 flex size-[22px] -translate-y-1/2 cursor-pointer items-center justify-center rounded border-none bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-gray-200"
            onClick={e => {
              e.stopPropagation();
              onCopy(value);
            }}
            type="button"
          >
            <CopyIcon size={12} />
          </button>
        )}
      </div>

      {isExpanded && entries.length > 0 && (
        <div className="block">
          {entries.map(entry => (
            <TreeNode
              key={entry.key}
              depth={depth + 1}
              expandedPaths={expandedPaths}
              nodeKey={entry.key}
              onCopy={onCopy}
              onSelect={onSelect}
              onToggle={onToggle}
              path={`${path}::${entry.key}`}
              selectedPath={selectedPath}
              value={entry.value}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Editor View Component
type EditorViewProps = {
  data: object;
  onCopy: () => void;
};

const EditorView = ({ data, onCopy }: EditorViewProps) => {
  const jsonString = useMemo(() => JSON.stringify(data, null, 2), [data]);
  const lines = useMemo(() => jsonString.split('\n'), [jsonString]);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [currentLine, setCurrentLine] = useState(1);

  // Track scroll position
  useEffect(() => {
    const content = contentRef.current;
    if (!content) {
      return undefined;
    }

    const handleScroll = () => {
      const { clientHeight, scrollHeight, scrollTop } = content;
      const maxScroll = scrollHeight - clientHeight;
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
      setScrollProgress(progress);

      // Calculate current line (approximate based on scroll position)
      const lineHeight = 19.5; // line-height: 1.5 * font-size: 13px
      const currentLineNum = Math.floor(scrollTop / lineHeight) + 1;
      setCurrentLine(Math.min(currentLineNum, lines.length));

      // Show scroll buttons only when content is scrollable
      setShowScrollButtons(maxScroll > 100);
    };

    content.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => content.removeEventListener('scroll', handleScroll);
  }, [lines.length]);

  const scrollToTop = () => {
    contentRef.current?.scrollTo({ behavior: 'smooth', top: 0 });
  };

  const scrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        behavior: 'smooth',
        top: contentRef.current.scrollHeight,
      });
    }
  };

  const scrollPageUp = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({
        behavior: 'smooth',
        top: -contentRef.current.clientHeight * 0.8,
      });
    }
  };

  const scrollPageDown = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({
        behavior: 'smooth',
        top: contentRef.current.clientHeight * 0.8,
      });
    }
  };

  // Keyboard shortcuts for scrolling
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      // Don't handle if typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === 'PageUp') {
        e.preventDefault();
        scrollPageUp();
      } else if (e.key === 'PageDown') {
        e.preventDefault();
        scrollPageDown();
      } else if (e.key === 'Home' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        scrollToTop();
      } else if (e.key === 'End' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        scrollToBottom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative flex h-full flex-col">
      <div className="flex items-center gap-4 border-b border-amino-border-color bg-amino-surface-color px-4 py-2 dark:border-gray-700 dark:bg-gray-900">
        <Button
          icon={<CopyIcon size={16} />}
          onClick={onCopy}
          size="sm"
          variant="subtle"
        >
          Copy JSON
        </Button>
        <span className="text-xs text-gray-500">
          {lines.length.toLocaleString()} lines
        </span>
      </div>
      <div
        ref={contentRef}
        className="flex flex-1 overflow-auto scroll-smooth bg-gray-900 dark:bg-[#1a1a2e] [&::-webkit-scrollbar-thumb]:rounded-[7px] [&::-webkit-scrollbar-thumb]:border-[3px] [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-content [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/30 [&::-webkit-scrollbar-thumb:hover]:bg-clip-content [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar]:size-3.5"
      >
        <div className="sticky left-0 z-[1] shrink-0 select-none bg-black/20 py-4 dark:bg-black/30">
          {/* Line numbers are static, index as key is appropriate */}
          {lines.map((_, i) => (
            <div
              key={i}
              className="px-4 text-right font-mono text-[13px] leading-[1.5] text-gray-600"
            >
              {i + 1}
            </div>
          ))}
        </div>
        <pre className="m-0 min-w-0 flex-1 p-4 font-mono text-[13px] leading-[1.5] text-gray-200 dark:text-gray-100">
          <code className="block whitespace-pre">{jsonString}</code>
        </pre>
      </div>

      {/* Scroll navigation */}
      {showScrollButtons && (
        <div className="absolute bottom-4 right-4 z-10 flex flex-col items-end gap-2">
          <div className="rounded bg-[rgba(30,30,46,0.95)] px-2 py-1 font-mono text-[11px] text-white/70 backdrop-blur">
            Line {currentLine.toLocaleString()} /{' '}
            {lines.length.toLocaleString()}
          </div>
          <div className="h-[60px] w-1 overflow-hidden rounded-sm bg-white/10">
            <div
              className="w-full rounded-sm bg-blue-500 transition-[height] duration-100"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          <div className="flex flex-col gap-1 rounded-lg border border-white/10 bg-[rgba(30,30,46,0.95)] p-1.5 backdrop-blur">
            <button
              className="flex size-7 items-center justify-center rounded border-none bg-transparent text-white/60 transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30"
              disabled={scrollProgress < 0.01}
              onClick={scrollToTop}
              title="Scroll to top (Cmd/Ctrl+Home)"
              type="button"
            >
              <svg
                fill="currentColor"
                height="14"
                viewBox="0 0 24 24"
                width="14"
              >
                <path d="M12 4L4 12h5v8h6v-8h5L12 4z" />
              </svg>
            </button>
            <button
              className="flex size-7 items-center justify-center rounded border-none bg-transparent text-white/60 transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30"
              disabled={scrollProgress < 0.01}
              onClick={scrollPageUp}
              title="Page up (PageUp)"
              type="button"
            >
              <svg
                fill="currentColor"
                height="12"
                viewBox="0 0 24 24"
                width="12"
              >
                <path d="M7 14l5-5 5 5H7z" />
              </svg>
            </button>
            <button
              className="flex size-7 items-center justify-center rounded border-none bg-transparent text-white/60 transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30"
              disabled={scrollProgress > 0.99}
              onClick={scrollPageDown}
              title="Page down (PageDown)"
              type="button"
            >
              <svg
                fill="currentColor"
                height="12"
                viewBox="0 0 24 24"
                width="12"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>
            <button
              className="flex size-7 items-center justify-center rounded border-none bg-transparent text-white/60 transition-all duration-150 hover:bg-white/10 hover:text-white active:bg-white/15 disabled:cursor-not-allowed disabled:opacity-30"
              disabled={scrollProgress > 0.99}
              onClick={scrollToBottom}
              title="Scroll to bottom (Cmd/Ctrl+End)"
              type="button"
            >
              <svg
                fill="currentColor"
                height="14"
                viewBox="0 0 24 24"
                width="14"
              >
                <path d="M12 20l8-8h-5V4H9v8H4l8 8z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Syntax-highlighted JSON renderer for preview panel
type JsonSyntaxProps = {
  data: JsonValue;
  indent?: number;
};

const JsonSyntax = ({ data, indent = 0 }: JsonSyntaxProps) => {
  const indentStr = '  '.repeat(indent);
  const nextIndent = '  '.repeat(indent + 1);

  if (data === null) {
    return (
      <span className="italic text-gray-500 dark:text-gray-500">null</span>
    );
  }

  if (typeof data === 'boolean') {
    return (
      <span className="text-cyan-600 dark:text-cyan-400">
        {data ? 'true' : 'false'}
      </span>
    );
  }

  if (typeof data === 'number') {
    return <span className="text-purple-600 dark:text-purple-400">{data}</span>;
  }

  if (typeof data === 'string') {
    return (
      <span className="text-orange-600 dark:text-orange-400">
        &quot;{data}&quot;
      </span>
    );
  }

  if (Array.isArray(data)) {
    if (data.length === 0) {
      return <span className="text-gray-600 dark:text-gray-500">[]</span>;
    }
    return (
      <>
        <span className="text-gray-600 dark:text-gray-500">[</span>
        {'\n'}
        {data.map((item, i) => (
          <span key={`array-${indent}-${i}`}>
            {nextIndent}
            <JsonSyntax data={item} indent={indent + 1} />
            {i < data.length - 1 && (
              <span className="text-gray-500 dark:text-gray-600">,</span>
            )}
            {'\n'}
          </span>
        ))}
        {indentStr}
        <span className="text-gray-600 dark:text-gray-500">]</span>
      </>
    );
  }

  if (typeof data === 'object') {
    const entries = Object.entries(data);
    if (entries.length === 0) {
      return <span className="text-gray-600 dark:text-gray-500">{'{}'}</span>;
    }
    return (
      <>
        <span className="text-gray-600 dark:text-gray-500">{'{'}</span>
        {'\n'}
        {entries.map(([key, val], i) => (
          <span key={key}>
            {nextIndent}
            <span className="text-blue-600 dark:text-blue-400">
              &quot;{key}&quot;
            </span>
            <span className="text-gray-500 dark:text-gray-600">: </span>
            <JsonSyntax data={val} indent={indent + 1} />
            {i < entries.length - 1 && (
              <span className="text-gray-500 dark:text-gray-600">,</span>
            )}
            {'\n'}
          </span>
        ))}
        {indentStr}
        <span className="text-gray-600 dark:text-gray-500">{'}'}</span>
      </>
    );
  }

  return null;
};

// Value Preview Panel
type ValuePreviewProps = {
  path: string[];
  value: JsonValue;
};

const ValuePreview = ({ path, value }: ValuePreviewProps) => {
  const type = getValueType(value);
  const [copiedJson, setCopiedJson] = useState(false);
  const [copiedValue, setCopiedValue] = useState(false);
  const isPrimitive = type !== 'object' && type !== 'array';

  // Track timeout IDs for cleanup
  const copyJsonTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyValueTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  // Cleanup timeouts on unmount
  useEffect(
    () => () => {
      if (copyJsonTimeoutRef.current) {
        clearTimeout(copyJsonTimeoutRef.current);
      }
      if (copyValueTimeoutRef.current) {
        clearTimeout(copyValueTimeoutRef.current);
      }
    },
    [],
  );

  const handleCopyJson = async () => {
    try {
      const text =
        typeof value === 'object'
          ? JSON.stringify(value, null, 2)
          : String(value);
      await navigator.clipboard.writeText(text);
      setCopiedJson(true);
      if (copyJsonTimeoutRef.current) {
        clearTimeout(copyJsonTimeoutRef.current);
      }
      copyJsonTimeoutRef.current = setTimeout(() => setCopiedJson(false), 2000);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to copy:', err);
    }
  };

  const handleCopyValue = async () => {
    try {
      // Copy raw value without quotes for strings
      const text = value === null ? 'null' : String(value);
      await navigator.clipboard.writeText(text);
      setCopiedValue(true);
      if (copyValueTimeoutRef.current) {
        clearTimeout(copyValueTimeoutRef.current);
      }
      copyValueTimeoutRef.current = setTimeout(
        () => setCopiedValue(false),
        2000,
      );
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="p-0">
      <div className="mb-4 flex flex-col gap-3 border-b border-gray-100 bg-gradient-to-b from-gray-50 to-transparent px-4 pb-4 pt-4 dark:border-gray-700 dark:from-gray-800">
        <div className="flex items-center gap-2.5">
          <div className="break-all font-mono text-base font-semibold text-blue-600 dark:text-blue-400">
            {path.length === 0 ? (
              <span className="font-medium text-gray-500 dark:text-gray-500">
                root
              </span>
            ) : (
              path[path.length - 1]
            )}
          </div>
          <span className="inline-flex shrink-0 rounded px-2.5 py-[3px] text-[10px] font-bold uppercase tracking-wide bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            {type.toUpperCase()}
          </span>
        </div>
        {path.length > 1 && (
          <div className="break-all font-mono text-[11px] text-gray-500 dark:text-gray-500">
            {path.join('.')}
          </div>
        )}
        <div className="flex flex-wrap items-center gap-2">
          {isPrimitive ? (
            <Button
              icon={
                copiedValue ? (
                  <CheckmarkIcon size={14} />
                ) : (
                  <CopyIcon size={14} />
                )
              }
              onClick={handleCopyValue}
              size="sm"
              variant="standard"
            >
              {copiedValue ? 'Copied!' : 'Copy Value'}
            </Button>
          ) : (
            <Button
              icon={
                copiedJson ? (
                  <CheckmarkIcon size={14} />
                ) : (
                  <CopyIcon size={14} />
                )
              }
              onClick={handleCopyJson}
              size="sm"
              variant="standard"
            >
              {copiedJson ? 'Copied!' : 'Copy JSON'}
            </Button>
          )}
        </div>
      </div>

      <div className="px-4 pb-4">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wide text-gray-500">
          {isPrimitive ? 'Value' : 'Preview'}
        </span>
        <pre className="m-0 break-words whitespace-pre-wrap rounded-md bg-gray-50 px-3 py-2 font-mono text-[13px] leading-relaxed dark:bg-gray-800">
          <JsonSyntax data={value} />
        </pre>
      </div>
    </div>
  );
};

/**
 * A powerful JSON viewer with three view modes: Tree, Columns, and Code.
 * Supports search, sorting, keyboard navigation, and copy functionality.
 *
 * @example
 * ```tsx
 * <JsonVisionViewer
 *   data={{ user: { name: 'John' }, orders: [1, 2, 3] }}
 *   title="API Response"
 * />
 * ```
 *
 * @example
 * ```tsx
 * // With share functionality
 * <JsonVisionViewer
 *   data={apiResponse}
 *   onShare={async () => {
 *     const url = await createShareLink(apiResponse);
 *     await navigator.clipboard.writeText(url);
 *     return url;
 *   }}
 * />
 * ```
 */
export const JsonVisionViewer = ({
  data,
  defaultViewMode = 'tree',
  onClose,
  onShare,
  title,
}: JsonVisionViewerProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>(defaultViewMode);
  const [sortMode, setSortMode] = useState<SortMode>('original');
  // selectedPath: tracks which item is highlighted (blue) at each level
  // Clicking any row selects it and automatically shows its contents in the next column
  const [selectedPath, setSelectedPath] = useState<string[]>([]);
  const [activeColumnIndex, setActiveColumnIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedSearchIndex, setSelectedSearchIndex] = useState(-1);
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(
    new Set(['root']),
  );
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle');
  const shareTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  // Cleanup share timeout on unmount
  useEffect(
    () => () => {
      if (shareTimeoutRef.current) {
        clearTimeout(shareTimeoutRef.current);
      }
    },
    [],
  );
  // Detect Mac vs Windows/Linux for keyboard shortcut display
  const isMac = useMemo(() => {
    if (typeof navigator === 'undefined') {
      return false;
    }
    // Use userAgentData if available (modern browsers), fallback to userAgent
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const platform = (navigator as any).userAgentData?.platform as
      | string
      | undefined;
    return /Mac|iPod|iPhone|iPad/i.test(platform ?? navigator.userAgent);
  }, []);
  const modKey = isMac ? '⌘' : 'Ctrl';
  const containerRef = useRef<HTMLDivElement>(null);
  const helpButtonRef = useRef<HTMLButtonElement>(null);
  const treeContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search results and help dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setShowSearchResults(false);
      }
      if (
        helpButtonRef.current &&
        !helpButtonRef.current.parentElement?.contains(e.target as Node)
      ) {
        setShowHelp(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Apply sorting to data
  const sortedData = useMemo(() => {
    if (!data || sortMode === 'original') {
      return data;
    }
    const direction = sortMode === 'keys-asc' ? 'asc' : 'desc';
    return sortJsonByKeys(data as JsonValue, direction) as object;
  }, [data, sortMode]);

  // Search results
  const searchResults = useMemo(() => {
    if (!sortedData || searchTerm.length < 2) {
      return [];
    }
    return searchJson(sortedData as JsonValue, searchTerm);
  }, [sortedData, searchTerm]);

  // Reset selected search index when results change
  useEffect(() => {
    setSelectedSearchIndex(-1);
  }, [searchResults]);

  // Handle keyboard navigation in search input
  const handleSearchKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!showSearchResults || searchResults.length === 0) {
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedSearchIndex(prev =>
          prev < searchResults.length - 1 ? prev + 1 : prev,
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedSearchIndex(prev => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'Enter' && selectedSearchIndex >= 0) {
        e.preventDefault();
        const result = searchResults[selectedSearchIndex];
        if (result) {
          setSelectedPath(result.path);
          setActiveColumnIndex(result.path.length - 1);
          setShowSearchResults(false);
          setSearchTerm('');
          // For tree view, expand all parent paths
          if (viewMode === 'tree') {
            const pathsToExpand = new Set(expandedPaths);
            let currentPath = 'root';
            for (const segment of result.path) {
              currentPath = `${currentPath}::${segment}`;
              pathsToExpand.add(currentPath);
            }
            setExpandedPaths(pathsToExpand);
          }
        }
      } else if (e.key === 'Escape') {
        setShowSearchResults(false);
        setSelectedSearchIndex(-1);
      }
    },
    [
      showSearchResults,
      searchResults,
      selectedSearchIndex,
      viewMode,
      expandedPaths,
    ],
  );

  // Navigate to a search result
  const handleSearchResultClick = useCallback(
    (result: SearchResult) => {
      setSelectedPath(result.path);
      setActiveColumnIndex(result.path.length - 1);
      setShowSearchResults(false);
      setSearchTerm('');
      // For tree view, expand all parent paths
      if (viewMode === 'tree') {
        const pathsToExpand = new Set(expandedPaths);
        let currentPath = 'root';
        for (const segment of result.path) {
          currentPath = `${currentPath}::${segment}`;
          pathsToExpand.add(currentPath);
        }
        setExpandedPaths(pathsToExpand);
      }
    },
    [viewMode, expandedPaths],
  );

  const handleShare = useCallback(async () => {
    if (!onShare) {
      return;
    }
    try {
      await onShare();
      setShareState('copied');
      if (shareTimeoutRef.current) {
        clearTimeout(shareTimeoutRef.current);
      }
      shareTimeoutRef.current = setTimeout(() => setShareState('idle'), 2000);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to share:', err);
    }
  }, [onShare]);

  // Get value at selected path for preview panel
  // Returns undefined if path not found, null if the actual value is null
  const currentValue = useMemo(() => {
    if (!sortedData) {
      return undefined;
    }
    if (selectedPath.length === 0) {
      return sortedData;
    }
    return getValueAtPath(sortedData as JsonValue, selectedPath);
  }, [sortedData, selectedPath]);

  // Build columns based on selectedPath
  // JSON Hero style: selecting an item automatically shows its children in the next column
  const columns = useMemo(() => {
    if (!sortedData) {
      return [];
    }
    const cols: {
      data: JsonValue;
      selectedKey: string | null;
    }[] = [];

    // Root column - shows all top-level keys
    cols.push({
      data: sortedData as JsonValue,
      selectedKey: selectedPath[0] ?? null,
    });

    // Subsequent columns based on selectedPath
    // Each selection of an object/array automatically shows its contents in the next column
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let current: any = sortedData;
    for (let i = 0; i < selectedPath.length; i += 1) {
      const key = selectedPath[i];
      if (!key || current === null || typeof current !== 'object') {
        break;
      }

      if (Array.isArray(current)) {
        const index = parseInt(key, 10);
        if (!Number.isNaN(index) && index >= 0 && index < current.length) {
          current = current[index];
        } else {
          break;
        }
      } else if (key in current) {
        current = current[key];
      } else {
        break;
      }

      // Add column for this level if it's an object/array (shows its children)
      if (current !== null && typeof current === 'object') {
        cols.push({
          data: current as JsonValue,
          selectedKey: selectedPath[i + 1] ?? null,
        });
      }
    }

    return cols;
  }, [sortedData, selectedPath]);

  // Handle clicking a row - selects it and automatically shows children in next column
  const handleColumnSelect = useCallback((columnIndex: number, key: string) => {
    setSelectedPath(prev => {
      const newPath = prev.slice(0, columnIndex);
      newPath.push(key);
      return newPath;
    });
  }, []);

  const handleTreeToggle = useCallback((path: string) => {
    setExpandedPaths(prev => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  }, []);

  const handleTreeSelect = useCallback((path: string[], _value?: JsonValue) => {
    setSelectedPath(path);
  }, []);

  const handleCopy = useCallback(async (value: JsonValue) => {
    try {
      const text =
        typeof value === 'object'
          ? JSON.stringify(value, null, 2)
          : String(value);
      await navigator.clipboard.writeText(text);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to copy:', err);
    }
  }, []);

  const handleCopyAll = useCallback(async () => {
    if (!sortedData) {
      return;
    }
    try {
      await navigator.clipboard.writeText(JSON.stringify(sortedData, null, 2));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to copy:', err);
    }
  }, [sortedData]);

  const handleExpandAll = useCallback(() => {
    if (!data) {
      return;
    }
    const paths = new Set<string>();
    const addPaths = (obj: JsonValue, path: string) => {
      paths.add(path);
      if (Array.isArray(obj)) {
        obj.forEach((item, index) => {
          if (typeof item === 'object' && item !== null) {
            addPaths(item, `${path}::${index}`);
          }
        });
      } else if (typeof obj === 'object' && obj !== null) {
        Object.entries(obj).forEach(([key, val]) => {
          if (typeof val === 'object' && val !== null) {
            addPaths(val as JsonValue, `${path}::${key}`);
          }
        });
      }
    };
    addPaths(data as JsonValue, 'root');
    setExpandedPaths(paths);
  }, [data]);

  const handleCollapseAll = useCallback(() => {
    setExpandedPaths(new Set(['root']));
  }, []);

  // Get entries for a column by index
  const getColumnEntries = useCallback(
    (colIndex: number): ColumnEntry[] => {
      const col = columns[colIndex];
      if (col?.data == null || typeof col.data !== 'object') {
        return [];
      }
      if (Array.isArray(col.data)) {
        return col.data.map((v, i) => ({
          key: i.toString(),
          type: getValueType(v),
          value: v,
        }));
      }
      return Object.entries(col.data).map(([k, v]) => ({
        key: k,
        type: getValueType(v),
        value: v,
      }));
    },
    [columns],
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      // Don't handle if typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if ((e.metaKey || e.ctrlKey) && e.key === 'f') {
        // Only intercept Cmd+F on views where search is available
        if (viewMode === 'column' || viewMode === 'tree') {
          e.preventDefault();
          searchInputRef.current?.focus();
        }
        // On editor views, let browser search work normally
        return;
      }

      // Cmd/Ctrl+C to copy current selection
      if ((e.metaKey || e.ctrlKey) && e.key === 'c') {
        // Only intercept if we have a selection and no text is selected
        const selection = window.getSelection();
        if (
          currentValue !== undefined &&
          selectedPath.length > 0 &&
          (!selection || selection.toString().length === 0)
        ) {
          e.preventDefault();
          void handleCopy(currentValue as JsonValue);
        }
        return;
      }

      // Tree view keyboard navigation
      if (viewMode === 'tree') {
        if (
          e.key === 'ArrowDown' ||
          e.key === 'ArrowUp' ||
          e.key === 'ArrowLeft' ||
          e.key === 'ArrowRight'
        ) {
          e.preventDefault();

          // Get all visible tree rows
          const treeRows =
            treeContainerRef.current?.querySelectorAll<HTMLElement>(
              '[role="button"][data-path]',
            );
          if (!treeRows || treeRows.length === 0) {
            return;
          }

          // Find currently selected row (has bg-blue-50 class)
          const selectedRow =
            treeContainerRef.current?.querySelector<HTMLElement>(
              '[role="button"][data-path].bg-blue-50',
            );
          const rowArray = Array.from(treeRows);
          const currentIndex = selectedRow ? rowArray.indexOf(selectedRow) : -1;

          // Helper to select a row by index without toggling expansion
          const selectRowByIndex = (index: number) => {
            const row = rowArray[index];
            if (row) {
              const pathAttr = row.getAttribute('data-path');
              if (pathAttr !== null) {
                const pathArray = jsonParse<string[]>(pathAttr);
                if (Array.isArray(pathArray)) {
                  handleTreeSelect(pathArray);
                }
              }
              row.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
              });
            }
          };

          if (e.key === 'ArrowDown') {
            // Move to next row
            const nextIndex =
              currentIndex === -1
                ? 0
                : Math.min(currentIndex + 1, rowArray.length - 1);
            selectRowByIndex(nextIndex);
          } else if (e.key === 'ArrowUp') {
            // Move to previous row
            const prevIndex =
              currentIndex === -1
                ? rowArray.length - 1
                : Math.max(currentIndex - 1, 0);
            selectRowByIndex(prevIndex);
          } else if (e.key === 'ArrowRight' && selectedRow) {
            // Expand if collapsed, or move to first child
            const path =
              selectedPath.length > 0 ? `root::${selectedPath.join('::')}` : '';
            // Check if the current node is expandable (object or array)
            const selectedValue = getValueAtPath(
              sortedData as JsonValue,
              selectedPath,
            );
            const isExpandable =
              typeof selectedValue === 'object' && selectedValue !== null;

            if (path && isExpandable && !expandedPaths.has(path)) {
              handleTreeToggle(path);
            } else if (
              currentIndex >= 0 &&
              currentIndex < rowArray.length - 1
            ) {
              // Already expanded or primitive, move to next row
              selectRowByIndex(currentIndex + 1);
            }
          } else if (e.key === 'ArrowLeft' && selectedRow) {
            // Collapse if expanded, or move to parent
            const path =
              selectedPath.length > 0 ? `root::${selectedPath.join('::')}` : '';
            if (path && expandedPaths.has(path)) {
              handleTreeToggle(path);
            } else if (selectedPath.length > 1) {
              // Move to parent
              setSelectedPath(prev => prev.slice(0, -1));
            }
          }
        }
        return;
      }

      if (viewMode !== 'column') {
        return;
      }

      const entries = getColumnEntries(activeColumnIndex);
      const currentKey = selectedPath[activeColumnIndex];
      const currentIndex = entries.findIndex(entry => entry.key === currentKey);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (entries.length === 0) {
          return;
        }

        // If nothing selected in this column, select first item
        if (currentIndex === -1) {
          const firstEntry = entries[0];
          if (firstEntry) {
            handleColumnSelect(activeColumnIndex, firstEntry.key);
          }
          return;
        }

        // Move to next item
        if (currentIndex < entries.length - 1) {
          const nextEntry = entries[currentIndex + 1];
          if (nextEntry) {
            handleColumnSelect(activeColumnIndex, nextEntry.key);
          }
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (entries.length === 0) {
          return;
        }

        // If nothing selected in this column, select last item
        if (currentIndex === -1) {
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            handleColumnSelect(activeColumnIndex, lastEntry.key);
          }
          return;
        }

        // Move to previous item
        if (currentIndex > 0) {
          const prevEntry = entries[currentIndex - 1];
          if (prevEntry) {
            handleColumnSelect(activeColumnIndex, prevEntry.key);
          }
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        // Go back one column
        if (activeColumnIndex > 0) {
          setActiveColumnIndex(activeColumnIndex - 1);
          setSelectedPath(prev => prev.slice(0, activeColumnIndex));
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        // Drill into selected item if it's expandable
        const currentEntry = entries[currentIndex];
        if (
          currentEntry &&
          (currentEntry.type === 'object' || currentEntry.type === 'array')
        ) {
          // Move to next column if it exists
          if (activeColumnIndex < columns.length - 1) {
            setActiveColumnIndex(activeColumnIndex + 1);
            // Select first item in next column
            const nextEntries = getColumnEntries(activeColumnIndex + 1);
            if (nextEntries.length > 0 && nextEntries[0]) {
              handleColumnSelect(activeColumnIndex + 1, nextEntries[0].key);
            }
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    viewMode,
    activeColumnIndex,
    selectedPath,
    columns,
    getColumnEntries,
    handleColumnSelect,
    currentValue,
    handleCopy,
    expandedPaths,
    handleTreeToggle,
    handleTreeSelect,
  ]);

  if (!data) {
    return (
      <div className="flex h-full flex-col overflow-hidden rounded-lg bg-amino-surface-color dark:bg-gray-900">
        <div className="flex h-full items-center justify-center p-10">
          <Text color="gray600">No data available</Text>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex h-full flex-col overflow-hidden rounded-lg bg-amino-surface-color dark:bg-gray-900"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amino-border-color bg-amino-surface-color px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
        <Flex alignItems="center" gap={16}>
          {title && <Text fontWeight={600}>{title}</Text>}

          {/* View Mode Tabs */}
          <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
            <button
              className={clsx(
                'flex items-center gap-1.5 whitespace-nowrap rounded-md border-none px-3 py-1.5 text-[13px] font-medium text-gray-600 transition-all duration-150 hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 [&>svg]:shrink-0',
                viewMode === 'tree' &&
                  'bg-amino-surface-color text-blue-600 shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:bg-amino-surface-color hover:text-blue-600 dark:bg-gray-700 dark:text-blue-400 dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)] dark:hover:bg-gray-700 dark:hover:text-blue-400 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400',
              )}
              onClick={() => setViewMode('tree')}
              type="button"
            >
              <svg
                fill="currentColor"
                height="14"
                viewBox="0 0 24 24"
                width="14"
              >
                <path d="M3 5h18v2H3V5zm4 4h14v2H7V9zm4 4h10v2H11v-2zm4 4h6v2h-6v-2z" />
              </svg>
              <span>Tree</span>
            </button>
            <button
              className={clsx(
                'flex items-center gap-1.5 whitespace-nowrap rounded-md border-none px-3 py-1.5 text-[13px] font-medium text-gray-600 transition-all duration-150 hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 [&>svg]:shrink-0',
                viewMode === 'column' &&
                  'bg-amino-surface-color text-blue-600 shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:bg-amino-surface-color hover:text-blue-600 dark:bg-gray-700 dark:text-blue-400 dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)] dark:hover:bg-gray-700 dark:hover:text-blue-400 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400',
              )}
              onClick={() => setViewMode('column')}
              type="button"
            >
              <svg
                fill="currentColor"
                height="14"
                viewBox="0 0 24 24"
                width="14"
              >
                <rect height="18" rx="1" width="6" x="2" y="3" />
                <rect height="18" rx="1" width="6" x="9" y="3" />
                <rect height="18" rx="1" width="6" x="16" y="3" />
              </svg>
              <span>Columns</span>
            </button>
            <button
              className={clsx(
                'flex items-center gap-1.5 whitespace-nowrap rounded-md border-none px-3 py-1.5 text-[13px] font-medium text-gray-600 transition-all duration-150 hover:bg-gray-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 [&>svg]:shrink-0',
                viewMode === 'editor' &&
                  'bg-amino-surface-color text-blue-600 shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:bg-amino-surface-color hover:text-blue-600 dark:bg-gray-700 dark:text-blue-400 dark:shadow-[0_1px_3px_rgba(0,0,0,0.3)] dark:hover:bg-gray-700 dark:hover:text-blue-400 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400',
              )}
              onClick={() => setViewMode('editor')}
              type="button"
            >
              <svg
                fill="currentColor"
                height="14"
                viewBox="0 0 24 24"
                width="14"
              >
                <path d="M8 3l-6 9 6 9h2l-6-9 6-9H8zm8 0l6 9-6 9h-2l6-9-6-9h2z" />
              </svg>
              <span>Code</span>
            </button>
          </div>

          {/* Sort Mode Tabs */}
          <div className="ml-2 flex items-center gap-1 border-l border-gray-200 pl-3 dark:border-gray-700">
            <span className="mr-1 text-xs text-gray-500 dark:text-gray-500">
              Sort:
            </span>
            <button
              className={clsx(
                'rounded border-none bg-transparent px-2 py-1 text-xs font-medium text-gray-500 transition-all duration-150 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300',
                sortMode === 'original' &&
                  'bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900 dark:hover:text-blue-300',
              )}
              onClick={() => setSortMode('original')}
              title="Original order from API"
              type="button"
            >
              Original
            </button>
            <button
              className={clsx(
                'rounded border-none bg-transparent px-2 py-1 text-xs font-medium text-gray-500 transition-all duration-150 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300',
                sortMode === 'keys-asc' &&
                  'bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900 dark:hover:text-blue-300',
              )}
              onClick={() => setSortMode('keys-asc')}
              title="Sort keys A to Z"
              type="button"
            >
              A-Z
            </button>
            <button
              className={clsx(
                'rounded border-none bg-transparent px-2 py-1 text-xs font-medium text-gray-500 transition-all duration-150 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-300',
                sortMode === 'keys-desc' &&
                  'bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-900 dark:hover:text-blue-300',
              )}
              onClick={() => setSortMode('keys-desc')}
              title="Sort keys Z to A"
              type="button"
            >
              Z-A
            </button>
          </div>
        </Flex>

        <Flex alignItems="center" gap={8}>
          {/* Search only works for column and tree views */}
          {(viewMode === 'column' || viewMode === 'tree') && (
            <div
              ref={searchContainerRef}
              className="relative flex items-center"
            >
              <SearchIcon
                className="pointer-events-none absolute left-2.5 z-[1] text-gray-500"
                size={16}
              />
              <Input
                className="[&>input]:pl-8"
                inputRef={searchInputRef}
                onChange={e => {
                  setSearchTerm(e.target.value);
                  setShowSearchResults(e.target.value.length >= 2);
                }}
                onFocus={() => setShowSearchResults(searchTerm.length >= 2)}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search keys & values..."
                size="sm"
                style={{ width: 358 }}
                value={searchTerm}
              />
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute left-0 right-0 top-full z-[100] mt-1 min-w-[280px] max-h-[300px] overflow-y-auto rounded-lg border border-amino-border-color bg-amino-surface-color shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:border-gray-700 dark:bg-gray-800">
                  {searchResults.map((result, idx) => (
                    <button
                      // Path + matchType + index ensures uniqueness for duplicate paths

                      key={`${result.path.join('.')}-${result.matchType}-${idx}`}
                      className={clsx(
                        'flex w-full flex-col items-start gap-0.5 border-b border-gray-100 bg-transparent px-3 py-2 text-left transition-colors duration-100 last:border-b-0 hover:bg-blue-50 dark:border-gray-700 dark:hover:bg-gray-700',
                        idx === selectedSearchIndex &&
                          'bg-blue-50 dark:bg-gray-700',
                      )}
                      onClick={() => handleSearchResultClick(result)}
                      type="button"
                    >
                      <span className="break-all font-mono text-xs text-blue-600 dark:text-blue-400">
                        {result.path.join('.')}
                      </span>
                      <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-[11px] text-gray-500 dark:text-gray-500">
                        {result.matchType === 'key' ? '(key)' : result.preview}
                      </span>
                    </button>
                  ))}
                  {searchResults.length === 50 && (
                    <div className="border-t border-gray-100 px-3 py-2 text-center text-[11px] text-gray-500 dark:border-gray-700">
                      Showing first 50 results...
                    </div>
                  )}
                </div>
              )}
              {showSearchResults &&
                searchTerm.length >= 2 &&
                searchResults.length === 0 && (
                  <div className="absolute left-0 right-0 top-full z-[100] mt-1 min-w-[280px] max-h-[300px] overflow-y-auto rounded-lg border border-amino-border-color bg-amino-surface-color shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:border-gray-700 dark:bg-gray-800">
                    <div className="px-3 py-4 text-center text-[13px] text-gray-500">
                      No matches found
                    </div>
                  </div>
                )}
            </div>
          )}

          {viewMode === 'tree' && (
            <Flex gap={4}>
              <Button onClick={handleExpandAll} size="sm" variant="subtle">
                Expand all
              </Button>
              <Button onClick={handleCollapseAll} size="sm" variant="subtle">
                Collapse all
              </Button>
            </Flex>
          )}

          <div className="relative">
            <button
              ref={helpButtonRef}
              className="flex size-8 items-center justify-center rounded-md border-none bg-transparent text-gray-500 transition-all duration-150 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
              onClick={() => setShowHelp(!showHelp)}
              title="Tips & shortcuts"
              type="button"
            >
              <HelpIcon size={16} />
            </button>
            {showHelp && (
              <div className="absolute right-0 top-full z-[100] mt-2 w-[260px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] dark:border-gray-700 dark:bg-gray-800">
                <div className="px-4 pb-2 pt-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Keyboard shortcuts
                </div>
                <div className="px-4 pb-3">
                  <div className="flex items-center justify-between py-1.5 text-[13px] text-gray-700 dark:text-gray-300">
                    <span className="flex items-center gap-1 font-mono [&>kbd]:inline-flex [&>kbd]:min-w-[22px] [&>kbd]:h-[22px] [&>kbd]:items-center [&>kbd]:justify-center [&>kbd]:rounded [&>kbd]:border [&>kbd]:border-gray-200 [&>kbd]:bg-gray-100 [&>kbd]:px-1.5 [&>kbd]:text-[11px] [&>kbd]:text-gray-600 dark:[&>kbd]:border-gray-600 dark:[&>kbd]:bg-gray-700 dark:[&>kbd]:text-gray-300">
                      <kbd>↑</kbd> <kbd>↓</kbd>
                    </span>
                    <span>Navigate items</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 text-[13px] text-gray-700 dark:text-gray-300">
                    <span className="flex items-center gap-1 font-mono [&>kbd]:inline-flex [&>kbd]:min-w-[22px] [&>kbd]:h-[22px] [&>kbd]:items-center [&>kbd]:justify-center [&>kbd]:rounded [&>kbd]:border [&>kbd]:border-gray-200 [&>kbd]:bg-gray-100 [&>kbd]:px-1.5 [&>kbd]:text-[11px] [&>kbd]:text-gray-600 dark:[&>kbd]:border-gray-600 dark:[&>kbd]:bg-gray-700 dark:[&>kbd]:text-gray-300">
                      <kbd>←</kbd> <kbd>→</kbd>
                    </span>
                    <span>Collapse/expand</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 text-[13px] text-gray-700 dark:text-gray-300">
                    <span className="flex items-center gap-1 font-mono [&>kbd]:inline-flex [&>kbd]:min-w-[22px] [&>kbd]:h-[22px] [&>kbd]:items-center [&>kbd]:justify-center [&>kbd]:rounded [&>kbd]:border [&>kbd]:border-gray-200 [&>kbd]:bg-gray-100 [&>kbd]:px-1.5 [&>kbd]:text-[11px] [&>kbd]:text-gray-600 dark:[&>kbd]:border-gray-600 dark:[&>kbd]:bg-gray-700 dark:[&>kbd]:text-gray-300">
                      <kbd>{modKey}</kbd>+<kbd>C</kbd>
                    </span>
                    <span>Copy selection</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 text-[13px] text-gray-700 dark:text-gray-300">
                    <span className="flex items-center gap-1 font-mono [&>kbd]:inline-flex [&>kbd]:min-w-[22px] [&>kbd]:h-[22px] [&>kbd]:items-center [&>kbd]:justify-center [&>kbd]:rounded [&>kbd]:border [&>kbd]:border-gray-200 [&>kbd]:bg-gray-100 [&>kbd]:px-1.5 [&>kbd]:text-[11px] [&>kbd]:text-gray-600 dark:[&>kbd]:border-gray-600 dark:[&>kbd]:bg-gray-700 dark:[&>kbd]:text-gray-300">
                      <kbd>{modKey}</kbd>+<kbd>F</kbd>
                    </span>
                    <span>Search</span>
                  </div>
                </div>
                <div className="px-4 pb-2 pt-3 text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Tips
                </div>
                <div className="px-4 pb-3">
                  <div className="py-1 text-xs leading-snug text-gray-600 dark:text-gray-400">
                    Click any item to see details and copy options
                  </div>
                  <div className="py-1 text-xs leading-snug text-gray-600 dark:text-gray-400">
                    Use Share to copy a link to your current view
                  </div>
                  <div className="py-1 text-xs leading-snug text-gray-600 dark:text-gray-400">
                    Search finds both keys and values
                  </div>
                </div>
              </div>
            )}
          </div>

          {onShare && (
            <Button
              icon={
                shareState === 'copied' ? (
                  <CheckmarkIcon size={16} />
                ) : (
                  <LinkIcon size={16} />
                )
              }
              onClick={handleShare}
              size="sm"
              variant="subtle"
            >
              {shareState === 'copied' ? 'Copied!' : 'Share'}
            </Button>
          )}

          {onClose && (
            <Button onClick={onClose} size="sm" variant="subtle">
              Close
            </Button>
          )}
        </Flex>
      </div>

      {/* Path Breadcrumb (for column/tree view) */}
      {viewMode !== 'editor' && (
        <div className="flex items-center overflow-x-auto border-b border-amino-border-color bg-gray-50 px-4 py-2 text-[13px] dark:border-gray-700 dark:bg-gray-800 [&::-webkit-scrollbar]:h-1">
          <button
            className="cursor-pointer whitespace-nowrap rounded border-none bg-none px-2 py-1 text-[13px] text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-700"
            onClick={() => setSelectedPath([])}
            type="button"
          >
            root
          </button>
          {selectedPath.map((segment, i) => (
            <span key={`breadcrumb-${i}-${segment}`}>
              <span className="mx-0.5 text-gray-400 dark:text-gray-600">/</span>
              <button
                className="cursor-pointer whitespace-nowrap rounded border-none bg-none px-2 py-1 text-[13px] text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-700"
                onClick={() => setSelectedPath(selectedPath.slice(0, i + 1))}
                type="button"
              >
                {segment}
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {viewMode === 'column' && (
          <div className="flex h-full overflow-hidden">
            <div className="flex flex-1 overflow-x-auto bg-amino-page-background dark:bg-gray-900 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar]:h-2">
              {columns.map((col, index) => (
                <Column
                  key={`column-${index}`}
                  columnIndex={index}
                  data={col.data}
                  isActiveColumn={activeColumnIndex === index}
                  onFocusColumn={setActiveColumnIndex}
                  onSelect={key => handleColumnSelect(index, key)}
                  selectedKey={col.selectedKey}
                />
              ))}
              {/* Show ValueColumn when a primitive value is selected (including null) */}
              {currentValue !== undefined &&
                (currentValue === null || typeof currentValue !== 'object') &&
                selectedPath.length > 0 && (
                  <ValueColumn
                    name={selectedPath[selectedPath.length - 1] ?? ''}
                    value={currentValue as JsonValue}
                  />
                )}
            </div>
            {currentValue !== undefined && (
              <div className="w-[400px] shrink-0 grow-0 overflow-y-auto border-l border-amino-border-color bg-amino-surface-color dark:border-gray-700 dark:bg-gray-800">
                <ValuePreview
                  path={selectedPath}
                  value={currentValue as JsonValue}
                />
              </div>
            )}
          </div>
        )}

        {viewMode === 'tree' && sortedData && (
          <div className="flex h-full flex-1 overflow-hidden">
            <div
              ref={treeContainerRef}
              className="flex-1 overflow-auto py-2 font-mono text-[13px] leading-normal"
            >
              {Object.entries(sortedData).map(([key, value]) => (
                <TreeNode
                  key={key}
                  depth={0}
                  expandedPaths={expandedPaths}
                  nodeKey={key}
                  onCopy={handleCopy}
                  onSelect={handleTreeSelect}
                  onToggle={handleTreeToggle}
                  path={`root::${key}`}
                  selectedPath={selectedPath}
                  value={value as JsonValue}
                />
              ))}
            </div>
            {currentValue !== undefined && selectedPath.length > 0 && (
              <div className="w-[400px] shrink-0 grow-0 overflow-y-auto border-l border-amino-border-color bg-amino-surface-color dark:border-gray-700 dark:bg-gray-800">
                <ValuePreview
                  path={selectedPath}
                  value={currentValue as JsonValue}
                />
              </div>
            )}
          </div>
        )}

        {viewMode === 'editor' && sortedData && (
          <EditorView data={sortedData} onCopy={handleCopyAll} />
        )}
      </div>
    </div>
  );
};
