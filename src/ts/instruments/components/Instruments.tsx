import { useState } from "react";

import PageHeader from "../../shared/components/PageHeader";
import Button from "../../shared/components/Button";
import { AddModal } from "./AddModal";

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
        Add
      </Button>
      <AddModal show={showModal} handleHide={handleHide} />
    </>
  );
};

export default Instruments;
