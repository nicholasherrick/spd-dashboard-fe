import Modal from "react-bootstrap/Modal";
import { type AddModalProps } from "../types";
import AddInstrumentsFields from "./AddInstrumentsFields";
import { Form } from "react-final-form";
import Button from "../../shared/components/Button";

export const AddInstrumentsModal = ({ show, handleHide }: AddModalProps) => {
  const onSubmit = () => {};

  return (
    <Modal show={show} onHide={handleHide} size="lg">
      <Form onSubmit={onSubmit}>
        {({ pristine, submitting }) => (
          <form>
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
