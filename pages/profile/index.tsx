import type { NextPage } from "next";
import { Layout } from "../../views/layouts";
import { Profile } from "../../views/pages";

const ProfilePage: NextPage = () => {
  return (
    <Layout title="Profile">
      <Profile />
    </Layout>
  );
};

export default ProfilePage;
