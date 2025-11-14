import { Field } from "react-final-form";
import type { SelectFieldOption, VerticalFieldProps } from "../../types";

const VerticalField = ({
  name,
  label,
  component,
  options,
  type,
  ...rest
}: VerticalFieldProps) => {
  const isCheckbox = type === "checkbox";
  return (
    <div className={`mb-3 ${isCheckbox ? "form-check" : ""}`}>
      <label
        htmlFor={name}
        className={isCheckbox ? "form-check-label" : "form-label"}
      >
        {label}
      </label>
      {options && component === "select" ? (
        <Field
          name={name}
          component={component}
          className="form-control"
          type={type}
          {...rest}
        >
          <option value="">Select</option>
          {options.map((option: SelectFieldOption) => (
            <option key={option.name} value={option.value}>
              {option.name}
            </option>
          ))}
        </Field>
      ) : (
        <Field
          name={name}
          component={component}
          className={isCheckbox ? "form-check-input" : "form-control"}
          type={type}
          {...rest}
        />
      )}
    </div>
  );
};

export default VerticalField;
