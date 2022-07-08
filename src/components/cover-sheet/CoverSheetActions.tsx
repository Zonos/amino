import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { HStack } from 'src/components/stack/HStack';
import styled from 'styled-components';

const Actions = styled.div`
  margin-right: var(--amino-space);
  z-index: 990;
`;

export type CoverSheetProps = {
  children: React.ReactNode;
};

export const CoverSheetActions = ({ children }: CoverSheetProps) => {
  const [coverSheetReady, setCoverSheetReady] = useState(false);

  useEffect(() => {
    if (!coverSheetReady) {
      setCoverSheetReady(true);
    }
  }, [coverSheetReady]);

  if (typeof document !== 'undefined' && coverSheetReady) {
    const div = document.querySelector('#cover-sheet-actions');
    if (div) {
      return createPortal(
        <Actions>
          <HStack>{children}</HStack>
        </Actions>,
        div
      );
    }
  }
  return null;
};
