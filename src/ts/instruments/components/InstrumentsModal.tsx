import { useMemo } from "react";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-final-form";

import type { AddModalProps, AddInstrumentFormValues } from "../types";
import AddInstrumentsFields from "./AddInstrumentsFields";
import Button from "../../shared/components/Button";
import useInstruments from "../hooks/useInstruments";
import { InstrumentsModalContext } from "../constants";

const InstrumentsModal = ({
  show,
  handleHide,
  modalContext,
  currentInst,
}: AddModalProps) => {
  const { createInstrument } = useInstruments();

  const onSubmit = (values: AddInstrumentFormValues) => {
    createInstrument(values);
    handleHide();
  };

  const isAdd = modalContext === InstrumentsModalContext.Add;

  const initialValues = useMemo(() => {
    if (isAdd && currentInst) {
      return undefined;
    } else {
      return currentInst;
    }
  }, [currentInst, isAdd]);

  return (
    <Modal show={show} onHide={handleHide} size="lg">
      <Form onSubmit={onSubmit} initialValues={initialValues}>
        {({ handleSubmit, pristine, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>
                {isAdd ? "Add New Instrument" : "Edit Instrument"}
              </Modal.Title>
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
                {isAdd ? "Create" : "Save"}
              </Button>
            </Modal.Footer>
          </form>
        )}
      </Form>
    </Modal>
  );
};

export default InstrumentsModal;
