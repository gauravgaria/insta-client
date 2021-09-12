import React from "react";
import { CreatePost, Postcard } from "../components";
const Home = () => {
  return (
    <div>
      <CreatePost />
      <Postcard />
      <Postcard />
    </div>
  );
};

export default Home;
