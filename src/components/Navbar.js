import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../App";
const Navbar = () => {
  const [login, setLogin] = useState(false);
  const history = useHistory();
  const logoutHandler = () => {
    Cookies.remove("jid");
    dispatch({ type: "CLEAR" });
    history.push("/login");
  };

  const { state, dispatch } = useContext(UserContext);
  const renderNavList = () => {
    console.log(state);
    if (state) {
      return [
        <>
          welcome {state.name}
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
