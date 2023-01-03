import { useContext } from 'react';

import { ConfirmContext } from './ConfirmContext';

export const useConfirm = () => useContext(ConfirmContext);
