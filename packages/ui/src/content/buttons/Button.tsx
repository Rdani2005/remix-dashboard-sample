import React from "react";
import { ButtonProps } from "@dashboard-sample/core/";

export const Button = ({
    // Icon,
    label,
    color,
    onClick,
    outline,
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`btn btn-${color} ${outline ? `btn-outline btn-outline-${color}` : ""}`}
        >
            {/* {Icon && <Icon />} {label} */}
            {label}
        </button>
    );
};
