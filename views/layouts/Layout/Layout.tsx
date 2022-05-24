import { FC, ReactNode } from "react";
import Head from "next/head";

import { CommentsBar, LayoutHeader } from "../../components";
import { Sidebar } from "../../ui";

import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { BiListUl, BiTrendingUp } from "react-icons/bi";

import cn from "classnames";
import s from "./layout.module.scss";

import { hardCodedComments } from "../../../pages/post";

interface ILayout {
  children: ReactNode;
  title: string;
  sidebar?: boolean;
  comments?: boolean;
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

const Layout: FC<ILayout> = ({
  children,
  title,
  sidebar = false,
  comments = false,
}) => {
  const sMain = cn({
    [s.layout__main_margin_l]: sidebar,
    [s.layout__main_margin_r]: comments,
  });

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
          <div className={s.layout__nav}>
            <Sidebar items={sidebarItems} />
          </div>
        )}
        <main className={sMain}>{children}</main>
        {comments && (
          <div className={s.layout__aside}>
            <CommentsBar items={hardCodedComments} />
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
