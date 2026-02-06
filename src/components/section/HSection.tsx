import { type ReactNode, useState } from 'react';

import { Button } from 'src/components/button/Button';
import { Collapse } from 'src/components/collapse/Collapse';
import { SectionInnerWrapper } from 'src/components/section/_SectionInnerWrapper';
import { SectionSubheader } from 'src/components/section/_SectionSubheader';
import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import { ChevronUpIcon } from 'src/icons/ChevronUpIcon';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

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
      className={cn('p-2 mb-10 grid-cols-[1fr_2fr]', className)}
      style={style}
    >
      {label && (
        <SectionInnerWrapper>
          <div className="flex flex-col">
            {collapsible ? (
              <div
                className="flex justify-between items-center"
                onClick={() => setCollapsed(!collapsed)}
                onKeyDown={() => null}
                role="button"
                tabIndex={0}
              >
                <Text type="title">{label}</Text>
                <Button
                  className={cn(
                    'relative ml-1 transition-all duration-200 bg-transparent',
                    'hover:bg-transparent hover:text-gray-800',
                    'hover:[&_path[data-is-secondary-color]]:fill-gray-300',
                    'active:bg-transparent active:text-gray-800',
                    'active:[&_path[data-is-secondary-color]]:fill-gray-400',
                    'focus:bg-transparent focus:text-gray-800',
                    'focus:[&_path[data-is-secondary-color]]:fill-gray-400',
                    collapsed && 'rotate-90',
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
