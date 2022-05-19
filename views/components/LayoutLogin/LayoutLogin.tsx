import { FC, useState } from "react";

import { LoginForm } from "../index";
import { Popup } from "../../ui";

import { CgProfile } from "react-icons/cg";

import s from "./layoutLogin.module.scss";

const LayoutLogin: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const showPopup = () => setActive(true);

  const hidePopup = () => setActive(false);

  return (
    <>
      <CgProfile onClick={showPopup} className={s.layoutLogin} />
      <Popup active={active} onClose={hidePopup}>
        <LoginForm />
      </Popup>
    </>
  );
};

export default LayoutLogin;
