import type {
  ReactNode,
  PropsWithChildren,
  ComponentPropsWithoutRef,
} from "react";

export interface PageHeaderProps {
  text: string;
}

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export type ButtonPropsWithChildren = PropsWithChildren<ButtonProps>;

export interface SelectFieldOption {
  value: string | number;
  name: string;
}
