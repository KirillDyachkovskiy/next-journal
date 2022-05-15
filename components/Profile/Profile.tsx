import type { NextPage } from "next";

import ProfileHeader from "./ProfileHeader";

import s from "./profile.module.scss";

const Profile: NextPage = () => {
  return (
    <div className={s.profile}>
      <ProfileHeader />
    </div>
  );
};

export default Profile;
