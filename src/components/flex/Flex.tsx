import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import type { BaseProps } from 'src/types/BaseProps';

import styles from './Flex.module.scss';

export type FlexProps = BaseProps &
  HTMLAttributes<HTMLDivElement> & {
    /**
     * @default 'stretch'
     */
    alignItems?: CSSProperties['alignItems'];
    children: ReactNode;
    /**
     * @default 'initial'
     * @description This is a shorthand for flex-grow, flex-shrink, and flex-basis.
     */
    childrenFlex?:
      | 'auto'
      | '1 0'
      | '0 1'
      | 'initial'
      | 'inherit'
      | 'unset'
      // Combine with never to make sure string doesn't override the union
      | (string & { _?: never });
    /**
     * @default 'row'
     */
    flexDirection?: CSSProperties['flexDirection'];
    flexWrap?: CSSProperties['flexWrap'];
    /**
     * @default false
     */
    fullHeight?: boolean;
    /**
     * @default false
     */
    fullWidth?: boolean;
    /**
     * @default 8
     */
    gap?: number;
    /**
     * @default 'flex-start'
     */
    justifyContent?: CSSProperties['justifyContent'];
    /**
     * @default 0
     */
    padding?: number;
  };

/**
 * Flex component is a layout utility that provides flexible box layouts with
 * configurable alignment, direction, spacing, and other flexbox properties.
 *
 * @example Basic usage - row layout (default)
 * <Flex>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Flex>
 *
 * @example Column layout
 * <Flex flexDirection="column">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Flex>
 *
 * @example Custom gap between items
 * <Flex gap={16}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Flex>
 *
 * @example Centered items (horizontally and vertically)
 * <Flex justifyContent="center" alignItems="center">
 *   <div>Centered Content</div>
 * </Flex>
 *
 * @example Space between items
 * <Flex justifyContent="space-between">
 *   <div>Left</div>
 *   <div>Middle</div>
 *   <div>Right</div>
 * </Flex>
 *
 * @example Full width container
 * <Flex fullWidth>
 *   <div>Takes full width of parent</div>
 * </Flex>
 *
 * @example Full height container
 * <Flex fullHeight>
 *   <div>Takes full height of parent</div>
 * </Flex>
 *
 * @example With wrap for responsive layouts
 * <Flex flexWrap="wrap">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 *   <div>Item 4</div>
 * </Flex>
 *
 * @example Setting flex properties for children
 * <Flex childrenFlex="1 0">
 *   <div>Equal width</div>
 *   <div>Equal width</div>
 * </Flex>
 *
 * @example With padding
 * <Flex padding={16}>
 *   <div>Content with padding</div>
 * </Flex>
 */
export const Flex = ({
  alignItems = 'stretch',
  children,
  childrenFlex = 'initial',
  className,
  flexDirection = 'row',
  flexWrap = 'nowrap',
  fullHeight = false,
  fullWidth = false,
  gap = 8,
  justifyContent = 'flex-start',
  padding = 0,
  style,
  ...rest
}: FlexProps) => (
  <div
    {...rest}
    className={clsx(
      className,
      styles.flexWrapper,
      fullWidth && styles.fullWidth,
      fullHeight && styles.fullHeight,
    )}
    style={{
      ...style,
      '--amino-flex-wrapper-align-items': alignItems,
      '--amino-flex-wrapper-flex-children': childrenFlex,
      '--amino-flex-wrapper-flex-direction': flexDirection,
      '--amino-flex-wrapper-flex-wrap': flexWrap,
      '--amino-flex-wrapper-gap': `${gap}px`,
      '--amino-flex-wrapper-justify-content': justifyContent,
      '--amino-flex-wrapper-padding': `${padding}px`,
    }}
  >
    {children}
  </div>
);
