import InstrumentsTableRow from "./InstrumentsTableRow";
import { type Instrument } from "../types";
import useInstruments from "../hooks/useInstruments";

const InstrumentsTable = () => {
  const { instrumentList } = useInstruments();

  return instrumentList?.length ? (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">SterilizationType</th>
            <th scope="col"></th>
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
