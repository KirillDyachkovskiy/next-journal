import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  HTMLProps,
  ReactElement,
  RefCallback,
} from "react";
import s from "./input.module.scss";

interface IInput extends HTMLProps<HTMLInputElement> {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  label?: string;
  error?: string;
  icon?: ReactElement;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  ref?: RefCallback<HTMLInputElement>;
}

const Input: FC<IInput> = ({
  id,
  value,
  onChange,
  placeholder,
  label,
  error,
  icon,
  onBlur,
  ref,
}) => {
  return (
    <label htmlFor={id} className={s.input}>
      {label && <span className={s.input__label}>{label}</span>}
      {icon && <div className={s.input__icon}>{icon}</div>}
      <input
        ref={ref}
        id={id}
        className={s.input__field}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {error && <span className={s.input__error}>{error}</span>}
    </label>
  );
};

export default Input;
