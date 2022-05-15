import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";

import { Layout } from "../views/layouts";
import { Button, Input } from "../views/ui";
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
