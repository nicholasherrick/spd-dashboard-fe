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
  const [searchText, setSearchText] = useState<string>("");

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
      <div className="row">
        <div className="col-9">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search"
          />
        </div>
        <div className="col-auto">
          <Button
            className="btn btn-secondary mb-3 me-3"
            type="button"
            onClick={() => setSearchText("")}
            disabled={!searchText}
          >
            Clear
          </Button>
          <Button
            className="btn btn-primary mb-3"
            type="button"
            onClick={() => handleShow()}
          >
            Create New
          </Button>
        </div>
      </div>
      <InstrumentsTable showModal={handleShow} searchText={searchText} />
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
