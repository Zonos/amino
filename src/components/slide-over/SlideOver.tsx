import type { ReactNode } from 'react';

import { Button } from 'src/components/button/Button';
import {
  BaseDialog,
  type BaseDialogProps,
} from 'src/components/dialog/BaseDialog';
import { HStack } from 'src/components/stack/HStack';
import { VStack } from 'src/components/stack/VStack';
import { Text } from 'src/components/text/Text';
import { RemoveIcon } from 'src/icons/RemoveIcon';

import styles from './SlideOver.module.scss';

export type SlideOverProps = BaseDialogProps & {
  actions?: ReactNode;
  bottomActions?: ReactNode;
  fullWindowWidth?: boolean;
  label?: string;
  subtitle?: ReactNode;
};

/**
 * SlideOver component displays content in a panel that slides in from the edge of the screen.
 * It's useful for secondary content or actions that don't require leaving the current page.
 *
 * @example Basic usage
 * <SlideOver
 *   label="Panel Title"
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 * >
 *   <Text>Panel content goes here.</Text>
 * </SlideOver>
 *
 * @example With subtitle
 * <SlideOver
 *   label="Edit Profile"
 *   subtitle={<Text type="caption">Update your personal information</Text>}
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 * >
 *   <VStack spacing={16}>
 *     <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
 *     <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
 *   </VStack>
 * </SlideOver>
 *
 * @example With header actions
 * <SlideOver
 *   label="Document Details"
 *   actions={<Button variant="primary" size="small">Edit</Button>}
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 * >
 *   <Text>Document content preview</Text>
 * </SlideOver>
 *
 * @example With bottom actions
 * <SlideOver
 *   label="Create Item"
 *   bottomActions={
 *     <>
 *       <Button variant="standard" onClick={() => setIsOpen(false)}>
 *         Cancel
 *       </Button>
 *       <Button variant="primary" onClick={handleSave}>
 *         Save
 *       </Button>
 *     </>
 *   }
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 * >
 *   <Text>Form content</Text>
 * </SlideOver>
 *
 * @example Custom width
 * <SlideOver
 *   label="Wide Panel"
 *   width={600}
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 * >
 *   <Text>This panel is wider than the default.</Text>
 * </SlideOver>
 *
 * @example Full window width
 * <SlideOver
 *   label="Detailed View"
 *   fullWindowWidth
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 * >
 *   <Text>This panel takes the full window width.</Text>
 * </SlideOver>
 *
 * @example With complex content
 * <SlideOver
 *   label="Shopping Cart"
 *   subtitle={<Text type="caption">3 items</Text>}
 *   bottomActions={
 *     <>
 *       <Button variant="standard" onClick={() => setIsOpen(false)}>
 *         Continue Shopping
 *       </Button>
 *       <Button variant="primary" onClick={handleCheckout}>
 *         Checkout
 *       </Button>
 *     </>
 *   }
 *   open={isOpen}
 *   onClose={() => setIsOpen(false)}
 * >
 *   <VStack spacing={16}>
 *     {items.map(item => (
 *       <Card key={item.id}>
 *         <Text>{item.name}</Text>
 *         <Text>${item.price}</Text>
 *       </Card>
 *     ))}
 *   </VStack>
 * </SlideOver>
 */
export const SlideOver = ({
  actions,
  bottomActions,
  children,
  fullWindowWidth,
  label,
  onClose,
  subtitle,
  width = 444,
  ...props
}: SlideOverProps) => (
  <BaseDialog
    className={styles.styledBaseDialog}
    fullWindowWidth={fullWindowWidth}
    onClose={onClose}
    popupMotionProps={{
      animate: { x: 0 },
      exit: { x: width },
      initial: { x: width },
      transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
    }}
    width={width}
    {...props}
  >
    <div className={styles.wrapper}>
      <header className={styles.slideOverHeader}>
        <div>
          <Button icon={<RemoveIcon />} onClick={onClose} />
          {subtitle ? (
            <VStack spacing={0}>
              <Text type="subheader">{label}</Text>
              {subtitle}
            </VStack>
          ) : (
            <Text type="subheader">{label}</Text>
          )}
        </div>
        {actions && <div>{actions}</div>}
      </header>
      <div className={styles.slideOverContent}>{children}</div>
      {bottomActions && (
        <div className={styles.footer}>
          <HStack spacing={8}>{bottomActions}</HStack>
        </div>
      )}
    </div>
  </BaseDialog>
);
