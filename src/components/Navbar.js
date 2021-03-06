import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../App";
import userController from "../controller/userController";
const Navbar = () => {
  const history = useHistory();
  const logoutHandler = async () => {
    const refresh_token = Cookies.get("jid");
    const logoutUser = await userController.logoutUser(refresh_token);

    if (logoutUser.status === 200) {
      Cookies.remove("jid");
      dispatch({ type: "CLEAR" });
      history.push("/login");
    }
  };

  const { state, dispatch } = useContext(UserContext);
  const renderNavList = () => {
    if (state) {
      return [
        <>
          <div className="bg-white pt-1">
            <div className="ml-2 text-gray-600  text-sm font-semibold tracking-wider">
              <img
                className="rounded-full h-7 w-7 inline mr-3"
                src="../../assets/no_image.png"
                alt="no-pic"
              />
              <span>{state.name}</span>
            </div>
          </div>
          <Link
            to="/profile"
            className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            Profile
          </Link>
          <Link
            onClick={logoutHandler}
            to="#"
            className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            Logout
          </Link>
        </>,
      ];
    } else {
      return [
        <>
          <Link
            to="/login"
            className="py-4 px-2 text-gray-500 hover:text-green-500 font-semibold "
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            Signup
          </Link>
        </>,
      ];
    }
  };

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className=" mx-auto px-10">
          <div className="flex justify-between">
            <div>
              <Link
                to={state ? "/" : "login"}
                className="flex items-center py-4"
              >
                <img
                  src="/assets/instalogo.jpg"
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="font-semibold text-gray-500 text-lg">
                  InstaPost
                </span>
              </Link>
            </div>

            <div className="hidden md:flex px-20 items-center space-x-4">
              {renderNavList()}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
