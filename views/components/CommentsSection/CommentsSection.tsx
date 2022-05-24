import { FC } from "react";

import { TComment } from "../../../data/types";
import { useInput } from "../../hooks";

import { Comment, Input } from "../../ui";

import s from "./commentsSection.module.scss";

interface ICommentsSection {
  comments: TComment[];
}

const CommentsSection: FC<ICommentsSection> = ({ comments }) => {
  return (
    <section className={s.commentsSection}>
      <h2 className={s.commentsSection__title}>
        {comments.length} комментария
      </h2>
      <Input
        id="newPost"
        {...useInput("")}
        placeholder="Написать комментарий..."
      />
      <div className={s.commentsSection__comments}>
        {comments.map((comment: TComment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
};

export default CommentsSection;
