import { Field } from "react-final-form";
import type { SelectFieldOption } from "../../types";
import type { FieldProps } from "react-final-form";

const VerticalField = ({ name, label, component, options }: FieldProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field name={name} component={component} className="form-control">
        {options ? (
          <>
            <option value="">Select</option>
            {options.map((option: SelectFieldOption) => (
              <option key={option.name} value={option.value}>
                {option.name}
              </option>
            ))}
          </>
        ) : null}
      </Field>
    </div>
  );
};

export default VerticalField;
