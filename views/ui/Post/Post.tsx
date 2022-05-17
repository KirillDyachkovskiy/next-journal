import { FC } from "react";

import { MdRepeat } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BsBookmark, BsShareFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import s from "./post.module.scss";
import Rating from "../Rating";
import { Button } from "../index";
import { RiMessage2Line } from "react-icons/ri";

interface IPost {
  full?: boolean;
}

const Post: FC<IPost> = ({ full = false }) => {
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
      <div className={s.post__actions}>
        <FiMessageSquare />
        <MdRepeat />
        <BsBookmark />
        <BsShareFill />
      </div>
      {full && (
        <div className={s.post__footer}>
          <div className={s.post__author}>
            <CgProfile />
            Random Nike
            <Rating value={1432} />
          </div>
          <div className={s.post__submits}>
            <Button type="secondary" icon={<RiMessage2Line />} />
            <Button type="secondary">Подписаться</Button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Post;
