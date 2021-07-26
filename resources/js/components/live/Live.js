import React from "react";
import LiveProgram from "./LiveProgram";
import MoreProgram from "./MoreProgram";

const Live = () => {
  return (
    <div className="container">
      <div className="row">
        <section className="section content-editor full-content col-md-12">
          <div className="title-names special-title col-md-12">
            <span className="news-big-title">
              Live
              <div className="share-box">
                <div className="share-now sharethis-inline-share-buttons"></div>
              </div>
            </span>
          </div>
        </section>
        <aside className="left-side col-sm-8 col-md-9">
          <section className="section special-news special-programmes">
            <LiveProgram />
          </section>
        </aside>

        <div className="right-side col-sm-4 col-md-3">
          <div className="items samachar-box todays live-more">
            <MoreProgram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Live;
