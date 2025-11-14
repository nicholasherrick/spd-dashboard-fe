export interface AddModalProps {
  show: boolean;
  handleHide: () => void;
  modalContext: string;
  currentInst: Instrument | undefined;
}

export interface InstrumentFormValues {
  name: string;
  ImageURL: string;
  SterilizationType: string;
}

export interface Instrument {
  Id: string;
  Name: string;
  ImageURL: string;
  SterilizationType: string;
  HandWashOnly: boolean;
}

export interface InstrumentTableProps {
  showModal: (a: string, b?: Instrument) => void;
  searchText: string;
}

export interface InstrumentTableRowProps {
  instrument: Instrument;
  showModal: (a: string, b?: Instrument) => void;
}
