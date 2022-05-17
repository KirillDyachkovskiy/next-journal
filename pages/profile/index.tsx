import { NextPage } from "next";

import { Layout } from "../../views/layouts";
import { ProfileHeader, ProfileWall } from "../../views/components";

import s from "../../views/styles/pages/profile.module.scss";

const ProfilePage: NextPage = () => {
  return (
    <Layout title="Profile" sidebar>
      <div className={s.profile}>
        <ProfileHeader />
        <ProfileWall />
      </div>
    </Layout>
  );
};

export default ProfilePage;
