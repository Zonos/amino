import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import globalStyles from 'src/styles/global.module.scss';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './Tabs.module.scss';

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
}: TabsProps) => {
  if (subtle) {
    return (
      <div
        className={clsx(className, styles.baseTabs, styles.subtleTabs)}
        style={{ ...style, '--amino-tabs-align': align }}
      >
        {items.map(item => (
          <button
            key={item}
            className={clsx(
              styles.baseTab,
              globalStyles.focusable,
              selected === items.indexOf(item) && [
                styles.isSelected,
                // Used for external styling
                'is-selected',
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
      className={clsx(className, styles.baseTabs, styles.aminoTabs)}
      style={style}
    >
      {items.map(item => (
        <button
          key={item}
          className={clsx(
            styles.baseTab,
            globalStyles.focusable,
            styles.tab,
            selected === items.indexOf(item) && [
              styles.isSelected,
              // Used for external styling
              'is-selected',
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
