import { useContext } from 'react';

import { AlertContext } from '~/src/components/AlertDialog';

export const useAlert = () => {
  return useContext(AlertContext);
};
