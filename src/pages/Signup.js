import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validations/registerValidation";
import userController from "../controller/userController";
const Signup = () => {
  //intialise redirect
  let history = useHistory();

  //initialise state
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [emailError, setEmailError] = useState(" ");

  //initialise form handler
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  //onchange handler

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitForm = () => {
    setEmailError(" ");
    userController
      .storeUserData(user)
      .then((res) => {
        if (res.status === 200) {
          history.push("/");
        } else {
          setEmailError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div
          className="w-full h-screen md:-mx-4"
          style={{ filter: "blur(6px)" }}
        ></div>
        <div
          className="absolute w-2/5 bg-white"
          style={{
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
          }}
        >
          <div className="flex justify-center -mt-10">
            <img
              className="border-2 w-20 h-20 rounded-full"
              src="/assets/instalogo.jpg"
              alt=""
            />
          </div>
          <div className="px-12 py-10">
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 far fa-user"></i>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="-mx-6 px-8  w-full border rounded px-3 py-1 text-gray-700"
                  {...register("name")}
                  value={user.name}
                  onChange={onChangeHandler}
                />
              </div>
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.name?.message}
              </span>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center mb-2">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-envelope"></i>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="-mx-6 px-8 w-full border rounded px-3 py-1 text-gray-700"
                  {...register("email")}
                  value={user.email}
                  onChange={onChangeHandler}
                />
              </div>
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.email?.message}
                {emailError}
                {/*    {emailError} */}
              </span>
              <div className="flex items-center mb-2">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="-mx-6 px-8 w-full border rounded px-3 py-1 text-gray-700"
                  {...register("password")}
                  value={user.password}
                  onChange={onChangeHandler}
                />
              </div>
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.password?.message}
              </span>
              <div className="flex items-center mb-2">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Confirm password"
                  name="confirm_password"
                  className="-mx-6 px-8 w-full border rounded px-3 py-1 text-gray-700"
                  {...register("confirm_password")}
                  value={user.confirm_password}
                  onChange={onChangeHandler}
                />
              </div>
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.confirm_password && "Passwords should match!"}
              </span>
            </div>
            <div className="mt-8 flex justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <span className="text-xs text-gray-700">Remember Me</span>
              </div>
              <div>
                <button
                  type="text"
                  className="bg-yellow-400 text-xs text-gray-700 rounded px-4 py-2"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <Link to="/login" className="flex items-center py-4">
              Already have an acocunt .?
            </Link>
            <p className="mt-6 text-xs text-gray-600 text-center">
              I agree to abide by InstaPost Corporation Pvt Ltd.
              <Link
                to="#"
                className="pr-1 border-b border-gray-500 border-dotted"
              >
                Terms of Service
              </Link>
              and its
              <Link
                to="#"
                className="border-b pl-1 border-gray-500 border-dotted"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
