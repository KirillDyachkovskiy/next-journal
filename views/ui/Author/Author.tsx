import { FC } from "react";
import { TUser } from "../../../data/types";
import { CgProfile } from "react-icons/cg";

import s from "./author.module.scss";

interface IAuthor {
  author: TUser;
}

const Author: FC<IAuthor> = ({ author }) => {
  return (
    <div className={s.author}>
      <CgProfile />
      {author.name}
    </div>
  );
};

export default Author;
