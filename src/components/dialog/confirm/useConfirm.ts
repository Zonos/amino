import { useContext } from 'react';

import { ConfirmContext } from 'src/components/dialog/confirm/ConfirmContext';

export const useConfirm = () => useContext(ConfirmContext);
