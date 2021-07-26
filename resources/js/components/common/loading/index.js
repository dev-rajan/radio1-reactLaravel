import React from "react";

const Loading = () => {
  return (
    <div className="custom-loader">
      <div className="loader" />
      <img
        height="20"
        src="/assets/loader.gif"
        alt="Radio 1"
        title="Radio 1"
      />
    </div>
  );
};

export default Loading;
