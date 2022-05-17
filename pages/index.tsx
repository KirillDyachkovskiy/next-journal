import type { NextPage } from "next";

import { Layout } from "../views/layouts";
import { Post } from "../views/ui";

import s from "../views/styles/pages/home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout title="Home" sidebar>
      <section className={s.home}>
        {Array(10)
          .fill(0)
          .map((_, id: number) => (
            <Post key={id} />
          ))}
      </section>
    </Layout>
  );
};

export default Home;
