import type { NextPage } from "next";

import { Layout } from "../views/layouts";
import Home from "../views/pages/Home";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home" sidebar>
      <Home />
    </Layout>
  );
};

export default HomePage;
