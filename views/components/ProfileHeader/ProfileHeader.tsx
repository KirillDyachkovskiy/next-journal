import { FC, useState } from "react";

import { Button, Rating, Tab, Tabs } from "../../ui";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";

import s from "./profileHeader.module.scss";

const ProfileHeader: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className={s.profileHeader}>
      <div className={s.profileHeader__card}>
        <div className={s.profileHeader__information}>
          <CgProfile className={s.profileHeader__avatar} />
          <h1 className={s.profileHeader__name}>Amon Bower</h1>
          <p className={s.profileHeader__characteristics}>
            <Rating value={200} />
            <span className={s.profileHeader__subscribers}>2 подпичсика</span>
          </p>
          <p className={s.profileHeader__addition}>На проекте с 15 сен. 2016</p>
        </div>
        <div className={s.profileHeader__actions}>
          <Button color="secondary" icon={<FiSettings />} />
          <Button icon={<RiMessage2Line />}>Написать</Button>
        </div>
      </div>
      <Tabs<number>
        name="ratingDuration"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <Tab value={0} label="ПОСТЫ" />
        <Tab value={1} label="КОММЕНТАРИИ" />
        <Tab value={2} label="ЕЩЁ ЧТО-ТО" />
      </Tabs>
    </section>
  );
};

export default ProfileHeader;
