import { useState } from "react";

import PageHeader from "../../shared/components/PageHeader";
import Button from "../../shared/components/Button";
import AddInstrumentsModal from "./AddInstrumentsModal";
import InstrumentsTable from "./InstrumentsTable";

const Instruments = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };
  const handleHide = () => {
    setShowModal(false);
  };

  return (
    <>
      <PageHeader text="Manage Instruments" />
      <Button className="btn btn-primary mb-3" type="button" onClick={handleShow}>
        New
      </Button>
      <InstrumentsTable />
      <AddInstrumentsModal show={showModal} handleHide={handleHide} />
    </>
  );
};

export default Instruments;
