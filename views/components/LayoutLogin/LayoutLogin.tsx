import { FC, useState } from "react";

import { LoginForm, RegisterForm } from "../index";
import { Popup } from "../../ui";

import { CgProfile } from "react-icons/cg";

import s from "./layoutLogin.module.scss";

const LayoutLogin: FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const [form, setForm] = useState<"login" | "register">("login");

  const showPopup = () => setActive(true);
  const hidePopup = () => setActive(false);

  const switchToLogin = () => setForm("login");
  const switchToRegister = () => setForm("register");

  return (
    <>
      <CgProfile onClick={showPopup} className={s.layoutLogin} />
      <Popup active={active} onClose={hidePopup}>
        {form === "login" ? (
          <LoginForm switchToRegister={switchToRegister} />
        ) : (
          <RegisterForm switchToLogin={switchToLogin} />
        )}
      </Popup>
    </>
  );
};

export default LayoutLogin;
