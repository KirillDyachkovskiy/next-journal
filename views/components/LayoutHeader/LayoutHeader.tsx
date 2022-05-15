import { ChangeEvent, FC, useState } from "react";
import Link from "next/link";

import { Button, Input } from "../../ui";
import { SiNextdotjs } from "react-icons/si";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

import s from "./layoutHeader.module.scss";

const LayoutHeader: FC = () => {
  const [search, setSearch] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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
          value={search}
          onChange={onChange}
          placeholder="Поиск"
          icon={<BiSearchAlt2 />}
        />
        <Link href="/write">
          <a>
            <Button type="secondary">Новая запись</Button>
          </a>
        </Link>
      </div>
      <div className={s.header__rightSide}>
        <RiMessage2Line />
        <FiBell />
        <Link href="/profile">
          <a>
            <CgProfile />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default LayoutHeader;
