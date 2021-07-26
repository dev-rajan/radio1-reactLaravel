import { Link } from "react-router-dom";
import React from "react";

const SpecialProgs = () => {
  return (
    <div className="special-box pro-slide-box">
      <div className="pro-full-slider">
        <div className="item-news">
          <Link to="/programDetail">
              <figure className="mr-3">
                <img src="/public/images/pro01.jpg" alt="" />
              </figure>

              <span className="main-title">Nepali Pop Express</span>
              <span className="start-time spinner">
                2:00 pm - 3:00 pm{" "}
                <span className="float-right on-air">
                  On Air <span className="double-bounce1"></span>
                  <span className="double-bounce2"></span>
                </span>
              </span>
          </Link>
        </div>

        <div className="item-news">
          <Link to="/programDetail">
              <figure className="mr-3">
                <img src="/public/images/pro02.jpg" alt="" />
              </figure>

              <span className="main-title">CG Electronics Music Re-Load</span>
              <span className="start-time spinner">3:00 pm - 4:00 pm </span>
          </Link>
        </div>

        <div className="item-news">
          <Link to="/programDetail">
              <figure className="mr-3">
                <img src="/public/images/pro03.jpg" alt="" />
              </figure>

              <span className="main-title">Dhara Your Health</span>
              <span className="start-time spinner">4:00 pm - 5:00 pm </span>
          </Link>
        </div>

        <div className="item-news">
          <Link to="/programDetail">
              <figure className="mr-3">
                <img src="/public/images/pro04.jpg" alt="" />
              </figure>

              <span className="main-title">Maizan Cookery Show</span>
              <span className="start-time spinner">8:00 pm - 11:00 pm </span>
          </Link>
        </div>

        <div className="item-news">
          <Link to="/programDetail">
              <figure className="mr-3">
                <img src="/public/images/pro05.jpg" alt="" />
              </figure>

              <span className="main-title">Britannia Tea Time</span>
              <span className="start-time spinner">7:00 pm - 8:00 pm </span>
          </Link>
        </div>

        <div className="item-news">
          <Link to="/programDetail">
              <figure className="mr-3">
                <img src="/public/images/pro06.jpg" alt="" />
              </figure>

              <span className="main-title">Oliz Store Gadgets Nepal</span>
              <span className="start-time spinner">4:00 pm - 5:00 pm </span>
          </Link>
        </div>

        <div className="item-news">
          <Link to="/programDetail">
              <figure className="mr-3">
                <img src="/public/images/pro07.jpg" alt="" />
              </figure>

              <span className="main-title">Yamaha Bikes Nepal</span>
              <span className="start-time spinner">8:00 pm - 9:00 pm </span>
          </Link>
        </div>

        <div className="item-news">
          <Link to="/programDetail">
              <figure className="mr-3">
                <img src="/public/images/pro08.jpg" alt="" />
              </figure>

              <span className="main-title">Archies Gallery Love Hearts</span>
              <span className="start-time spinner">10:00 pm - 11:00 pm </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialProgs;
