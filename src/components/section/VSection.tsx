import type { ReactNode } from 'react';

import clsx from 'clsx';

import { SectionInnerWrapper } from 'src/components/section/_SectionInnerWrapper';
import { SectionSubheader } from 'src/components/section/_SectionSubheader';
import { HStack } from 'src/components/stack/HStack';
import type { FontType } from 'src/components/text/Text';
import type { BaseProps } from 'src/types/BaseProps';

import { SectionHeader } from './_SectionHeader';
import styles from './VSection.module.scss';

export type VSectionProps = BaseProps & {
  /**
   * Actions to display in the header, typically buttons
   */
  actions?: ReactNode;
  /**
   * Content to display within the section
   */
  children?: ReactNode;
  /**
   * Title text or element to display at the top of the section
   */
  label?: ReactNode;
  /**
   * The font type to use for the label
   * @default 'title'
   */
  labelType?: FontType;
  /**
   * Secondary text or element to display below the label
   */
  sublabel?: ReactNode;
};

/**
 * VSection component provides a vertical section layout with an optional header
 * containing a label, sublabel, and action buttons.
 *
 * @example Basic usage
 * ```tsx
 * <VSection label="Section Title">
 *   <p>Content goes here...</p>
 * </VSection>
 * ```
 *
 * @example With sublabel
 * ```tsx
 * <VSection
 *   label="Payment Information"
 *   sublabel="Add your payment details"
 * >
 *   <PaymentForm />
 * </VSection>
 * ```
 *
 * @example With actions
 * ```tsx
 * <VSection
 *   label="Order Details"
 *   actions={
 *     <>
 *       <Button>Print</Button>
 *       <Button variant="primary">Edit</Button>
 *     </>
 *   }
 * >
 *   <OrderDetails />
 * </VSection>
 * ```
 *
 * @example Custom label type
 * ```tsx
 * <VSection
 *   label="Order Summary"
 *   labelType="subheader"
 *   sublabel="Order #12345"
 * >
 *   <OrderSummary />
 * </VSection>
 * ```
 *
 * @example Multiple sections
 * ```tsx
 * <VStack spacing={32}>
 *   <VSection
 *     label="Shipping Information"
 *     actions={<Button>Edit</Button>}
 *   >
 *     <ShippingDetails />
 *   </VSection>
 *
 *   <VSection
 *     label="Payment Method"
 *     sublabel="Select your payment method"
 *     actions={<Button>Add Payment</Button>}
 *   >
 *     <PaymentOptions />
 *   </VSection>
 * </VStack>
 * ```
 */
export const VSection = ({
  actions,
  children,
  className,
  label,
  labelType = 'title',
  style,
  sublabel = '',
}: VSectionProps) => (
  <div className={clsx(className, styles.styledSectionWrapper)} style={style}>
    {label && (
      <SectionInnerWrapper>
        <div>
          {typeof label === 'string' ? (
            <SectionHeader type={labelType}>{label}</SectionHeader>
          ) : (
            label
          )}
          {typeof sublabel === 'string' ? (
            <SectionSubheader>{sublabel}</SectionSubheader>
          ) : (
            sublabel
          )}
        </div>

        <HStack spacing={8}>{actions}</HStack>
      </SectionInnerWrapper>
    )}
    {children && <div>{children}</div>}
  </div>
);
