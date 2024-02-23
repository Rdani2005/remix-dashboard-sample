import { CardProps } from "@dashboard-sample/core";
import React from "react";

export const Card = ({
  cardStretch,
  cardBody,
  cardFooter,
  cardHeader,
}: CardProps) => {
  return (
    <div className={`card card-custom card-${cardStretch} shadow mb-5`}>
      {cardHeader && <div className="card-header">{cardHeader}</div>}
      {cardBody && <div className="card-body">{cardBody}</div>}
      {cardFooter && <div className="card-footer">{cardFooter}</div>}
    </div>
  );
};
