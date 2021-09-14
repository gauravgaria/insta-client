import React from "react";

const Wrapper = {
  display: "grid",
  height: "100vh",
  placeItems: "center",
  textAlign: "center",
  width: "32%",
  marginLeft: "480px",
};
const Postcard = (props) => {
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
                <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Title
                </span>
                <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  2 likes &bull; 3 shares
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
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
