import React from "react";
import { createPortal } from "react-dom";

import "../styles/styles.css";

export default function Modal({ selImage }) {
  const modalRoot = document.querySelector("#modal-root");
  return createPortal(
    <div className="Overlay">
      <div className="Modal">
        <img src={selImage} alt="" />
      </div>
    </div>,
    modalRoot
  );
}
