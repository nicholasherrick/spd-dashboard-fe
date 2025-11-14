import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { InstrumentTableRowProps } from "../types";
import Button from "../../shared/components/Button";
import useInstruments from "../hooks/useInstruments";
import {
  faTrash,
  faPenToSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { InstrumentsModalContext } from "../constants";

const InstrumentsTableRow = ({
  instrument,
  showModal,
}: InstrumentTableRowProps) => {
  const { deleteInstrument } = useInstruments();

  return (
    <>
      <tr>
        <td>{instrument.Name}</td>
        <td>{instrument.SterilizationType}</td>
        <td>
          {instrument.HandWashOnly ? <FontAwesomeIcon icon={faCheck} /> : null}
        </td>
        <td>
          <Button
            type="button"
            className="btn btn-default"
            onClick={() => showModal(InstrumentsModalContext.Edit, instrument)}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
          <Button
            type="button"
            className="btn btn-default"
            onClick={() => deleteInstrument(instrument.Id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default InstrumentsTableRow;
