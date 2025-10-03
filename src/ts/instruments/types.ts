export interface AddModalProps {
  show: boolean;
  handleHide: () => void;
}

export interface AddInstrumentFormValues {
  name: string;
  ImageURL: string;
  SterilizationType: string;
}

export interface Instrument {
  Id: string;
  Name: string;
  ImageURL: string;
  SterilizationType: string;
}

export interface InstrumentTableRowProps {
  instrument: Instrument;
}
