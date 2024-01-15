import { type ReactNode, useState } from 'react';

import clsx from 'clsx';

import { Button } from 'src/components/button/Button';
import { Collapse } from 'src/components/collapse/Collapse';
import { SectionInnerWrapper } from 'src/components/section/_SectionInnerWrapper';
import { SectionSubheader } from 'src/components/section/_SectionSubheader';
import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './HSection.module.scss';

export type HSectionProps = BaseProps & {
  children: ReactNode;
  /**
   * @info Initial collapse state. **Note**: only have effect when `collapsible` is specified
   * @default false
   * */
  collapseByDefault?: boolean;
  /**
   * @info Make the section content collapsible or not
   * @default false
   */
  collapsible?: boolean;
  label?: ReactNode;
  sublabel?: ReactNode;
};

export const HSection = ({
  children,
  className,
  collapseByDefault = false,
  collapsible = false,
  label,
  style,
  sublabel = '',
}: HSectionProps) => {
  const [collapsed, setCollapsed] = useState(collapseByDefault);
  const renderContent = () =>
    collapsible ? (
      <Collapse collapsed={collapsed}>{children}</Collapse>
    ) : (
      <div>{children}</div>
    );
  return (
    <HStack
      className={clsx(className, styles.styledSectionWrapper)}
      style={style}
    >
      {label && (
        <SectionInnerWrapper>
          <div className={styles.styledDiv}>
            {collapsible ? (
              <div
                className={styles.titleDiv}
                onClick={() => setCollapsed(!collapsed)}
                onKeyDown={() => null}
                role="button"
                tabIndex={0}
              >
                <Text type="title">{label}</Text>
                <Button
                  className={clsx(
                    styles.styledCollapseIndicator,
                    collapsed && styles.collapsed,
                  )}
                  icon={<ChevronUpIcon />}
                  onClick={() => setCollapsed(!collapsed)}
                  size="sm"
                  variant="plain"
                />
              </div>
            ) : (
              <Text type="title">{label}</Text>
            )}

            {sublabel && <SectionSubheader>{sublabel}</SectionSubheader>}
          </div>
        </SectionInnerWrapper>
      )}
      {renderContent()}
    </HStack>
  );
};
