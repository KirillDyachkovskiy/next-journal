import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";

import { Button, Input } from "../../../ui";
import { SiNextdotjs } from "react-icons/si";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";

import s from "./header.module.scss";

const Header: NextPage = () => {
  const [search, setSearch] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <header className={s.header}>
      <div className={s.header__leftSide}>
        <SiNextdotjs />
        <Input
          id="sidebarInput"
          value={search}
          onChange={onChange}
          placeholder="Поиск"
          icon={<BiSearchAlt2 />}
        />
        <Button onClick={() => {}}>Новая запись</Button>
      </div>
      <div className={s.header__rightSide}>
        <RiMessage2Line />
        <FiBell />
      </div>
    </header>
  );
};

export default Header;
