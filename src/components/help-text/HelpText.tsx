import type { ReactNode } from 'react';

import clsx from 'clsx';

import { Text } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './HelpText.module.scss';

export type HelpTextProps = BaseProps & {
  /**
   * Is this an error state.
   */
  error?: boolean;
  /**
   * Shows below input. Use in conjunction with `error` to show feedback about error.
   */
  helpText?: ReactNode;
};

export const HelpText = ({
  className,
  error,
  helpText,
  style,
}: HelpTextProps) => {
  if (helpText) {
    if (error && typeof helpText === 'string') {
      return (
        <div className={clsx(className, styles.styledHelpText)} style={style}>
          <Text color="red700" type="caption">
            {helpText}
          </Text>
        </div>
      );
    }

    if (typeof helpText === 'string') {
      return (
        <div className={clsx(className, styles.styledHelpText)} style={style}>
          <Text type="caption">{helpText}</Text>
        </div>
      );
    }

    return (
      <div className={clsx(className, styles.styledHelpText)} style={style}>
        {helpText}
      </div>
    );
  }
  return null;
};
