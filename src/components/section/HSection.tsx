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
  /**
   * Content to display within the section
   */
  children: ReactNode;
  /**
   * Initial collapse state. Only has effect when `collapsible` is set to true
   * @default false
   */
  collapseByDefault?: boolean;
  /**
   * Whether the section content can be collapsed
   * @default false
   */
  collapsible?: boolean;
  /**
   * Title text or element to display at the top of the section
   */
  label?: ReactNode;
  /**
   * Secondary text or element to display below the label
   */
  sublabel?: ReactNode;
};

/**
 * HSection component provides a horizontal section layout with optional
 * collapsible content, label, and sublabel.
 *
 * @example Basic usage
 * ```tsx
 * <HSection label="Section Title">
 *   <p>Content goes here...</p>
 * </HSection>
 * ```
 *
 * @example With sublabel
 * ```tsx
 * <HSection
 *   label="Account Information"
 *   sublabel="Personal details and settings"
 * >
 *   <FormContent />
 * </HSection>
 * ```
 *
 * @example Collapsible section
 * ```tsx
 * <HSection
 *   label="Advanced Settings"
 *   sublabel="Configuration options for advanced users"
 *   collapsible
 * >
 *   <AdvancedSettings />
 * </HSection>
 * ```
 *
 * @example Collapsed by default
 * ```tsx
 * <HSection
 *   label="Optional Information"
 *   collapsible
 *   collapseByDefault
 * >
 *   <OptionalFields />
 * </HSection>
 * ```
 *
 * @example Multiple sections
 * ```tsx
 * <VStack>
 *   <HSection label="Basic Information">
 *     <BasicInfoForm />
 *   </HSection>
 *
 *   <HSection
 *     label="Advanced Settings"
 *     collapsible
 *     collapseByDefault
 *   >
 *     <AdvancedSettings />
 *   </HSection>
 * </VStack>
 * ```
 */
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
