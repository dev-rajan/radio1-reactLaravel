import Pagination from "../../components/newsList/Pagination";
import { Link } from "react-router-dom";
import React from "react";

const Podcasts = () => {
  return (
    <div className="row bishesh news-cat-list podcast-items">
      <div className="items col-md-3">
        <Link to="podcastDetail">
            <figure>
              <img src="https://picsum.photos/1280/960?random" alt="" />
            </figure>

            <span className="main-title">Saathi Sanga Man Ka Kura</span>
            <sapn className="start-time">Jan 28, 2018</sapn>
            <span className="comments-line">
              <span className="left-icon fa fa-play"></span>Listen Now
            </span>
            <span className="total-view">
              <span className="left-icon fa fa-eye"></span>480 K
            </span>
        </Link>
      </div>

      <div className="items col-md-3">
        <Link to="podcastDetail">
            <figure>
              <img src="https://picsum.photos/1280/960" alt="" />
            </figure>

            <span className="main-title">CG Electronics Pop Countdown</span>
            <sapn className="start-time">Jan 20, 2018</sapn>
            <span className="comments-line">
              <span className="left-icon fa fa-play"></span>Listen Now
            </span>
            <span className="total-view">
              <span className="left-icon fa fa-eye"></span>30 K
            </span>
        </Link>
      </div>

      <div className="items col-md-3">
        <Link to="podcastDetail">
            <figure>
              <img src="https://picsum.photos/1280/960?random" alt="" />
            </figure>

            <span className="main-title">Dhara Oil Your Health</span>
            <sapn className="start-time">Jan 19, 2018</sapn>
            <span className="comments-line">
              <span className="left-icon fa fa-play"></span>Listen Now
            </span>
            <span className="total-view">
              <span className="left-icon fa fa-eye"></span>230
            </span>
        </Link>
      </div>

      <div className="items col-md-3">
        <Link to="podcastDetail">
            <figure>
              <img src="https://picsum.photos/1280/960" alt="" />
            </figure>

            <span className="main-title">Yo Maya Bhanne Chij Yastai Ho</span>
            <sapn className="start-time">Jan 18, 2018</sapn>
            <span className="comments-line">
              <span className="left-icon fa fa-play"></span>Listen Now
            </span>
            <span className="total-view">
              <span className="left-icon fa fa-eye"></span>230
            </span>
        </Link>
      </div>
      {/* <Pagination /> */}
    </div>
  );
};

export default Podcasts;
