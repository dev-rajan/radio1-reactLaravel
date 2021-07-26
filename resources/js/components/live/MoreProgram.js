import { Link } from "react-router-dom";
import React from "react";

const MoreProgram = () => {
  return (
    <>
      <span className="cat-box">
        <span className="cat-tags">More Programmes</span>
      </span>

      <div className="item-news media">
        <Link to="/videoDetail">
            <figure className="mr-3">
              <img src="https://picsum.photos/150/150?random" alt="" />
            </figure>
            <span className="media-body">
              <span className="main-title">Century Masala Filmy Guff</span>
              <span className="start-time spinner">
                2:00 pm - 3:00 pm{" "}
                <span className="float-right on-air">
                  On Air <span className="double-bounce1"></span>
                  <span className="double-bounce2"></span>
                </span>
              </span>
            </span>
        </Link>
      </div>
      <div className="item-news media">
        <Link to="/videoDetail">
            <figure className="mr-3">
              <img src="https://picsum.photos/150/150" alt="" />
            </figure>
            <span className="media-body">
              <span className="main-title">Your Health Show</span>
              <span className="start-time">3:00 pm - 4:00 pm</span>
            </span>
        </Link>
      </div>

      <div className="item-news media">
        <Link to="/videoDetail">
            <figure className="mr-3">
              <img src="https://picsum.photos/150/150?random" alt="" />
            </figure>
            <span className="media-body">
              <span className="main-title">Saathi Sanga Man Ka Kura</span>
              <span className="start-time">5:00 pm - 6:00 pm</span>
            </span>
        </Link>
      </div>
    </>
  );
};

export default MoreProgram;
