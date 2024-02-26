import { AlertProps } from "@dashboard-sample/core";
import { IoCloseOutline } from "react-icons/io5";
import React from "react";

export const Alert = ({
    title,
    description,
    color,
    icon,
    onExit,
    dismisable,
}: AlertProps) => {
    return (
        <div
            className={`alert ${dismisable ? "alert-dismissible" : ""} alert-${color}  d-flex flex-column flex-sm-row p-5 mb-10`}
        >
            <span
                className={`svg-icon svg-icon-2hx svg-icon-${color} me-4 mb-5 mb-sm-0`}
            >
                {icon}
            </span>
            <div className={`d-flex flex-column text-${color} pe-0 pe-sm-10`}>
                <h5 className="mb-1">{title}</h5>
                <span>{description}</span>
            </div>

            {dismisable && (
                <button
                    type="button"
                    className="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto"
                    data-bs-dismiss="alert"
                    onClick={onExit}
                >
                    <span className={`svg-icon svg-icon-1 svg-icon-${color}`}>
                        <IoCloseOutline></IoCloseOutline>
                    </span>
                </button>
            )}
        </div>
    );
};
