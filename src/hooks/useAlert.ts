import { useContext } from 'react';

import { AlertContext } from 'components/AlertDialog';

export const useAlert = () => {
  return useContext(AlertContext);
};
