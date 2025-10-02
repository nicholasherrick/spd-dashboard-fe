import { useState } from "react";

import PageHeader from "../../shared/components/PageHeader";
import Button from "../../shared/components/Button";
import { AddInstrumentsModal } from "./AddInstrumentsModal";

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
      <Button className="btn btn-primary" type="button" onClick={handleShow}>
        New
      </Button>
      <AddInstrumentsModal show={showModal} handleHide={handleHide} />
    </>
  );
};

export default Instruments;
