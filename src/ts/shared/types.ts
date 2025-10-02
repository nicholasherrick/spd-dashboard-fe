import {
  type ReactNode,
  type PropsWithChildren,
  type ComponentPropsWithoutRef,
} from "react";

export interface PageHeaderProps {
  text: string;
}

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export type ButtonPropsWithChildren = PropsWithChildren<ButtonProps>;

export interface VerticalInputProps {
  name: string;
  label: string;
}

interface VerticalSelectProps extends ComponentPropsWithoutRef<"select"> {
  name: string;
  label: string;
}

export type VerticalSelectPropsWithChildren =
  PropsWithChildren<VerticalSelectProps>;
