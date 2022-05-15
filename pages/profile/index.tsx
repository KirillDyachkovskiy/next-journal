import type { NextPage } from "next";
import { Layout, Profile } from "../../components";

const ProfilePage: NextPage = () => {
  return (
    <Layout title="Profile">
      <Profile />
    </Layout>
  );
};

export default ProfilePage;
