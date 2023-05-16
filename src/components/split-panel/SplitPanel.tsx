import {
  type HTMLAttributes,
  type ReactNode,
  Children,
  isValidElement,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Split, { type SplitProps } from '@zonos/react-split';
import styled from 'styled-components';

const StyledSplit = styled(Split)`
  > .w-split-pane[style*='width: 0'] {
    opacity: 0;
  }
  > :last-child {
    flex: 1;
  }
`;

type BaseSplitPaneProps = {
  /**
   * @param children
   * @description The content of the component.
   */
  children: ReactNode;
  /**
   * @param className
   * @description Override or extend the styles applied to the component.
   */
  className?: string;
  collapseAll?: boolean;
};

type SplitPaneProps = BaseSplitPaneProps &
  Omit<SplitProps, keyof HTMLAttributes<HTMLDivElement>>;

const _SplitPanel = ({
  children,
  className,
  visiable,
  collapseAll,
  ...props
}: SplitPaneProps) => {
  const childrenArray = useMemo(() => Children.toArray(children), [children]);
  const [splitPaneStyles, setSplitPaneStyles] = useState<
    (Partial<CSSStyleDeclaration> | null)[]
  >([]);
  const [defaultSplitPaneWidth, setDefaultSplitPaneWidth] = useState<
    (Partial<CSSStyleDeclaration> | null)[]
  >([]);

  // Collapse or expand all split panes
  const togglePanel = useCallback(
    ({
      collapse,
      childrenLength,
    }: {
      collapse?: boolean;
      childrenLength: number;
    }) => {
      const splitPanesLength = childrenLength;
      if (collapse) {
        // Collapse all split panes
        setSplitPaneStyles(prevSplitPanes =>
          prevSplitPanes.map((style, index) => {
            // Expand the first split pane, collapse the rest
            const width = index === 0 ? '100%' : '0';
            if (!style) {
              // Skip if style is not provided
              return { width };
            }
            return { ...style, width };
          })
        );
      } else {
        // Restore all split panes
        setSplitPaneStyles(prevSplitPanes => {
          if (collapse) {
            return prevSplitPanes;
          }
          return prevSplitPanes.map((style, index) => {
            // Use default width if provided, otherwise use equal width
            const width =
              defaultSplitPaneWidth[index]?.width ||
              `calc(100% / ${splitPanesLength})`;

            if (!style) {
              // Skip if style is not provided
              return {
                width,
                opacity: '1',
              };
            }
            return {
              ...style,
              width,
              opacity: '1',
            };
          });
        });
      }
    },
    [defaultSplitPaneWidth]
  );

  useEffect(() => {
    if (childrenArray.length > 0) {
      // Set default size for each split pane, hide split pane if default size / current width is 0
      const newSplitPanes = childrenArray.map(child => {
        const currentChild = Children.only(child);
        if (!isValidElement(currentChild)) {
          return null;
        }
        const { style } = currentChild.props;
        return style
          ? {
              ...style,
              width: style.width,
            }
          : null;
      });
      setDefaultSplitPaneWidth(newSplitPanes);
      setSplitPaneStyles(newSplitPanes);
    }
  }, [childrenArray, childrenArray.length]);

  useEffect(() => {
    togglePanel({
      collapse: !!collapseAll,
      childrenLength: childrenArray.length,
    });
  }, [collapseAll, childrenArray.length, togglePanel]);

  return (
    <StyledSplit visiable={!collapseAll} className={className} {...props}>
      {childrenArray.map((child, index) => {
        const currentChild = Children.only(child);
        if (!isValidElement(currentChild)) {
          return null;
        }
        const { style } = currentChild.props;
        if (collapseAll && index > 0) {
          return {
            ...currentChild,
            props: {
              ...currentChild.props,
              className: 'w-split-pane',
              style: {
                ...style,
                width: 0,
                opacity: 0,
              },
            },
          };
        }
        return currentChild
          ? {
              ...currentChild,
              props: {
                ...currentChild.props,
                className: 'w-split-pane',
                style: {
                  ...style,
                  width: splitPaneStyles[index]?.width,
                  opacity: splitPaneStyles[index]?.opacity,
                },
              },
            }
          : null;
      })}
    </StyledSplit>
  );
};
export const SplitPanel = memo(_SplitPanel);
