import { useState, useEffect } from "react";

const usePersistedState = (key, defaultValue) => {
  
  const [state, setState] = useState(() => {
    let storedValue = defaultValue;
    if (typeof window !== 'undefined') {
      storedValue = localStorage.getItem(key);
      storedValue = storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    }
    return storedValue;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState];
};

export default usePersistedState;
