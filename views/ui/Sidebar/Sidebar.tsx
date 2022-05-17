import { FC, ReactElement } from "react";
import Link from "next/link";

import s from "./sidebar.module.scss";
import { useRouter } from "next/router";

type TSidebarItem = {
  path: string;
  icon: ReactElement;
  label: string;
};

interface ISidebar {
  items: TSidebarItem[];
}

const Sidebar: FC<ISidebar> = ({ items }) => {
  const { asPath } = useRouter();

  return (
    <nav className={s.sidebar}>
      <ul className={s.sidebar__ul}>
        {items.map(({ path, icon, label }: TSidebarItem) => (
          <li
            key={path}
            className={`${s.sidebar__li} ${
              path === asPath ? s.sidebar__li_active : ""
            }`}
          >
            <Link href={path}>
              <a className={s.sidebar__item}>
                <div className={s.sidebar__icon}>{icon}</div>
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
