import Sidebar1 from "../../components/common/sidebar/Sidebar1";
import TeamList from "../../components/ourTeam/TeamList";
import { Link } from "react-router-dom";
import React from "react";

const RadioPresenters = () => {
  return (
    <div className="container">
      <div className="row">
        <aside className="left-side team-rj col-sm-12 col-md-12">
          <section className="section content-editor col-md-12">
            <div className="tag-box">
              <span className="tags">Our Team</span>
              <ul className="breadcrumbs float-right">
                <li className="first">
                  <Link to="/#!">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/#!">
                    Our Team
                  </Link>
                </li>
                <li className="active">Radio Presenters</li>
              </ul>
            </div>
            <div className="title-names special-title col-md-12">
              <span className="news-big-title">
                Radio Presenters
                <div className="share-box">
                  <div className="share-now sharethis-inline-share-buttons"></div>
                </div>
              </span>
            </div>
          </section>

          <section className="section special-news special-programmes">
            <TeamList />
          </section>

          <div className="row right-side horizontal-layout team-right">
            <Sidebar1 />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default RadioPresenters;
