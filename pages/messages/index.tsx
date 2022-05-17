import { NextPage } from "next";

import { Layout } from "../../views/layouts";

const MessagesPage: NextPage = () => {
  return (
    <Layout title="Messages" sidebar>
      <div>Messages Page</div>
    </Layout>
  );
};

export default MessagesPage;
