import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations/loginValidation";
import userController from "../controller/userController";
const Login = () => {
  const history = useHistory();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [credError, setCredError] = useState(" ");
  //initialise form handler
  const {
    register, // pre defined function
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const loginForm = () => {
    setCredError("");
    userController
      .loginUser(credentials)
      .then((res) => {
        if (res.status === 200) {
          history.push("/");
        } else {
          setCredError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(loginForm)}>
        <div
          class="w-full h-screen md:-mx-4"
          style={{ filter: "blur(6px)" }}
        ></div>
        <div
          class="absolute w-2/5 bg-white"
          style={{
            transform: "translate(-50%, -50%)",
            top: "50%",
            left: "50%",
          }}
        >
          <div class="flex justify-center -mt-10">
            <img
              class="border-2 w-20 h-20 rounded-full"
              src="/assets/instalogo.jpg"
              alt=""
            />
          </div>
          <div class="px-12 py-10">
            <div class="w-full mb-2">
              <div class="flex items-center">
                <i class="ml-3 fill-current text-gray-400 text-xs z-10 far fa-user"></i>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="-mx-6 px-8  w-full border rounded px-3 py-1 text-gray-700"
                  {...register("email")}
                  value={credentials.email}
                  onChange={onChangeHandler}
                />
              </div>
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.email?.message}
              </span>
            </div>
            <div class="w-full mb-2">
              <div class="flex items-center">
                <i class="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="-mx-6 px-8  w-full border rounded px-3 py-1 text-gray-700"
                  {...register("password")}
                  value={credentials.password}
                  onChange={onChangeHandler}
                />
              </div>
              <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                {errors.password?.message}
              </span>
            </div>
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              {credError}
            </span>
            <div class="mt-8 flex justify-between">
              <div class="flex items-center">
                <input type="checkbox" class="w-4 h-4 mr-2" />
                <span class="text-xs text-gray-700">Remember Me</span>
              </div>

              <div>
                <button
                  type="text"
                  class="bg-yellow-400 text-xs text-gray-700 rounded px-4 py-2"
                >
                  SIGN IN
                </button>
              </div>
            </div>
            <Link to="/signup" className="flex items-center py-4">
              Don't have an acocunt .?
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
