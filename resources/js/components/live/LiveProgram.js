import { Link } from "react-router-dom";
import React from "react";

const LiveProgram = () => {
  return (
    <div className="special-box pro-slide-box">
      <div className="row live-now">
        <div className="item-news col-md-4">
          <span className="live-title spinner">
            Now{" "}
            <span className="on-air">
              On Air <span className="double-bounce1"></span>
              <span className="double-bounce2"></span>
            </span>
          </span>
          <Link to="/programDetail">
              <figure className="mr-3">
                <img src="/public/images/pro01.jpg" alt="" />
              </figure>
              <span className="main-title">Nepali Pop Express</span>
              <span className="start-time">2:00 pm - 3:00 pm</span>
          </Link>
        </div>

        <div className="item-news col-md-4">
          <span className="live-title">Up Next</span>
          <Link to="/programDetail">
              <figure className="mr-3">
                <img src="/public/images/pro02.jpg" alt="" />
              </figure>
              <span className="main-title">CG Electronics Music Re-Load</span>
              <span className="start-time spinner">3:00 pm - 4:00 pm </span>
          </Link>
        </div>

        <div className="item-news col-md-4">
          <span className="live-title">Later On</span>
          <Link to="/programDetail">
              <figure className="mr-3">
                <img src="/public/images/pro03.jpg" alt="" />
              </figure>
              <span className="main-title">Dhara Your Health</span>
              <span className="start-time spinner">4:00 pm - 5:00 pm </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LiveProgram;
