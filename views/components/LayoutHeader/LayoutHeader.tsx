import { FC } from "react";
import Link from "next/link";

import { useInput } from "../../hooks";
import { Button, Input } from "../../ui";

import { SiNextdotjs } from "react-icons/si";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";

import s from "./layoutHeader.module.scss";
import LayoutLogin from "../LayoutLogin";

const LayoutHeader: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.header__leftSide}>
        <Link href="/">
          <a>
            <SiNextdotjs />
          </a>
        </Link>
        <Input
          id="sidebarInput"
          {...useInput("")}
          placeholder="Поиск"
          icon={<BiSearchAlt2 />}
        />
        <Link href="/write">
          <a>
            <Button color="secondary">Новая запись</Button>
          </a>
        </Link>
      </div>
      <div className={s.header__rightSide}>
        <RiMessage2Line />
        <FiBell />
        <LayoutLogin />
      </div>
    </header>
  );
};

export default LayoutHeader;
