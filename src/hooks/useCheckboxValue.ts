import { useState, useCallback } from "react";

export const useCheckboxValue = (initialValue: boolean) => {
  let [checked, setChecked] = useState(initialValue);

  let onChange = useCallback(setChecked, []);

  return {
    checked,
    onChange
  };
};
