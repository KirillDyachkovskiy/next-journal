import { ChangeEvent, FC, useState } from "react";

import s from "./commentsSection.module.scss";
import { TComment } from "../../../data/types";
import { Comment, Input } from "../../ui";

interface ICommentsSection {
  comments: TComment[];
}

const CommentsSection: FC<ICommentsSection> = ({ comments }) => {
  const [commentInput, setCommentInput] = useState<string>("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentInput(e.target.value);
  };

  return (
    <section className={s.commentsSection}>
      <h2 className={s.commentsSection__title}>
        {comments.length} комментария
      </h2>
      <Input
        id="newPost"
        value={commentInput}
        onChange={onChange}
        placeholder="Написать комментарий..."
      />
      <div className={s.commentsSection__comments}>
        {comments.map((comment: TComment) => (
          <Comment {...comment} />
        ))}
      </div>
    </section>
  );
};

export default CommentsSection;
