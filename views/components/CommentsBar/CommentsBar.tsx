import { FC } from "react";

import { TComment } from "../../../data/types";

import { Comment } from "../../ui";

import s from "./commentsBar.module.scss";

interface ICommentsSection {
  items: TComment[];
}

const CommentsBar: FC<ICommentsSection> = ({ items }) => {
  return (
    <aside className={s.commentsBar}>
      {items.map((comment: TComment) => (
        <Comment key={comment.id} comment={comment} onlyView />
      ))}
    </aside>
  );
};

export default CommentsBar;
