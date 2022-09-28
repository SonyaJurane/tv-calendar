import { useState, useEffect } from "react";

export const useDebounce = (value: string, delay = 500): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(debounce);
    };
  }, [value, delay]);

  return debouncedValue;
};
