import { type MouseEventHandler } from "react";

export interface ButtonProps {
  outline?: boolean;
  color?:
    | "white"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "dark";
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
