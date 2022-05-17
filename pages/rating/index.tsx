import type { NextPage } from "next";

import { Layout } from "../../views/layouts";
import { RatingHeader } from "../../views/components";

import s from "../../views/styles/pages/rating.module.scss";

const RatingPage: NextPage = () => {
  return (
    <Layout title="Rating" sidebar>
      <div className={s.rating}>
        <RatingHeader />
      </div>
    </Layout>
  );
};

export default RatingPage;
