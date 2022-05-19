import { MouseEvent, ReactNode } from "react";

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

  const preventPropagation = (e: MouseEvent<HTMLDivElement>) =>
    e.stopPropagation();

  return (
    <div className={sPopup} onClick={onClose}>
      <div className={sPopupBody} onClick={preventPropagation}>
        {children}
      </div>
    </div>
  );
}

export default Popup;
