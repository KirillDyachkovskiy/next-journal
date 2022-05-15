import type { NextPage } from "next";
import { Layout } from "../../views/layouts";
import { Rating } from "../../views/pages";

const RatingPage: NextPage = () => {
  return (
    <Layout title="Rating">
      <Rating />
    </Layout>
  );
};

export default RatingPage;
