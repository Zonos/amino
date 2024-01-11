import type { ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './LegacyText.module.scss';

type LegacyTextStyle =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'code'
  | 'subtitle'
  | 'small-header'
  | 'input-label';

export type LegacyTextProps = BaseProps & {
  children: ReactNode;
  title?: string;
  type?: LegacyTextStyle;
};

export const LegacyText = ({
  children,
  className,
  style,
  title,
  type,
}: LegacyTextProps) => {
  switch (type) {
    case 'h1':
      return (
        <h1 className={className} style={style} title={title}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={className} style={style} title={title}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={className} style={style} title={title}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={className} style={style} title={title}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={className} style={style} title={title}>
          {children}
        </h5>
      );
    case 'h6':
      return (
        <h6 className={className} style={style} title={title}>
          {children}
        </h6>
      );
    case 'subtitle':
      return (
        <span
          className={clsx(className, styles.subtitle)}
          style={style}
          title={title}
        >
          {children}
        </span>
      );
    case 'small-header':
      return (
        <span
          className={clsx(className, styles.smallHeader)}
          style={style}
          title={title}
        >
          {children}
        </span>
      );
    case 'input-label':
      return (
        <span
          className={clsx(className, styles.inputLabel)}
          style={style}
          title={title}
        >
          {children}
        </span>
      );
    case 'p':
    default:
      return (
        <p className={className} style={style} title={title}>
          {children}
        </p>
      );
  }
};
