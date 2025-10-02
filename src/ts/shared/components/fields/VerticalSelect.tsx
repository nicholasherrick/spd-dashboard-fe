import { type VerticalSelectPropsWithChildren } from "../../types";

const VerticalSelect = ({
  name,
  label,
  children,
}: VerticalSelectPropsWithChildren) => {
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <select id={name} className="form-select">
        {children}
      </select>
    </div>
  );
};

export default VerticalSelect;
