import { type InstrumentTableRowProps } from "../types";

const InstrumentsTableRow = ({ instrument }: InstrumentTableRowProps) => {
  return (
    <tr>
      <td>{instrument.Name}</td>
      <td>{instrument.SterilizationType}</td>
    </tr>
  );
};

export default InstrumentsTableRow;
