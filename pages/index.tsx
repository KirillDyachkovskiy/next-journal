import type { NextPage } from "next";
import Layout from "../components/layout";
import Button from "../ui/button";
import Input from "../ui/input";
import { ChangeEvent, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Layout title="Home">
      <Button>Click me</Button>
      <Button type="secondary">Click me</Button>
      <Button type="secondary" disabled>
        Click me
      </Button>
      <Input
        id={"324"}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="lol"
        icon={<BiSearchAlt2 />}
      />
    </Layout>
  );
};

export default Home;
