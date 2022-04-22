import { useContext } from 'react';

import { ConfirmContext } from 'src/components/ConfirmDialog';

export const useConfirm = () => {
  return useContext(ConfirmContext);
};
