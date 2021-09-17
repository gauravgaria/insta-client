import React, { useContext, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../App";
import userController from "../controller/userController";
import postController from "../controller/postController";
import ProfilePostcard from "../components/ProfilePostcard";

const Profile = () => {
  const history = useHistory();

  const { state, dispatch } = useContext(UserContext);
  const [userPost, setUserPosts] = useState([]);
  //  console.log(state);
  async function getUserProfileData() {
    const userData = await postController.showMyPosts();

    if (userData !== undefined && userData.status === 200) {
      setUserPosts(userData.data.userPosts);
      //  console.log(userData.data.userPosts);
    } else {
      history.push("/login");
    }
  }

  useLayoutEffect(() => {
    getUserProfileData();
  }, []);

  /* useEffect(() => {
    const refresh_token = Cookies.get("jid");
    console.log(refresh_token);
    if (!refresh_token) {
      history.push("/login");
    }
  }, []); */
  return (
    <>
      <main className="bg-gray-100 bg-opacity-25">
        <div className="lg:w-8/12 lg:mx-auto mb-8">
          <header className="flex flex-wrap items-center p-4 md:py-8">
            <div className="md:w-3/12 md:ml-16">
              {/*   <!-- profile image --> */}
              <img
                className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full
                   border-2 border-pink-600 p-1"
                src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                alt="profile"
              />
            </div>

            {/* <!-- profile meta --> */}
            <div className="w-8/12 md:w-7/12 ml-4">
              <div className="md:flex md:flex-wrap md:items-center mb-4">
                <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                  {state ? state.name : "loading"}
                </h2>

                {/* <!-- badge --> */}
                <span
                  className="inline-block fas fa-certificate fa-lg text-blue-500 
                             relative mr-6 text-xl transform -translate-y-2"
                  aria-hidden="true"
                >
                  <i
                    className="fas fa-check text-white text-xs  inset-x-0
                             ml-1 mt-px"
                  ></i>
                </span>

                {/*  <!-- follow button --> */}
                <Link
                  to="#"
                  className="bg-blue-500 px-2 py-1 
                      text-white font-semibold text-sm rounded block text-center 
                      sm:inline-block block"
                >
                  Follow
                </Link>
              </div>

              {/*   <!-- post, following, followers list for medium screens --> */}
              <ul className="hidden md:flex space-x-8 mb-4">
                <li>
                  <span className="font-semibold pr-1">{userPost.length}</span>
                  posts
                </li>

                <li>
                  <span className="font-semibold"></span>
                  followers
                </li>
                <li>
                  <span className="font-semibold"></span>
                  following
                </li>
              </ul>

              {/*  <!-- user meta form medium screens --> */}
              <div className="hidden md:block">
                <h1 className="font-semibold">Mr Coder</h1>
                <span>Travel, Nature and Music</span>
                <p>Living for others</p>
              </div>
            </div>

            {/*   <!-- user meta form small screens --> */}
            <div className="md:hidden text-sm my-2">
              <h1 className="font-semibold">Mr Travlerrr...</h1>
              <span>Travel, Nature and Music</span>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </header>

          {/* <!-- posts --> */}
          <div className="px-px md:px-3">
            {/*   <!-- user following for mobile only --> */}
            <ul
              className="flex md:hidden justify-around space-x-8 border-t 
              text-center p-2 text-gray-600 leading-snug text-sm"
            >
              <li>
                <span className="font-semibold text-gray-800 block">136</span>
                posts
              </li>

              <li>
                <span className="font-semibold text-gray-800 block">40.5k</span>
                followers
              </li>
              <li>
                <span className="font-semibold text-gray-800 block">302</span>
                following
              </li>
            </ul>

            {/* <!-- insta freatures --> */}
            <ul
              className="flex items-center justify-around md:justify-center space-x-12  
                  uppercase tracking-widest font-semibold text-xs text-gray-600
                  border-t"
            >
              {/*   <!-- posts tab is active --> */}
              <li className="md:border-t md:border-gray-700 md:-mt-px md:text-gray-700">
                <Link className="inline-block p-3" to="#">
                  <i className="fas fa-th-large text-xl md:text-xs"></i>
                  <span className="hidden md:inline">post</span>
                </Link>
              </li>
              <li>
                <Link className="inline-block p-3" to="#">
                  <i className="far fa-square text-xl md:text-xs"></i>
                  <span className="hidden md:inline">igtv</span>
                </Link>
              </li>
              <li>
                <Link className="inline-block p-3" to="#">
                  <i
                    className="fas fa-user border border-gray-500
                           px-1 pt-1 rounded text-xl md:text-xs"
                  ></i>
                  <span className="hidden md:inline">tagged</span>
                </Link>
              </li>
            </ul>
            {/* <!-- flexbox grid --> */}
            <div className="flex flex-wrap -mx-px md:-mx-3">
              {userPost.map((post, index) => {
                return <ProfilePostcard key={index} posts={post} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
