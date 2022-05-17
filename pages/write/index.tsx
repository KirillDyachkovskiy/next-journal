import {NextPage} from "next";
import {ChangeEvent, useState} from "react";

import {Layout} from "../../views/layouts";
import {Input} from "../../views/ui";

import s from "../../views/styles/pages/write.module.scss";

// @ts-ignore
const Editor = dynamic(() => import("/views/ui/Editor"), {
  ssr: false,
});

const WritePage: NextPage = () => {
  const [postTitle, setPostTitle] = useState<string>("");

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
  };

  return (
    <Layout title="Write">
      <div className={s.write}>
        <Input
          id="postTitle"
          value={postTitle}
          onChange={onTitleChange}
          placeholder="ЗАГОЛОВОК"
        />
        <Editor />
      </div>
    </Layout>
  );
};

export default WritePage;
