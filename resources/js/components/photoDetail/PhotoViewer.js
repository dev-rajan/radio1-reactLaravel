import { Link } from "react-router-dom";
import React from "react";

const PhotoViewer = () => {
  return (
    <div className="samachar-box mukhya-samachar photos-list-box">
      <div className="row main-stories zoom-box">
        <div className="items latest-album big-box more-item zoom-big-box col-md-9">
          <figure>
            <img src="https://picsum.photos/1280/960/?random" alt="" />
            <div className="spinners">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
            <span className="main-title bottom-overlay">
              <span className="photo-caption">
                एकाको एक दिने शैक्षिक मेला, विद्यार्थीका समस्या र गुनासामा ध्यान
                दिने प्रतिवद्धता
              </span>
              <span className="total-img-count">1/20</span>
            </span>

            <Link to="/#!" title="Previous" className="prev-btns">
                <span className="left-icon lnr lnr-chevron-left"></span>
            </Link>
            <Link to="/#!" title="Next" className="next-btns">
                <span className="left-icon lnr lnr-chevron-right"></span>
            </Link>
          </figure>
        </div>

        <div className="photo-info-box col-md-3">
          <span className="main-title">
            होली कार्यक्रम २०७४
            <span className="date-box">
              <span className="left-icon fa fa-calendar"></span>मङ्गलबार, पुष
              २५, २०७४
            </span>
            <div className="share-box">
              <span className="share-title">
                <span className="left-icon fa fa-share-alt"></span>Share This
              </span>
              <div className="share-now sharethis-inline-share-buttons"></div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoViewer;
