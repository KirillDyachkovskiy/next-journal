import type { NextPage } from "next";

import { CgProfile } from "react-icons/cg";

import s from "./profileHeader.module.scss";
import { Button } from "../../../ui";
import { FiSettings } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";

const ProfileHeader: NextPage = () => {
  return (
    <section className={s.profileHeader}>
      <div className={s.profileHeader__information}>
        <CgProfile className={s.profileHeader__avatar} />
        <h1 className={s.profileHeader__name}>Amon Bower</h1>
        <p className={s.profileHeader__characteristics}>
          <span className={s.profileHeader__views}>+200</span>
          <span className={s.profileHeader__subscribers}>2 подпичсика</span>
        </p>
        <p className={s.profileHeader__addition}>На проекте с 15 сен. 2016</p>
      </div>
      <div className={s.profileHeader__actions}>
        <Button type="secondary" icon={<FiSettings />}>
          {" "}
        </Button>
        <Button icon={<RiMessage2Line />}>Написать</Button>
      </div>
    </section>
  );
};

export default ProfileHeader;
