import { type MouseEventHandler } from "react";

export interface AlertProps {
  dismisable?: boolean;
  color?:
    | "white"
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "dark";
  title: string;
  description: string;
  icon?: JSX.Element;
  onExit?: MouseEventHandler<HTMLButtonElement>;
}
