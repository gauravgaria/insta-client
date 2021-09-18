import React from "react";

const ShareIcon = () => {
  return (
    <div className="pl-2 pr-2">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        version="1"
        viewBox="0 0 48 48"
        enable-background="new 0 0 48 48"
        height="2.2em"
        width="2.2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1976D2"
          d="M38.1,31.2L19.4,24l18.7-7.2c1.5-0.6,2.3-2.3,1.7-3.9c-0.6-1.5-2.3-2.3-3.9-1.7l-26,10C8.8,21.6,8,22.8,8,24 s0.8,2.4,1.9,2.8l26,10c0.4,0.1,0.7,0.2,1.1,0.2c1.2,0,2.3-0.7,2.8-1.9C40.4,33.5,39.6,31.8,38.1,31.2z"
        ></path>
        <g fill="#1E88E5">
          <circle cx="11" cy="24" r="7"></circle>
          <circle cx="37" cy="14" r="7"></circle>
          <circle cx="37" cy="34" r="7"></circle>
        </g>
      </svg>
    </div>
  );
};

export default ShareIcon;
