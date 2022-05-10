import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  ReactElement,
  RefObject,
} from "react";
import s from "./input.module.scss";

interface IInput {
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  icon?: ReactElement;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  customRef?: RefObject<HTMLInputElement>;
}

const Input: FC<IInput> = ({
  id,
  value,
  onChange,
  placeholder,
  icon,
  onBlur,
  customRef,
}) => {
  return (
    <label htmlFor={id} className={s.input}>
      <input
        ref={customRef}
        id={id}
        className={s.input__field}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {icon && <div className={s.input__icon}>{icon}</div>}
    </label>
  );
};

export default Input;
