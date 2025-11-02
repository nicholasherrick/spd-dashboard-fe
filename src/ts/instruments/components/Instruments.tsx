import { useState } from "react";

import PageHeader from "../../shared/components/PageHeader";
import Button from "../../shared/components/Button";
import InstrumentsModal from "./InstrumentsModal";
import InstrumentsTable from "./InstrumentsTable";
import { InstrumentsModalContext } from "../constants";
import type { Instrument } from "../types";

const Instruments = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContext, setModalContext] = useState(InstrumentsModalContext.Add);
  const [currentInst, setCurrentInst] = useState<Instrument | undefined>(
    undefined
  );

  const handleShow = (
    modalContext = InstrumentsModalContext.Add,
    instrument?: Instrument
  ) => {
    setModalContext(modalContext);

    if (modalContext === InstrumentsModalContext.Edit && instrument) {
      setCurrentInst(instrument);
    }

    setShowModal(true);
  };
  const handleHide = () => {
    setShowModal(false);
  };

  return (
    <>
      <PageHeader text="Manage Instruments" />
      <Button
        className="btn btn-primary mb-3"
        type="button"
        onClick={() => handleShow()}
      >
        New
      </Button>
      <InstrumentsTable showModal={handleShow} />
      <InstrumentsModal
        show={showModal}
        handleHide={handleHide}
        modalContext={modalContext}
        currentInst={currentInst}
      />
    </>
  );
};

export default Instruments;
