import React from "react";

const CountDown = () => {
  return (
    <>
      <span className="cat-box">
        <span className="cat-tags">Filmy Countdown</span>
      </span>
      <span className="update-date">Updated on : Feb 28, 2018</span>

      <div className="item-news media">
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
      <div className="item-news media">
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

      <div className="item-news media">
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

      <div className="item-news media">
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
      <div className="item-news media">
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

      <div className="item-news media">
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
    </>
  );
};

export default CountDown;
