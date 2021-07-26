import Sidebar from "../../components/common/sidebar/Sidebar";
import React from "react";
import VideosLists from "./VideosLists";

const VideoList = () => {
  return (
    <div className="container">
      <div className="row">
        <aside className="left-side col-sm-8 col-md-9">
          <section className="section special-news cat-list">
            <VideosLists />
          </section>
        </aside>

        <div className="right-side col-sm-4 col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default VideoList;
