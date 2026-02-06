import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';

import type { BaseProps } from 'src/types/BaseProps';
import type { Variant } from 'src/types/Variant';
import { cn } from 'src/utils/cn';

export type TabsProps = BaseProps & {
  /**
   * Only applies to subtle design
   * Align tabs horizontally.
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end';
  items: string[];
  onChange: (selectedTab: number) => void;
  selected: number;
  /**
   * Use the subtle design
   * @default false
   */
  subtle?: boolean;
  /**
   * Variant style for the tabs
   * @default 'standard'
   */
  variant?: Variant;
};

/**
 * Tabs component allows users to navigate between different views or sections within the same context.
 * Available in standard and subtle design variations.
 *
 * @example Basic usage
 * const [selectedTab, setSelectedTab] = useState(0);
 *
 * <Tabs
 *   items={['Overview', 'Details', 'Settings']}
 *   selected={selectedTab}
 *   onChange={setSelectedTab}
 * />
 *
 * {selectedTab === 0 && <div>Overview content</div>}
 * {selectedTab === 1 && <div>Details content</div>}
 * {selectedTab === 2 && <div>Settings content</div>}
 *
 * @example Subtle design
 * <Tabs
 *   items={['Today', 'This Week', 'This Month', 'All Time']}
 *   selected={selectedTab}
 *   onChange={setSelectedTab}
 *   subtle
 * />
 *
 * @example Subtle tabs with center alignment
 * <Tabs
 *   items={['Personal', 'Business', 'Enterprise']}
 *   selected={selectedTab}
 *   onChange={setSelectedTab}
 *   subtle
 *   align="center"
 * />
 *
 * @example Subtle tabs with end alignment
 * <Tabs
 *   items={['Day', 'Week', 'Month']}
 *   selected={selectedTab}
 *   onChange={setSelectedTab}
 *   subtle
 *   align="end"
 * />
 *
 * @example With custom styling
 * <Tabs
 *   items={['Active', 'Completed', 'Archived']}
 *   selected={selectedTab}
 *   onChange={setSelectedTab}
 *   className="custom-tabs"
 *   style={{ marginBottom: '24px' }}
 * />
 */
export const Tabs = ({
  align = 'start',
  className,
  items,
  onChange,
  selected,
  style,
  subtle = false,
  variant = 'standard',
}: TabsProps) => {
  const getTabColor = () => {
    switch (variant) {
      case 'primary':
        return theme.blue600;
      case 'success':
        return theme.green600;
      case 'warning':
        return theme.orange600;
      case 'danger':
        return theme.red600;
      case 'cyan':
        return theme.cyan600;
      case 'purple':
        return theme.purple600;
      default:
        return theme.blue600;
    }
  };

  if (subtle) {
    return (
      <div
        className={cn(
          'flex items-center gap-6 border-b border-gray-100',
          align === 'center' && 'justify-center',
          align === 'end' && 'justify-end',
          className,
        )}
        style={{
          ...style,
          '--amino-tabs-color': getTabColor(),
        }}
      >
        {items.map(item => (
          <button
            key={item}
            className={cn(
              'relative cursor-pointer select-none text-center py-3 transition-all',
              'text-gray-800',
              "after:absolute after:bottom-0 after:left-0 after:content-[''] after:bg-gray-200 after:transition-all after:h-[2px] after:w-full after:scale-x-0",
              'focus:outline-none active:outline-none focus-visible:outline-none focus-visible:shadow-[var(--amino-glow-blue)]',
              selected === items.indexOf(item) && [
                'text-[var(--amino-tabs-color)]',
                '[&>span]:text-[var(--amino-tabs-color)]',
                'after:bg-[var(--amino-tabs-color)] after:scale-x-100',
                // Used for external styling
                'is-selected',
              ],
              selected !== items.indexOf(item) && [
                'hover:text-gray-1000 hover:after:scale-x-100',
                'focus:text-gray-1000 focus:after:scale-x-100',
                'active:text-gray-1000 active:after:bg-gray-300 active:after:scale-x-100',
              ],
            )}
            onClick={() => onChange(items.indexOf(item))}
            type="button"
          >
            <Text type="label">{item}</Text>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center border border-amino rounded-lg',
        className,
      )}
      style={{
        ...style,
        '--amino-tabs-color': getTabColor(),
      }}
    >
      {items.map(item => (
        <button
          key={item}
          className={cn(
            'relative cursor-pointer select-none text-center py-3 transition-all flex-1 font-medium',
            'text-gray-800',
            "after:absolute after:bottom-0 after:left-0 after:content-[''] after:bg-gray-200 after:transition-all after:h-1 after:w-full after:scale-x-0",
            'first:after:rounded-bl-lg last:after:rounded-br-lg',
            '[&+button]:border-l [&+button]:border-amino',
            'focus:outline-none active:outline-none focus-visible:outline-none focus-visible:shadow-[var(--amino-glow-blue)]',
            selected === items.indexOf(item) && [
              'text-[var(--amino-tabs-color)]',
              'after:bg-[var(--amino-tabs-color)] after:scale-x-100',
              // Used for external styling
              'is-selected',
            ],
            selected !== items.indexOf(item) && [
              'hover:bg-[rgba(0,0,0,0.03)]',
              'hover:text-gray-1000 hover:after:scale-x-100',
              'focus:text-gray-1000 focus:after:scale-x-100',
              'active:bg-[rgba(0,0,0,0.08)]',
              'active:text-gray-1000 active:after:bg-gray-300 active:after:scale-x-100',
            ],
          )}
          onClick={() => onChange(items.indexOf(item))}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  );
};
