import { type VerticalInputProps } from "../../types";

const VerticalInput = ({ name, label }: VerticalInputProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input id={name} className="form-control" type="text" />
    </div>
  );
};

export default VerticalInput;
