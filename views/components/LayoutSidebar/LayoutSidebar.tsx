import { FC } from "react";
import Link from "next/link";

import { BiListUl, BiTrendingUp } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineLocalFireDepartment } from "react-icons/md";

import s from "./layoutSidebar.module.scss";

const LayoutSidebar: FC = () => {
  return (
    <nav className={s.sidebar}>
      <ul className={s.sidebar__ul}>
        <li className={s.sidebar__li}>
          <Link href="/">
            <a className={s.sidebar__item}>
              <MdOutlineLocalFireDepartment className={s.sidebar__icon} />
              Wall
            </a>
          </Link>
        </li>
        <li className={s.sidebar__li}>
          <Link href="#">
            <a className={s.sidebar__item}>
              <RiMessage2Line className={s.sidebar__icon} />
              Messages
            </a>
          </Link>
        </li>
        <li className={s.sidebar__li}>
          <Link href="/rating">
            <a className={s.sidebar__item}>
              <BiTrendingUp className={s.sidebar__icon} />
              Rating
            </a>
          </Link>
        </li>
        <li className={s.sidebar__li}>
          <Link href="#">
            <a className={s.sidebar__item}>
              <BiListUl className={s.sidebar__icon} />
              Subscriptions
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LayoutSidebar;
