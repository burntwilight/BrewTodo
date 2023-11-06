import { useState, useEffect } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from local storage:', error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      if (value === null || value === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error('Error writing to local storage:', error);
    }
  }, [value, key]);

  // Add a clean-up function
  useEffect(() => {
    return () => {
      localStorage.removeItem(key);
    };
  }, [key]);

  return [value, setValue];
};

export { useLocalStorage };
