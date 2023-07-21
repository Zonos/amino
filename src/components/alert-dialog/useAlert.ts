import { useContext } from 'react';

import { AlertContext } from 'src/components/alert-dialog/AlertContext';

export const useAlert = () => useContext(AlertContext);
