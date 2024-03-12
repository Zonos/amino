import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
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
  selected: number;
  /**
   * Use the subtle design
   * @default false
   */
  subtle?: boolean;
  onChange: (selectedTab: number) => void;
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
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            key={item}
            className={clsx(
              styles.baseTab,
              selected === items.indexOf(item) && [
                styles.isSelected,
                // Used for external styling
                'is-selected',
              ],
            )}
            onClick={() => onChange(items.indexOf(item))}
            role="button"
            tabIndex={0}
          >
            <Text type="label">{item}</Text>
          </div>
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
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          key={item}
          className={clsx(
            styles.baseTab,
            styles.tab,
            selected === items.indexOf(item) && [
              styles.isSelected,
              // Used for external styling
              'is-selected',
            ],
          )}
          onClick={() => onChange(items.indexOf(item))}
          role="button"
          tabIndex={0}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
