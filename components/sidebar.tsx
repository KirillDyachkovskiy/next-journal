import type { NextPage } from "next";
import Link from "next/link";
import s from "../styles/layout/sidebar.module.scss";

const Sidebar: NextPage = () => {
  return (
    <nav className={s.sidebar}>
      <ul className={s.sidebar__ul}>
        <li className={s.sidebar__li}>
          <Link href="#">
            <a>Wall</a>
          </Link>
        </li>
        <li className={s.sidebar__li}>
          <Link href="#">
            <a>Messages</a>
          </Link>
        </li>
        <li className={s.sidebar__li}>
          <Link href="#">
            <a>Rating</a>
          </Link>
        </li>
        <li className={s.sidebar__li}>
          <Link href="#">
            <a>Subscriptions</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
