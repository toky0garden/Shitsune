import { useCallback, useState } from "react";
import { useBoolean } from "../useBoolean/useBoolean";

export const useShowError = () => {
  const [error, setError] = useState<string>("");
  const [showError, setShowError] = useBoolean(false);

  const showErrorMsg = useCallback((msg: string) => {
    setError(msg);
    setShowError(true);
    setTimeout(() => setShowError(false), 4000);
  }, []);

  return {
    error,
    showError,
    showErrorMsg,
  };
};
