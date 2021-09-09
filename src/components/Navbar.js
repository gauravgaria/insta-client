import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className=" mx-auto px-10">
          <div className="flex justify-between">
            <div>
              <a href="#" className="flex items-center py-4">
                <img
                  src="/assets/instalogo.jpg"
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="font-semibold text-gray-500 text-lg">
                  InstaPost
                </span>
              </a>
            </div>

            <div className="hidden md:flex px-20 items-center space-x-4">
              <a
                href=""
                className="py-4 px-2 text-gray-500 hover:text-green-500 font-semibold "
              >
                Login
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Signup
              </a>
              <a
                href=""
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Profile
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
