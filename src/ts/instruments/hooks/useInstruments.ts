import { useState, useEffect, useCallback } from "react";
import { type AddInstrumentFormValues, type Instrument } from "../types";

import useLocalStorage from "../../shared/hooks/useLocalStorage";
import { LocalStorageKeys } from "../../shared/constants";

const useInstruments = () => {
  const { setLocalStorage, getLocalStorage } = useLocalStorage();

  const [instrumentList, setInstrumentList] = useState([]);

  const getExistingData = useCallback(() => {
    return getLocalStorage(LocalStorageKeys.InstrumentList) || [];
  }, [getLocalStorage]);

  const getInstrumentList = useCallback(
    () => setInstrumentList(getExistingData()),
    [getExistingData]
  );

  const createInstrument = useCallback(
    (newInstrument: AddInstrumentFormValues) => {
      const existingData = getExistingData();

      setLocalStorage(LocalStorageKeys.InstrumentList, [
        ...existingData,
        { ...newInstrument, Id: crypto.randomUUID() },
      ]);
    },
    [getExistingData, setLocalStorage]
  );

  const deleteInstrument = useCallback(
    (id: string) => {
      const existingData = getExistingData();

      existingData.some((inst: Instrument, index: number) => {
        if (inst.Id === id) {
          const tempArr = [...existingData];
          tempArr.splice(index, 1);

          setLocalStorage(LocalStorageKeys.InstrumentList, tempArr);

          return true;
        } else {
          return false;
        }
      });
    },
    [getExistingData, setLocalStorage]
  );

  useEffect(() => {
    getInstrumentList();

    const handleStorage = () => getInstrumentList();

    // Watch for storage changes so Instrument list can be updated
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [getInstrumentList]);

  return { instrumentList, createInstrument, deleteInstrument };
};

export default useInstruments;
