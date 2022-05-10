import type { NextPage } from "next";
import Layout from "../components/layout";
import Button from "../ui/button";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Button>Click me</Button>
      <Button type="secondary">Click me</Button>
      <Button type="secondary" disabled>
        Click me
      </Button>
    </Layout>
  );
};

export default Home;
