import React, { useState } from "react";
import './modal.css';

const Modal = ({ isOpen, closeModal, children }) => {
    return (
        isOpen && (
            <div>
                <div className="modal-overlay" onClick={closeModal} />
                <div className="modal-content">
                    {children}
                </div>
            </div>
        )
    );
};

export default Modal;