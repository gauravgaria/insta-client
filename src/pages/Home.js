import React, { useContext, useEffect, useState } from "react";
import { CreatePost, Postcard } from "../components";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../App";
import postController from "../controller/postController";
const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const { state, dispatch } = useContext(UserContext);
  const getUserPosts = async () => {
    const posts = await postController.showAllPosts();
    if (posts && posts.status === 200) {
      const array = posts.data.posts.reverse();
      setData(array);
    }
  };

  useEffect(() => {
    getUserPosts();
  }, [count]);

  return (
    <div>
      <CreatePost setCount={setCount} />
      {data.map((post, index) => {
        return <Postcard key={index} post={post} />;
      })}
    </div>
  );
};

export default Home;
