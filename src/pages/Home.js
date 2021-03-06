import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { CreatePost, Postcard } from "../components";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../App";
import postController from "../controller/postController";
const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();

  const getUserPosts = async () => {
    const posts = await postController.showAllPosts();
    if (posts !== undefined && posts.status === 200) {
      const array = posts.data.posts.reverse();
      console.log(array);
      setData(array);
    } else {
      history.push("/login");
    }
  };

  useLayoutEffect(() => {
    getUserPosts();
  }, [count]);

  /*  useEffect(() => {
    if (state === null || state === undefined) {
      history.push("/login");
    } else {
      getUserPosts();
    }
  }, [count]); */

  return (
    <div>
      <CreatePost setCount={setCount} />
      {data.map((post, index) => {
        return <Postcard setCount={setCount} key={index} post={post} />;
      })}
    </div>
  );
};

export default Home;
