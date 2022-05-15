import { ReactNode } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import LayoutHeader from "./LayoutHeader";
import LayoutSidebar from "./LayoutSidebar";
import s from "./layout.module.scss";

interface ILayout {
  children: ReactNode;
  title: string;
}

const Layout: NextPage<ILayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | NextJournal</title>
        <meta name="description" content="Clone of TJournal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutHeader />
      <div className={s.layout__content}>
        <LayoutSidebar />
        <main className={s.layout__main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
