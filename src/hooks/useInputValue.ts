import { useState, useCallback } from "react";

export const useInputValue = (initialValue: string) => {
  let [value, setValue] = useState(initialValue);

  let onChange = useCallback(function(event) {
    setValue(event.currentTarget.value);
  }, []);

  return {
    value,
    onChange
  };
};
