import { useState, useLayoutEffect } from "react";

const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    } else {
      return defaultValue;
    }
  });

  // Set the initial value in local storage if it doesn't exist
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(defaultValue));
      }
    }
  }, [key, defaultValue]);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state, key]);

  return [state, setState];
};

export default usePersistedState;
