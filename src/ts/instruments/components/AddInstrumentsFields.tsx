import VerticalField from "../../shared/components/fields/VerticalField";
import { SterilizationTypes } from "../../shared/constants";

const AddInstrumentsFields = () => {
  const SterilizationTypeOptions = SterilizationTypes.map((type) => ({
    value: type,
    name: type,
  }));

  return (
    <>
      <VerticalField name="Name" label="Name" component="input" />
      <VerticalField name="ImageURL" label="ImageURL" component="input" />
      <VerticalField
        name="SterilizationType"
        label="Sterilization Type"
        component="select"
        options={SterilizationTypeOptions}
      />
      <VerticalField
        name="HandWashOnly"
        label="Hand Wash Only?"
        component="input"
        type="checkbox"
        options={SterilizationTypeOptions}
      />
    </>
  );
};

export default AddInstrumentsFields;
