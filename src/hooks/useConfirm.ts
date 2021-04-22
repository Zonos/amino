import { useContext } from 'react';

import { ConfirmContext } from 'components/ConfirmDialog';

export const useConfirm = () => {
  return useContext(ConfirmContext);
};
