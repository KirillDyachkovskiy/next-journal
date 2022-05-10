import { ReactNode } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "./header";
import Sidebar from "./sidebar";
import s from "./layout.module.scss";

interface ILayout {
  children: ReactNode;
  title: string;
}

const Index: NextPage<ILayout> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title} | NextJournal</title>
        <meta name="description" content="Clone of TJournal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={s.layout__content}>
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Index;
