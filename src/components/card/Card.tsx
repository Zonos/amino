import type { ReactNode } from 'react';

import { HStack } from 'src/components/stack/HStack';
import { Text } from 'src/components/text/Text';
import { theme } from 'src/styles/constants/theme';
import type { BaseProps } from 'src/types/BaseProps';
import { cn } from 'src/utils/cn';

export type CardProps = BaseProps & {
  actions?: ReactNode;
  children: ReactNode;
  footerActions?: ReactNode;
  footerContent?: ReactNode;
  footerHeight?: number;
  label?: ReactNode;
  spacing?: string;
};

/**
 * Card component provides a container with optional header, content area, and footer.
 * It's commonly used to group related information and controls.
 *
 * @example Basic card
 * <Card label="Basic Card">
 *   This is the content of the card.
 * </Card>
 *
 * @example Card with header actions
 * <Card
 *   label="Card With Actions"
 *   actions={<Button>Edit</Button>}
 * >
 *   Card content with header action button.
 * </Card>
 *
 * @example Card with footer
 * <Card
 *   label="Card With Footer"
 *   footerContent="Footer information"
 *   footerActions={<Button>Save</Button>}
 * >
 *   Card content with footer.
 * </Card>
 *
 * @example Card with multiple footer actions
 * <Card
 *   label="Card With Multiple Actions"
 *   footerActions={
 *     <>
 *       <Button variant="subtle">Cancel</Button>
 *       <Button variant="primary">Submit</Button>
 *     </>
 *   }
 * >
 *   Card with multiple action buttons in the footer.
 * </Card>
 *
 * @example Card with custom footer height
 * <Card
 *   label="Card With Custom Footer Height"
 *   footerContent="This footer has a fixed height"
 *   footerHeight={120}
 * >
 *   Card with a fixed height footer.
 * </Card>
 *
 * @example Card with custom spacing
 * <Card
 *   label="Card With Custom Spacing"
 *   spacing="16px"
 * >
 *   Card content with custom internal spacing.
 * </Card>
 */
export const Card = ({
  actions,
  children,
  className,
  footerActions,
  footerContent,
  footerHeight,
  label,
  spacing,
  style,
}: CardProps) => (
  <div
    className={cn(
      'border border-amino rounded-amino-6 bg-gray-0 dark:bg-gray-50',
      !spacing && 'p-amino-24',
      className,
    )}
    style={{
      ...style,
      ...(spacing ? { padding: spacing } : {}),
      '--amino-card-footer-height': footerHeight ? `${footerHeight}px` : 'auto',
      '--amino-card-margin': spacing
        ? `calc(${spacing} * -1)`
        : theme.spaceNegative24,
      '--amino-card-margin-bottom': spacing || theme.space24,
      '--amino-card-margin-top': spacing || theme.space24,
      '--amino-card-padding-spacing': spacing || theme.space24,
    }}
  >
    {label && (
      <div className="flex items-center border-b border-amino h-[65px] leading-[65px] select-none m-[var(--amino-card-margin)] mb-[var(--amino-card-margin-bottom)] p-[var(--amino-card-padding-spacing)] [&_h5]:mb-0 [&_h5]:flex-1">
        <Text type="subheader">{label}</Text>

        <HStack spacing={8}>{actions}</HStack>
      </div>
    )}
    {children}
    {(footerActions || footerContent) && (
      <div className="flex items-center justify-between m-[var(--amino-card-margin)] p-[var(--amino-card-padding-spacing)] border-t border-amino bg-amino-surface-secondary dark:bg-gray-100 mt-[var(--amino-card-margin-top)] rounded-b-amino-8 h-[var(--amino-card-footer-height)]">
        <div>{footerContent}</div>
        <HStack spacing={8}>{footerActions}</HStack>
      </div>
    )}
  </div>
);
