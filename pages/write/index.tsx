import { NextPage } from "next";

import { Layout } from "../../views/layouts";
import { Write } from "../../views/pages";

const WritePage: NextPage = () => {
  return (
    <Layout title="Write">
      <Write />
    </Layout>
  );
};

export default WritePage;
