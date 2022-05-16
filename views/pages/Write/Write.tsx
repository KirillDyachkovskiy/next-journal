import { ChangeEvent, FC, useState } from "react";

import s from "./write.module.scss";
import { Input } from "../../ui";

const WritePage: FC = () => {
  const [postTitle, setPostTitle] = useState<string>("");

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  return (
    <div className={s.write}>
      <Input
        id="postTitle"
        value={postTitle}
        onChange={onTitleChange}
        placeholder="ЗАГОЛОВОК"
      />
      <textarea placeholder="напишите ваше сообщение" />
    </div>
  );
};

export default WritePage;
