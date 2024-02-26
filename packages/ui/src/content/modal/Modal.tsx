import { ModalProps } from "@dashboard-sample/core";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";

export const Modal = ({
    fullScreen,
    title,
    onClose,
    body,
    footer,
}: ModalProps) => {
    return (
        <div className="modal fade" tabIndex={-1} id="kt_modal_1">
            <div
                className={`modal-dialog ${fullScreen ? "modal-fullscreen" : ""}`}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <div
                            className="btn btn-icon btn-sm btn-active-light-primary ms-2"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={onClose}
                        >
                            {/* TODO: Close button */}
                            <IoCloseOutline></IoCloseOutline>
                        </div>
                    </div>
                    <div className="modal-body">{body}</div>
                    {footer && <div className="modal-footer">footer</div>}
                </div>
            </div>
        </div>
    );
};
