import type {
  ReactNode,
  PropsWithChildren,
  ComponentPropsWithoutRef,
} from "react";
import type { FieldProps } from "react-final-form";

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

export interface VerticalField {
  type?: string;
}

export type VerticalFieldProps = FieldProps & VerticalField;
