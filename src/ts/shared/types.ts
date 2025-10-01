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
