import { ReactNode } from "react";
import { createPortal } from "react-dom";

import s from "./popup.module.scss";

export type PopupProps = {
  children: ReactNode;
  onClose?: () => void;
  active?: boolean;
};

function Popup({ children, active, onClose }: PopupProps) {
  if (!active) {
    return null;
  }

  return createPortal(
    <div className={s.popup}>
      <div className={s.popup__overlay} onClick={onClose} aria-hidden="true" />
      <div className={s.popup__body}>{children}</div>
    </div>,
    document.body
  );
}

export default Popup;
