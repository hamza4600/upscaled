import { useState, useEffect } from "react";

const usePersistedState = (key, defaultValue) => {
  const isSSR = typeof window === "undefined";

  const [state, setState] = useState(() => {
    if (!isSSR) {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    }
    return defaultValue;
  });

  useEffect(() => {
    if (!isSSR) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
