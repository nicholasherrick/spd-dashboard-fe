import Modal from "react-bootstrap/Modal";
import { type AddModalProps, type AddInstrumentFormValues } from "../types";
import AddInstrumentsFields from "./AddInstrumentsFields";
import { Form } from "react-final-form";
import Button from "../../shared/components/Button";
import useLocalStorage from "../../shared/hooks/useLocalStorage";
import { LocalStorageKeys } from "../../shared/constants";

export const AddInstrumentsModal = ({ show, handleHide }: AddModalProps) => {
  const { setLocalStorage } = useLocalStorage();

  const onSubmit = (values: AddInstrumentFormValues) => {
    setLocalStorage(LocalStorageKeys.InstrumentList, values);
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
