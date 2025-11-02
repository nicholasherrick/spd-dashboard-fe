import { useState, useEffect, useCallback } from "react";
import type { InstrumentFormValues, Instrument } from "../types";

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
    (newInstrument: InstrumentFormValues) => {
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
      if (
        window.confirm("Are you sure you would like to delete this instrument?")
      ) {
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
      }
    },
    [getExistingData, setLocalStorage]
  );

  const updateInstrument = useCallback(
    (values: InstrumentFormValues, id: string) => {
      const existingData = getExistingData();

      const editIndex = existingData.findIndex(
        (inst: Instrument) => inst.Id === id
      );

      existingData.splice(editIndex, 1, values);

      setLocalStorage(LocalStorageKeys.InstrumentList, [...existingData]);
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

  return {
    instrumentList,
    createInstrument,
    deleteInstrument,
    updateInstrument,
  };
};

export default useInstruments;
