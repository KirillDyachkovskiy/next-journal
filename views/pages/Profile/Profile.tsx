import { FC } from "react";

import { ProfileHeader, ProfileWall } from "../../components";

import s from "./profile.module.scss";

const Profile: FC = () => {
  return (
    <div className={s.profile}>
      <ProfileHeader />
      <ProfileWall />
    </div>
  );
};

export default Profile;
