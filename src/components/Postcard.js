import React from "react";

const Wrapper = {
  display: "grid",
  height: "100vh",
  placeItems: "center",
  textAlign: "center",
  width: "32%",
  marginLeft: "480px",
};
const Postcard = () => {
  return (
    <>
      <div class="wrapper" style={Wrapper}>
        <div>
          <img
            src="https://source.unsplash.com/random/350x350"
            alt=" random imgee"
            class="w-full object-cover object-center rounded-lg shadow-md"
          />

          <div class="relative px-4 -mt-16  ">
            <div class="bg-white p-6 rounded-lg shadow-lg">
              <div class="flex items-baseline">
                <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                  Title
                </span>
                <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                  2 likes &bull; 3 shares
                </div>
              </div>

              <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                Hotel Plaza
              </h4>

              <div class="mt-1">
                Amazing day at the hotel plazaz, it is the best place to hang
                out with friends family. Food here is awesome and hospitality is
                also very good. I hope my you guys will check it out once
              </div>
              <div class="mt-4">
                <span class="text-teal-600 text-md font-semibold">
                  Comments [12]
                </span>
                <div class="text-sm text-gray-600">
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
