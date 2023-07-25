import { useContext } from 'react';

import { ConfirmContext } from 'src/components/confirm-dialog/ConfirmContext';

export const useConfirm = () => useContext(ConfirmContext);
