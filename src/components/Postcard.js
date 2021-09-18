import React, { useContext, useState, useEffect } from "react";
import { FcLike } from "react-icons/fc";
import { BsHeart } from "react-icons/bs";
import { HeartFill, ShareIcon, Dislike } from "./icon-svg";
import { UserContext } from "../App";
import postController from "../controller/postController";
const Wrapper = {
  display: "grid",
  height: "100vh",
  placeItems: "center",
  textAlign: "center",
  width: "32%",
  marginLeft: "480px",
};

const Postcard = (props) => {
  const { state, dispatch } = useContext(UserContext);
  const [like, setlike] = useState(props.post.likes.length);
  const [postData, setPostData] = useState({});

  let [likeCount, setLikeCount] = useState(props.post.likes.length);

  const renderLikeChange = () => {
    if (state) {
      return [
        <div>
          {console.log(props.post.likes, state._id)}
          {props.post.likes.includes(state._id) ? (
            <div onClick={onchangeDislike}>
              <HeartFill />
            </div>
          ) : (
            <div onClick={onChangeLike}>
              <Dislike />
            </div>
          )}
        </div>,
      ];
    } else {
      return "loading";
    }
  };

  async function onChangeLike() {
    const res = await postController.likePost(props.post._id);
    if (res.status === 200) {
      setlike(res.data.likes.length);

      if (props.post._id === res.data._id) {
        console.log(props.post.likes, res.data.likes);

        props.setCount(++likeCount);
        setPostData(res.data);
      } else {
        setPostData(res.data);
      }
    }
  }

  async function onchangeDislike() {
    const res = await postController.dislikePost(props.post._id);
    if (res.status === 200) {
      if (props.post._id === res.data._id) {
        console.log(props.post.likes, res.data.likes);
        props.setCount(--likeCount);
      } else {
        setPostData(res.data);
      }
    }
  }

  return (
    <>
      <div className="wrapper" style={Wrapper}>
        <div>
          <div className="bg-white pb-3 shadow-lg">
            <div className="ml-2 text-gray-600  text-sm font-semibold tracking-wider">
              <img
                className="rounded-full h-7 w-7 inline mr-3"
                src="../../assets/no_image.png"
                alt="no-pic"
              />
              <span>{props.post.postedBy.name}</span>
            </div>
          </div>
          <img
            src={props.post.photo}
            alt=" random imgee"
            className="w-full object-cover object-center rounded-lg shadow-md"
          />
          <div className="relative px-4 -mt-16  ">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-baseline">
                <div className="ml-2 flex flex-wrap content-start text-gray-600  text-xs font-semibold tracking-wider">
                  {renderLikeChange()}
                  <span className="text-sm pt-1">
                    {props.post.likes.length}
                  </span>
                  <ShareIcon /> <span className="text-sm pt-1">12</span>
                </div>
              </div>

              <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                {props.post.title}
              </h4>

              <div className="mt-1"> {props.post.body}</div>
              <div className="mt-4">
                <span className="text-teal-600 text-md font-semibold">
                  Comments [12]
                </span>
                <div className="text-sm text-gray-600">
                  show two-three comments here see more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Postcard;
