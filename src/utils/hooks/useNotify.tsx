import { useContext } from 'react';

import { ToastContext } from 'src/components/toast/ToastContext';

export const useNotify = () => useContext(ToastContext);
