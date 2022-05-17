import { NextPage } from "next";

import { Layout } from "../../views/layouts";
import { Post } from "../../views/ui";

const PostPage: NextPage = () => {
  return (
    <Layout title="Full post" sidebar>
      <Post full />
    </Layout>
  );
};

export default PostPage;
