import { FC } from "react";

import Post from "../../components/Post";

import s from "./home.module.scss";

const Home: FC = () => {
  return (
    <section className={s.home}>
      {Array(10)
        .fill(0)
        .map((_, id: number) => (
          <Post key={id} />
        ))}
    </section>
  );
};

export default Home;
