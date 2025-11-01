import { useCallback } from "react";

export const useLocalStorage = () => {
  const getLocalStorage = useCallback((key: string) => {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : undefined;
  }, []);

  const setLocalStorage = useCallback((key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));

    // Dispatch storage event so that storage can be watched for changes
    window.dispatchEvent(new Event("storage"));
  }, []);

  return {
    getLocalStorage,
    setLocalStorage,
  };
};

export default useLocalStorage;
