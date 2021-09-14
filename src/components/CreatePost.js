import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postSchema } from "../validations/postValidation";
import postController from "../controller/postController";
import axios from "axios";
import ImageLoader from "../helper/ImageLoader";
const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
    photo: "",
  });

  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
  });

  const onChangeHandler = (e) => {
    const { name, files, value } = e.target;
    setPost({
      ...post,
      [name]: value,
      files: files,
    });
  };

  const submitPost = async () => {
    setLoader(true);
    const { title, body, files } =
      post; /**Destructure the object to get key and value */
    console.log(files);
    let formData = new FormData();
    formData.append("file", files[0]);
    formData.append("body", body);
    formData.append("title", title);

    const res = await postController.createPost(formData);
    if (res) {
      console.log(res);
      setLoader(false);
    }
  };

  return (
    <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6 mt-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0"></div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-1">
            <form onSubmit={handleSubmit(submitPost)}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <label
                      for="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Title
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="title"
                        {...register("title")}
                        onChange={onChangeHandler}
                        value={post.title}
                        placeholder="Enter a title"
                        className="-mx-6  ml-1 px-8 w-full border rounded px-3 py-1 text-gray-700"
                      />
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        {errors.title?.message}
                      </span>
                    </div>

                    <label
                      for="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="body"
                        {...register("body")}
                        onChange={onChangeHandler}
                        value={post.body}
                        rows="3"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter some description for your post in not more than 100 words"
                      ></textarea>
                      <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                        {errors.body?.message}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Choose photo for your post
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            for="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              name="files"
                              id="file-upload"
                              type="file"
                              onChange={onChangeHandler}
                              className="sr-only"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    {/*  <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors.photo?.message}
                    </span> */}
                  </div>
                </div>
                {loader ? <ImageLoader /> : null}
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="md:col-span-1"></div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
