import { type ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import clsx from 'clsx';

import { HStack } from 'src/components/stack/HStack';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './CoverSheetActions.module.scss';

export type CoverSheetProps = BaseProps & {
  /**
   * Action elements to be rendered in the CoverSheet header
   */
  children: ReactNode;
  /**
   * ID of the element in the CoverSheet where these actions should be rendered
   * Must match the actionWrapperId prop of the parent CoverSheet
   * @default '__cover-sheet-actions'
   */
  coverSheetActionId: string;
};

/**
 * CoverSheetActions component allows for dynamic placement of action buttons
 * in a CoverSheet header. It uses React Portals to render content in a specific
 * location within the CoverSheet.
 *
 * This component should be used as a child of a CoverSheet component, and the
 * coverSheetActionId prop must match the actionWrapperId of the parent CoverSheet.
 *
 * @example Basic usage
 * ```tsx
 * <CoverSheet
 *   label="Document Actions"
 *   open={open}
 *   onClose={() => setOpen(false)}
 *   actionWrapperId="document-sheet"
 * >
 *   <div>Cover sheet content here</div>
 *
 *   <CoverSheetActions coverSheetActionId="document-sheet">
 *     <Button onClick={handleCancel}>Cancel</Button>
 *     <Button variant="primary" onClick={handleSave}>Save</Button>
 *   </CoverSheetActions>
 * </CoverSheet>
 * ```
 *
 * @example Conditional actions
 * ```tsx
 * <CoverSheet
 *   label="Edit Item"
 *   open={isOpen}
 *   onClose={handleClose}
 *   actionWrapperId="edit-item-actions"
 * >
 *   <form>
 *    <TextField label="Item Name" value={itemName} onChange={setItemName} />
 *   </form>
 *
 *   {isFormValid && (
 *     <CoverSheetActions coverSheetActionId="edit-item-actions">
 *       <Button variant="primary" onClick={handleSubmit}>Submit</Button>
 *     </CoverSheetActions>
 *   )}
 * </CoverSheet>
 * ```
 *
 * @example Dynamic actions based on state
 * ```tsx
 * const [selectedItems, setSelectedItems] = useState([]);
 *
 * <CoverSheet
 *   label="Manage Items"
 *   open={isOpen}
 *   onClose={handleClose}
 *   actionWrapperId="manage-items-actions"
 * >
 * <ItemSelectionUI />
 *
 *   <CoverSheetActions coverSheetActionId="manage-items-actions">
 *     {selectedItems.length === 0 ? (
 *       <Button disabled>Delete</Button>
 *     ) : (
 *       <Button onClick={() => handleDelete(selectedItems)}>
 *         Delete ({selectedItems.length})
 *       </Button>
 *     )}
 *   </CoverSheetActions>
 * </CoverSheet>
 * ```
 *
 * @example With multiple CoverSheets
 * ```tsx
 * <CoverSheet
 *   label="Primary Sheet"
 *   open={primaryOpen}
 *   onClose={() => setPrimaryOpen(false)}
 *   actionWrapperId="primary-sheet-actions"
 * >
 *   <Button onClick={() => setSecondaryOpen(true)}>
 *     Open Secondary Sheet
 *   </Button>
 *
 *   <CoverSheetActions coverSheetActionId="primary-sheet-actions">
 *     <Button onClick={primaryAction}>Primary Action</Button>
 *   </CoverSheetActions>
 *
 *   <CoverSheet
 *     label="Secondary Sheet"
 *     open={secondaryOpen}
 *     onClose={() => setSecondaryOpen(false)}
 *     actionWrapperId="secondary-sheet-actions"
 *   >
 *     <div>Secondary content</div>
 *
 *     <CoverSheetActions coverSheetActionId="secondary-sheet-actions">
 *       <Button onClick={secondaryAction}>Secondary Action</Button>
 *     </CoverSheetActions>
 *   </CoverSheet>
 * </CoverSheet>
 * ```
 */
export const CoverSheetActions = ({
  children,
  className,
  coverSheetActionId,
  style,
}: CoverSheetProps) => {
  const [coverSheetReady, setCoverSheetReady] = useState(false);

  useEffect(() => {
    if (!coverSheetReady) {
      setCoverSheetReady(true);
    }
  }, [coverSheetReady]);

  if (typeof document !== 'undefined' && coverSheetReady) {
    const div = document.querySelector(`#${coverSheetActionId}`);
    if (div) {
      return createPortal(
        <div className={clsx(className, styles.actions)} style={style}>
          <HStack spacing={8}>{children}</HStack>
        </div>,
        div,
      );
    }
    throw Error(
      `CoverSheetActions: Could not find Coversheet wrapper with id "${coverSheetActionId}"`,
    );
  }
  return null;
};
