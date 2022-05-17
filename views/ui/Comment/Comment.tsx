import { FC } from "react";

import { TComment } from "../../../data/types";
import { prettifyDate } from "../../../data/helpers";

import { Author, Button } from "../index";

import s from "./comment.module.scss";

const Comment: FC<TComment> = ({ time, text, user }) => {
  return (
    <article className={s.comment}>
      <div className={s.comment__header}>
        <Author author={user} />
        <span className={s.comment__time}>{prettifyDate(time)}</span>
      </div>
      <div className={s.comment__main}>{text}</div>
      <div className={s.comment__footer}>
        <Button type="secondary">Ответить</Button>
      </div>
    </article>
  );
};

export default Comment;
