import { type ReactNode, useEffect } from 'react';

import { Button } from 'src/components/button/Button';
import { CoverSheetActions } from 'src/components/cover-sheet/CoverSheetActions';
import {
  BaseDialog,
  type BaseDialogProps,
} from 'src/components/dialog/BaseDialog';
import { Text } from 'src/components/text/Text';
import { RemoveIcon } from 'src/icons/RemoveIcon';
import { cn } from 'src/utils/cn';

export type CoverSheetProps = BaseDialogProps & {
  /**
   * Unique ID for the action wrapper element where CoverSheetActions will be portaled into
   * @default '__cover-sheet-actions'
   */
  actionWrapperId?: string;
  /**
   * Actions to display in the sheet header, typically buttons
   */
  actions?: ReactNode;
  /**
   * Custom component to render in the header area
   */
  headerComponent?: ReactNode;
  /**
   * Whether to hide the close button in the header
   * @default false
   */
  hideCloseButton?: boolean;
  /**
   * Title text to display in the header
   */
  label: string;
};

/**
 * CoverSheet component provides a sliding panel that covers the current view
 * from the bottom of the screen. It's commonly used for displaying additional
 * content or actions without navigating away from the current page.
 *
 * @example Basic usage
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Button onClick={() => setOpen(true)}>Open Cover Sheet</Button>
 *
 * <CoverSheet
 *   label="Details"
 *   open={open}
 *   onClose={() => setOpen(false)}
 * >
 *   <p>Content goes here...</p>
 * </CoverSheet>
 * ```
 *
 * @example With action buttons
 * ```tsx
 * <CoverSheet
 *   label="Edit Profile"
 *   open={isOpen}
 *   onClose={handleClose}
 *   actions={
 *     <>
 *       <Button onClick={handleCancel}>Cancel</Button>
 *       <Button variant="primary" onClick={handleSave}>Save</Button>
 *     </>
 *   }
 * >
 *   <form>
 *    <fields>
 *   </form>
 * </CoverSheet>
 * ```
 *
 * @example With custom header component
 * ```tsx
 * <CoverSheet
 *   label="Advanced Settings"
 *   open={isOpen}
 *   onClose={handleClose}
 *   headerComponent={
 *     <MenuButton action={<Button variant="primary">Actions</Button>}>
 *       <Menu>
 *         <MenuItem onClick={handleExport}>Export</MenuItem>
 *         <MenuItem onClick={handleImport}>Import</MenuItem>
 *       </Menu>
 *     </MenuButton>
 *   }
 * >
 *   <p>Content goes here...</p>
 * </CoverSheet>
 * ```
 *
 * @example Without close button
 * ```tsx
 * <CoverSheet
 *   label="Terms of Service"
 *   open={isOpen}
 *   onClose={handleClose}
 *   hideCloseButton={true}
 *   actions={<Button onClick={handleClose}>I Understand</Button>}
 * >
 *   <p>Terms and conditions content...</p>
 * </CoverSheet>
 * ```
 *
 * @example With dynamic actions using CoverSheetActions
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <CoverSheet
 *   label="Document Actions"
 *   open={open}
 *   onClose={() => setOpen(false)}
 *   actionWrapperId="document-actions"
 * >
 *   <p>Select documents to perform actions on them.</p>
 *
 *   {selectedDocuments.length > 0 && (
 *     <CoverSheetActions coverSheetActionId="document-actions">
 *       <Button onClick={handleDelete}>Delete Selected</Button>
 *       <Button variant="primary" onClick={handleDownload}>Download</Button>
 *     </CoverSheetActions>
 *   )}
 * </CoverSheet>
 * ```
 */
export const CoverSheet = ({
  actions,
  actionWrapperId = '__cover-sheet-actions',
  children,
  className,
  headerComponent,
  hideCloseButton = false,
  label,
  onClose,
  open,
  ...props
}: CoverSheetProps) => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }
    if (document.querySelectorAll(`[id='${actionWrapperId}']`).length > 1) {
      // eslint-disable-next-line no-console
      console.error(
        `Duplicate id "${actionWrapperId}" detected in "CoverSheet" component. Please set "actionWrapperId" to a unique id.`,
      );
    }
  }, [actionWrapperId]);

  useEffect(() => {
    if (!document?.body) {
      return;
    }
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <BaseDialog
      className={cn(
        'rounded-none max-h-screen outline-none box-border overscroll-contain',
        'bg-amino-page fixed left-0 top-0 w-screen h-screen',
        'text-amino border border-amino-subtle',
        'print:h-auto print:min-h-screen print:absolute',
        className,
      )}
      onClose={onClose}
      open={open}
      popupMotionProps={{
        animate: { translateY: 0 },
        exit: { translateY: '100vh' },
        initial: { translateY: '100vh' },
        transition: { duration: 0.35, ease: [0, 0, 0, 1] },
      }}
      {...props}
    >
      <header
        className={cn(
          'border-b border-amino-subtle px-amino-32 flex justify-between items-center',
          'h-16 sticky top-0 z-[99] bg-amino-page',
          'print:hidden',
        )}
        style={{ padding: 'var(--amino-space-16) var(--amino-space-32)' }}
      >
        <div className="flex items-center gap-amino-16">
          {!hideCloseButton && (
            <Button icon={<RemoveIcon size={20} />} onClick={onClose} />
          )}
          <Text type="subheader">{label}</Text>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {headerComponent}
        </div>
        <div id={actionWrapperId}>
          {actions && (
            <CoverSheetActions coverSheetActionId={actionWrapperId}>
              {actions}
            </CoverSheetActions>
          )}
        </div>
      </header>
      <div
        className="flex-grow overflow-auto"
        style={{ padding: 'var(--amino-space-56)' }}
      >
        {children}
      </div>
    </BaseDialog>
  );
};
