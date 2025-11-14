import { useMemo } from "react";

import InstrumentsTableRow from "./InstrumentsTableRow";
import type { Instrument, InstrumentTableProps } from "../types";
import useInstruments from "../hooks/useInstruments";

const InstrumentsTable = ({ showModal, searchText }: InstrumentTableProps) => {
  const { instrumentList } = useInstruments();

  const filteredList = useMemo(() => {
    if (!searchText) {
      return instrumentList;
    } else {
      const text = searchText.toLowerCase();

      return instrumentList?.filter(
        (inst) =>
          inst.Name.toLowerCase().includes(text) ||
          inst.SterilizationType.toLowerCase().includes(text)
      );
    }
  }, [instrumentList, searchText]);

  return instrumentList?.length ? (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Sterilization Type</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {filteredList?.map((inst: Instrument) => (
            <InstrumentsTableRow
              key={inst.Id}
              instrument={inst}
              showModal={showModal}
            />
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="alert alert-info" role="alert">
      No data found
    </div>
  );
};

export default InstrumentsTable;
