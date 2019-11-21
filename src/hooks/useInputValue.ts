import { useState, useCallback } from "react";

export const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event, value) => {
    if (event) {
      setValue(event.currentTarget.value);
      return;
    }

    if (value) {
      setValue(value);
      return;
    }
  }, []);

  return {
    value,
    onChange
  };
};
