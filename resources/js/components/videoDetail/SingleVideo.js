import { Link } from "react-router-dom";
import React from "react";

const SingleVideo = () => {
  return (
    <>
      <section className="section content-editor video-player-box col-md-12">
        <div className="tag-box">
          <span className="tags">भिडियो ग्यालरी</span>
          <ul className="breadcrumbs float-right">
            <li className="first">
              <Link to="/#!">
                Home
              </Link>
            </li>
            <li>
              <Link to="/#!">
                भिडियो ग्यालरी
              </Link>
            </li>
            <li className="active">
              राति ११ बजेसम्म चल्ने गरी साझाको अपांगमैत्री बस सञ्चालनमा
            </li>
          </ul>
        </div>
        <div className="title-names col-md-12">
          <span className="news-big-title">
            राति ११ बजेसम्म चल्ने गरी साझाको अपांगमैत्री बस सञ्चालनमा
          </span>

          <div className="row share-items">
            <div className="total-comments col-md-4">
              <span className="left-icon fa fa-calendar"></span>
              <span className="author-title">मङ्गलबार, पुष २५, २०७४</span>
            </div>
            <div className="share-box col-md-8">
              <div className="share-now sharethis-inline-share-buttons"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="row latest-album">
        <div className="video-detail col-md-12">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/_VPvKl6ezyc?&autoplay=true"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default SingleVideo;
