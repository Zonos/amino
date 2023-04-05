import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { HStack } from 'src/components/stack/HStack';
import styled from 'styled-components';

const Actions = styled.div`
  z-index: 990;
`;

export type CoverSheetProps = {
  children: ReactNode;
  className?: string;
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
        <Actions className={className}>
          <HStack>{children}</HStack>
        </Actions>,
        div
      );
    }
    throw Error(
      `CoverSheetActions: Could not find Coversheet wrapper with id "${coverSheetActionId}"`
    );
  }
  return null;
};
