import { FC } from "react";

import { MdRepeat } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BsBookmark, BsShareFill } from "react-icons/bs";

import s from "./post.module.scss";

const Post: FC = () => {
  return (
    <article className={s.post}>
      <h2 className={s.post__title}>
        Кот прилёг отдохнуть в английскои парке миниатюр = и стал героем шуток и
        фотожаб о &quot гигантском пушистом захватичике &quot
      </h2>
      <p className={s.post__text}>
        Пока одни не могли соотнести размеры эивотного и окружения, другие
        начали создавать апоколиптические сюжеты с котом в главной роли
      </p>
      <div className={s.post__footer}>
        <FiMessageSquare />
        <MdRepeat />
        <BsBookmark />
        <BsShareFill />
      </div>
    </article>
  );
};

export default Post;
