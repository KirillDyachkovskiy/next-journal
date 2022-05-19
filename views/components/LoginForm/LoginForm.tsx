import { FC, useState } from "react";
import { useInput } from "../../hooks";

import { Input, Popup } from "../../ui";

import { CgProfile } from "react-icons/cg";

import s from "./loginForm.module.scss";

const LoginForm: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const showPopup = () => setActive(true);

  const hidePopup = () => setActive(false);

  return (
    <>
      <CgProfile onClick={showPopup} className={s.loginForm__button} />
      <Popup active={active} onClose={hidePopup}>
        <div className={s.loginForm}>
          <Input id="password" {...useInput("")} />
          <Input id="nickname" {...useInput("")} />
          <Input id="email" {...useInput("")} />
        </div>
      </Popup>
    </>
  );
};

export default LoginForm;
