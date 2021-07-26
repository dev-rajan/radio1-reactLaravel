import LatestPodcast from "../../components/homepage/latestPodcast";
import React from "react";
import Schedules from "./Schedules";

const ProgramSchedule = ({ title = "Programme Schedule" }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <section className="section content-editor full-content col-md-12">
            <div className="title-names special-title col-md-12">
              <span className="news-big-title">
                {title}
                <div className="share-box">
                  <div className="share-now sharethis-inline-share-buttons"></div>
                </div>
              </span>
            </div>
          </section>
          <aside className="left-side col-sm-8 col-md-9">
            <section className="section special-news special-programmes">
              <Schedules />
            </section>
          </aside>

          <div className="right-side col-sm-4 col-md-3">
            <div className="items samachar-box todays">
              <LatestPodcast />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramSchedule;
