import { useContext } from 'react';

import { AlertContext } from 'src/components/dialog/alert/AlertContext';

export const useAlert = () => useContext(AlertContext);
