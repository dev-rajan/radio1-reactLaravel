import Sidebar1 from "../../components/common/sidebar/Sidebar1";
import React from "react";
import Podcasts from "./Podcasts";

const PodcastList = () => {
  return (
    <div className="container">
      <div className="row">
        <section className="section content-editor podcast-box col-md-12">
          <div className="title-names special-title col-md-12">
            <span className="news-big-title">
              Podcasts
              <div className="share-box">
                <div className="share-now sharethis-inline-share-buttons"></div>
              </div>
            </span>
          </div>
        </section>
        <aside className="left-side col-sm-8 col-md-9">
          <section className="section special-news special-programmes">
            <Podcasts />
          </section>
        </aside>

        <div className="right-side innerpages col-sm-4 col-md-3">
          <Sidebar1 />
        </div>
      </div>
    </div>
  );
};

export default PodcastList;
