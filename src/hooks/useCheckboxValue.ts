import { useState, useCallback } from 'react';

export const useCheckboxValue = (initialValue: boolean) => {
  const [checked, setChecked] = useState(initialValue);

  const onChange = useCallback(setChecked, [setChecked]);

  return {
    checked,
    onChange,
  };
};
