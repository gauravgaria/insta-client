import React, { useContext, useEffect, useState } from "react";
import { CreatePost, Postcard } from "../components";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../App";
import postController from "../controller/postController";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    postController.showAllPosts().then((res) => {
      console.log(res.data.posts);
      const array = res.data.posts.reverse();
      setData(array);
    });
  }, []);

  return (
    <div>
      <CreatePost />
      {data.map((post) => {
        console.log(post);
        return <Postcard post={post} />;
      })}
    </div>
  );
};

export default Home;
