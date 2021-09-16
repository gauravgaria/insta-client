import React from "react";
import { Link } from "react-router-dom";
const ProfilePostcard = (props) => {
  console.log(props);
  return (
    <>
      <div className="w-1/3 p-px md:px-3">
        {/* <!-- post 1--> */}

        <Link to="#">
          <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
            <img
              className="w-full h-full profile  left-0 top-0 object-cover"
              src={props.posts.photo}
              alt=""
            />
            <i className="fas fa-square  right-0 top-0 m-1"></i>

            <div
              className="overlay bg-gray-800 bg-opacity-25 w-full h-full profile  
                              left-0 top-0 hidden"
            >
              <div
                className="flex justify-center items-center 
                                  space-x-4 h-full profile"
              >
                <span className="p-2">
                  <i className="fas fa-heart"></i>
                  412K
                </span>

                <span className="p-2">
                  <i className="fas fa-comment"></i>
                  2,909
                </span>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </>
  );
};

export default ProfilePostcard;
