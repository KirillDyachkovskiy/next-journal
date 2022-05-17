import { FC, ReactNode } from "react";
import Head from "next/head";

import { LayoutHeader } from "../../components";
import { Sidebar } from "../../ui";

import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { BiListUl, BiTrendingUp } from "react-icons/bi";

import s from "./layout.module.scss";

interface ILayout {
  children: ReactNode;
  title: string;
  sidebar?: boolean;
}

const sidebarItems = [
  {
    path: "/",
    icon: <MdOutlineLocalFireDepartment />,
    label: "Wall",
  },
  {
    path: "/messages",
    icon: <RiMessage2Line />,
    label: "Messages",
  },
  {
    path: "/rating",
    icon: <BiTrendingUp />,
    label: "Rating",
  },
  {
    path: "/subscriptions",
    icon: <BiListUl />,
    label: "Subscriptions",
  },
];

const Layout: FC<ILayout> = ({ children, title, sidebar = false }) => {
  return (
    <>
      <Head>
        <title>{title} | NextJournal</title>
        <meta name="description" content="Clone of TJournal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutHeader />
      <div className={s.layout__content}>
        {sidebar && (
          <aside className={s.layout__aside}>
            <Sidebar items={sidebarItems} />
          </aside>
        )}
        <main className={s.layout__main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
