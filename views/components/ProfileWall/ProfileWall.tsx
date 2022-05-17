import { FC } from "react";

import { Post } from "../../ui";

import s from "./profileWall.module.scss";

const ProfileWall: FC = () => {
  return (
    <section className={s.profileWall}>
      {Array(10)
        .fill(0)
        .map((_, id: number) => (
          <Post key={id} />
        ))}
    </section>
  );
};

export default ProfileWall;
