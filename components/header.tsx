import type { NextPage } from "next";
import s from "../styles/layout/header.module.scss";

const Header: NextPage = () => {
  return (
    <header className={s.header}>
      <h1 className={s.header__title}>Header</h1>
    </header>
  );
};

export default Header;
