import { useCallback } from "react";
import { type AddInstrumentFormValues } from "../../instruments/types";

import useLocalStorage from "./useLocalStorage";
import { LocalStorageKeys } from "../constants";

const useInstruments = () => {
  const { setLocalStorage, getLocalStorage } = useLocalStorage();

  const addInstrument = useCallback(
    (newInstrument: AddInstrumentFormValues) => {
      const existingData =
        getLocalStorage(LocalStorageKeys.InstrumentList) || [];
      setLocalStorage(LocalStorageKeys.InstrumentList, [
        ...existingData,
        { ...newInstrument, Id: existingData.length + 1 },
      ]);
    },
    [getLocalStorage, setLocalStorage]
  );

  return { addInstrument };
};

export default useInstruments;
