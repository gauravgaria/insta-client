import React, { useContext, useEffect } from "react";
import { CreatePost, Postcard } from "../components";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../App";
const Home = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  /*   console.log(state);
  if (!state) {
    history.push("/login");
  } */

  useEffect(() => {
    // console.log()
    /* const refresh_token = Cookies.get("jid");
    if (!refresh_token) {
      history.push("/login");
    } */
  }, []);
  return (
    <div>
      <CreatePost />
      <Postcard />
      <Postcard />
    </div>
  );
};

export default Home;
