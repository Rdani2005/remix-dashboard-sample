export interface CardProps {
  cardStretch:
    | "stretch"
    | "stretch-75"
    | "stretch-50"
    | "stretch-33"
    | "stretch-25";
  cardHeader?: JSX.Element;
  cardBody?: JSX.Element;
  cardFooter?: JSX.Element;
}
