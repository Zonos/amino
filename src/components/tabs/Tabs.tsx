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
