import { ReactNode } from "react";
import { createPortal } from "react-dom";

import cn from "classnames";
import s from "./popup.module.scss";

export type PopupProps = {
  children: ReactNode;
  onClose?: () => void;
  active?: boolean;
};

function Popup({ children, active, onClose }: PopupProps) {
  const sPopup = cn(s.popup, {
    [s.popup_active]: active,
  });
  const sPopupBody = cn(s.popup__body, {
    [s.popup__body_active]: active,
  });

  return createPortal(
    <div className={sPopup} onClick={onClose}>
      <div className={sPopupBody}>{children}</div>
    </div>,
    document.body
  );
}

export default Popup;
