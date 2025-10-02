import VerticalInput from "../../shared/components/fields/VerticalInput";
import VerticalSelect from "../../shared/components/fields/VerticalSelect";
import { SterilizationTypes } from "../../shared/constants";

const AddInstrumentsForm = () => {
  return (
    <>
      <VerticalInput name="Name" label="Name" />
      <VerticalInput name="ImageURL" label="ImageURL" />
      <VerticalSelect name="SterilizationType" label="Sterilization Type">
        {SterilizationTypes.map((type) => (
          <option value={type}>{type}</option>
        ))}
      </VerticalSelect>
    </>
  );
};

export default AddInstrumentsForm;
