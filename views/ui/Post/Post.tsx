import { FC } from "react";

import { Button, Rating } from "../index";

import { MdRepeat } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { BsBookmark, BsShareFill } from "react-icons/bs";
import { RiMessage2Line } from "react-icons/ri";
import { AiOutlineUserAdd } from "react-icons/ai";

import cn from "classnames";
import s from "./post.module.scss";
import Author from "../Author";

interface IPost {
  full?: boolean;
}

///////////

const author = {
  id: 12,
  name: "RandomNike",
  photo: "lsdjafdaljf",
};

const Post: FC<IPost> = ({ full = false }) => {
  const sPost = cn(s.post, {
    [s.post_full]: full,
  });

  return (
    <article className={sPost}>
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
            <Author author={author} />
            <Rating value={1432} />
          </div>
          <div className={s.post__submits}>
            <Button color="secondary" icon={<RiMessage2Line />} />
            <Button color="secondary" icon={<AiOutlineUserAdd />}>
              Подписаться
            </Button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Post;
