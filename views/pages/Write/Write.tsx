import {ChangeEvent, FC, useState} from "react";
import dynamic from "next/dynamic";
import {Input} from "../../ui";
import s from "./write.module.scss";

// @ts-ignore
const Editor = dynamic(() => import("/data/Editor"), {
  ssr: false,
});

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
      <Editor />
    </div>
  );
};

export default WritePage;
