import Modal from "react-bootstrap/Modal";
import { type AddModalProps } from "../types";
import AddInstrumentsForm from "./AddInstrumentsForm";

export const AddModal = ({ show, handleHide }: AddModalProps) => {
  return (
    <Modal show={show} onHide={handleHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add New Instrument</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddInstrumentsForm />
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
