import VerticalField from "../../shared/components/fields/VerticalField";
import { SterilizationTypes } from "../../shared/constants";

const AddInstrumentsFields = () => {
  return (
    <>
      <VerticalField name="Name" label="Name" component="input" />
      <VerticalField name="ImageURL" label="ImageURL" component="input" />
      <VerticalField
        name="SterilizationType"
        label="Sterilization Type"
        component="select"
        options={SterilizationTypes.map((type) => ({
          value: type,
          name: type,
        }))}
      />
    </>
  );
};

export default AddInstrumentsFields;
