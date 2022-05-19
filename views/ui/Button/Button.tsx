import { FC, MouseEventHandler, ReactElement } from "react";

import { RequireAtLeastOne } from "../../../data/types/RequireAtLeastOne";

import cn from "classnames";
import s from "./button.module.scss";

interface IButton {
  children: string;
  icon: ReactElement;
  color?: "accent" | "secondary";
  variant?: "button" | "text";
  htmlType?: "button" | "submit";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

type TButton = RequireAtLeastOne<IButton, "children" | "icon">;

const Button: FC<TButton> = ({
  children,
  icon,
  color = "accent",
  variant = "button",
  htmlType = "button",
  disabled = false,
  onClick,
}) => {
  const sButton = cn(
    s.button,
    s[`button_color_${color}`],
    s[`button_variant_${variant}`]
  );

  return (
    <button
      type={htmlType === "button" ? "button" : "submit"}
      className={sButton}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
