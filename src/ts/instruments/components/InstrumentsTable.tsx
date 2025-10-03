import InstrumentsTableRow from "./InstrumentsTableRow";
import useLocalStorage from "../../shared/hooks/useLocalStorage";
import { LocalStorageKeys } from "../../shared/constants";
import { type Instrument } from "../types";

const InstrumentsTable = () => {
  const { getLocalStorage } = useLocalStorage();
  const instrumentList = getLocalStorage(LocalStorageKeys.InstrumentList);

  return instrumentList?.length ? (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">SterilizationType</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {instrumentList.map((inst: Instrument) => (
            <InstrumentsTableRow key={inst.Id} instrument={inst} />
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
