import { FC, MouseEventHandler, ReactElement } from "react";
import cn from "classnames";
import s from "./button.module.scss";

interface IButton {
  children: string;
  icon?: ReactElement;
  type?: "accent" | "secondary";
  htmlType?: "button" | "submit";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<IButton> = ({
  children,
  icon,
  type = "accent",
  htmlType = "button",
  disabled = false,
  onClick,
}) => {
  const sButton = cn(s.button, s[type]);

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
