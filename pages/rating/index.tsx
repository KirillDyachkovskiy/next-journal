import type { NextPage } from "next";
import { Layout, Rating } from "../../components";

const RatingPage: NextPage = () => {
  return (
    <Layout title="Rating">
      <Rating />
    </Layout>
  );
};

export default RatingPage;
