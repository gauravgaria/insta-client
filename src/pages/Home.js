import React, { useContext, useEffect } from "react";
import { CreatePost, Postcard } from "../components";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../App";
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
