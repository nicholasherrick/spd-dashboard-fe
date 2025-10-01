import { type ButtonPropsWithChildren } from "../types";

const Button = ({ children, ...rest }: ButtonPropsWithChildren) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
