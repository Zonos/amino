import { type ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import clsx from 'clsx';

import { HStack } from 'src/components/stack/HStack';
import type { BaseProps } from 'src/types/BaseProps';

import styles from './CoverSheetActions.module.scss';

export type CoverSheetProps = BaseProps & {
  children: ReactNode;
  /**
   * Determine where to put this actions in the coversheet
   * @default id for coversheet component is `__cover-sheet-actions`
   * */
  coverSheetActionId: string;
};

export const CoverSheetActions = ({
  children,
  className,
  coverSheetActionId,
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
        <div className={clsx(className, styles.actions)}>
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
