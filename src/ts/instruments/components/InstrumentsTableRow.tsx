import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { type InstrumentTableRowProps } from "../types";
import Button from "../../shared/components/Button";

import useInstruments from "../hooks/useInstruments";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const InstrumentsTableRow = ({ instrument }: InstrumentTableRowProps) => {
  const { deleteInstrument } = useInstruments();

  return (
    <tr>
      <td>{instrument.Name}</td>
      <td>{instrument.SterilizationType}</td>
      <td>
        <Button
          type="button"
          className="btn btn-default"
          onClick={() => deleteInstrument(instrument.Id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

export default InstrumentsTableRow;
