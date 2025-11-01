import Modal from "react-bootstrap/Modal";
import { Form } from "react-final-form";

import { type AddModalProps, type AddInstrumentFormValues } from "../types";
import AddInstrumentsFields from "./AddInstrumentsFields";
import Button from "../../shared/components/Button";
import useInstruments from "../hooks/useInstruments";

const AddInstrumentsModal = ({ show, handleHide }: AddModalProps) => {
  const { createInstrument } = useInstruments();

  const onSubmit = (values: AddInstrumentFormValues) => {
    createInstrument(values);
    handleHide();
  };

  return (
    <Modal show={show} onHide={handleHide} size="lg">
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, pristine, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Instrument</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddInstrumentsFields />
            </Modal.Body>
            <Modal.Footer>
              <Button
                type="button"
                className="btn btn-default"
                onClick={handleHide}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="btn btn-primary"
                disabled={pristine || submitting}
              >
                Add
              </Button>
            </Modal.Footer>
          </form>
        )}
      </Form>
    </Modal>
  );
};

export default AddInstrumentsModal;
