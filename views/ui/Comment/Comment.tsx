import { FC } from "react";

import { TComment } from "../../../data/types";
import { prettifyDate } from "../../../data/helpers";

import { Author, Button } from "../index";

import cn from "classnames";
import s from "./comment.module.scss";

interface IComment {
  comment: TComment;
  onlyView?: boolean;
}

const Comment: FC<IComment> = ({ comment, onlyView = false }) => {
  const { user, time, text } = comment;

  const sComment = cn(s.comment, {
    [s.comment_onlyView]: onlyView,
  });

  return (
    <article className={sComment}>
      <div className={s.comment__header}>
        <Author author={user} />
        <span className={s.comment__time}>{prettifyDate(time)}</span>
      </div>
      <div className={s.comment__main}>{text}</div>
      {!onlyView && (
        <div className={s.comment__footer}>
          <Button variant="text" color="secondary">
            Ответить
          </Button>
        </div>
      )}
    </article>
  );
};

export default Comment;
