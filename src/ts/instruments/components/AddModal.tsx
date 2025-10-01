import Modal from "react-bootstrap/Modal";
import { type AddModalProps } from "../types";

export const AddModal = ({ show, handleHide }: AddModalProps) => {
  return (
    <Modal show={show} onHide={handleHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Instrument</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="">Name</label>
        <input type="text" />
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
