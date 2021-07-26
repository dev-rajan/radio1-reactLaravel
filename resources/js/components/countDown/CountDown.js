import Sidebar from "../common/sidebar/Sidebar";
import { Link } from "react-router-dom";
import React from "react";

const CountDownPage = () => {
  return (
    <div className="container">
      <div className="row">
        <aside className="left-side col-sm-8 col-md-9">
          <section className="section content-editor col-md-12">
            <div className="tag-box">
              <span className="tags">Pop Countdown</span>
              <ul className="breadcrumbs float-right">
                <li className="first">
                  <Link to="/#">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/#">
                    Countdown
                  </Link>
                </li>
                <li className="active">Pop Countdown</li>
              </ul>
            </div>

            <div className="title-names col-md-12">
              <span className="news-big-title">
                CG Electronics Pop Countdown
              </span>

              <div className="row authors-box">
                <div className="items author-pic col-md-4">
                  <div className="media">
                    <div className="media-body">
                      <span className="main-title">Updated On</span>
                      <span className="designation">Feb 18, 2018</span>
                    </div>
                  </div>
                </div>

                <div className="share-box col-md-8">
                  <div className="share-now sharethis-inline-share-buttons"></div>
                </div>
              </div>
            </div>
            <div className="row countdown countdown-box">
              <div className="item-news col-md-12 media">
                <figure className="mr-3">
                  <span className="number-box">
                    <span className="num-title">1</span>
                    <span className="status non-mover ">
                      <span className="left-icon icon-sort fa fa-sort"></span>
                    </span>
                  </span>
                </figure>
                <span className="media-body">
                  <span className="main-title">Parkha Parkha Mayalu</span>
                  <span className="start-time">Mangalam</span>
                </span>
              </div>
              <div className="item-news col-md-12 media">
                <figure className="mr-3">
                  <span className="number-box">
                    <span className="num-title">2</span>
                    <span className="status move-up">
                      <span className="left-icon fa fa-sort-asc"></span>
                    </span>
                  </span>
                </figure>
                <span className="media-body">
                  <span className="main-title">Yati Yeti Pani Ganga Rani</span>
                  <span className="start-time">Kri</span>
                </span>
              </div>

              <div className="item-news col-md-12 media">
                <figure className="mr-3">
                  <span className="number-box">
                    <span className="num-title">3</span>
                    <span className="status move-up">
                      <span className="left-icon fa fa-sort-asc"></span>
                    </span>
                  </span>
                </figure>
                <span className="media-body">
                  <span className="main-title">Rupai Mohani Naran</span>
                  <span className="start-time">Shatru Gate</span>
                </span>
              </div>

              <div className="item-news col-md-12 media">
                <figure className="mr-3">
                  <span className="number-box">
                    <span className="num-title">4</span>
                    <span className="status move-up">
                      <span className="left-icon fa fa-sort-asc"></span>
                    </span>
                  </span>
                </figure>
                <span className="media-body">
                  <span className="main-title">Timi Uta Kinarama Ma Yata</span>
                  <span className="start-time">Chhakka Panjaa 2</span>
                </span>
              </div>
              <div className="item-news col-md-12 media">
                <figure className="mr-3">
                  <span className="number-box">
                    <span className="num-title">5</span>
                    <span className="status move-down">
                      <span className="left-icon fa fa-sort-desc"></span>
                    </span>
                  </span>
                </figure>
                <span className="media-body">
                  <span className="main-title">Merai Naam ko Sindur Ko</span>
                  <span className="start-time">Shatru Gate</span>
                </span>
              </div>

              <div className="item-news col-md-12 media">
                <figure className="mr-3">
                  <span className="number-box">
                    <span className="num-title">6</span>
                    <span className="status move-down">
                      <span className="left-icon fa fa-sort-desc"></span>
                    </span>
                  </span>
                </figure>
                <span className="media-body">
                  <span className="main-title">I am Sorry</span>
                  <span className="start-time">Panche Baja</span>
                </span>
              </div>
            </div>
          </section>
        </aside>

        <div className="right-side innerpages col-sm-4 col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default CountDownPage;
