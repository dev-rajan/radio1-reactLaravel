import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import $ from "jquery";
// import AbortController from "abort-controller"

// const abortC = new AbortController();

const LivePlayer = ({ title = "Live Radio" }) => {
  const [radio, setRadio] = useState([]);
  const [data, setData] = useState([]);
  const [isBusy, setBusy] = useState(true);
  // const [showMe, setShowMe] = useState(false);

  // function handleToggle(e) {
  //   e.stopPropagation();
  //   setShowMe(!showMe);
  // }
  // function handleClose(e) {
  //   e.stopPropagation();
  //   setShowMe(!showMe);
  // }

  useEffect(() => {
    $(document).ready(function () {
      $(".live-play-btn").click(function (event) {
        event.stopPropagation();
        $("body").addClass("overflow-hide");
        $(".live-player-box").css({
          right: "0",
        });

        $(".overflow-hide").css({
          right: "15%",
          transition: "all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86)",
        });
      });

      $(".live-close").click(function (event) {
        event.stopPropagation();
        $("body").removeClass("overflow-hide");
        $(".live-player-box").css({
          right: "-100%",
        });
        $("body").css({
          right: "0",
        });
      });
      $(".live-player-box").on("click", function (event) {
        event.stopPropagation();
      });
    });

    $(document).on("click", function () {
      $("body").removeClass("overflow-hide");
      $(".live-player-box").css({
        right: "-500px",
      });
      $("body").css({
        right: "0",
      });
    });
  }, []);

  useEffect(() => {
    const asyncFetchLive = async () => {
      setBusy(true);
      const liveRadio = await fetch(
        "https://www.uniquefm.com.np/api/get-live-data"
        // ,{signal: abortC.signal,}
      );
      const radioData = await liveRadio.json();
      setBusy(false);

      const LiveRadio = radioData.onAir;
      setRadio(LiveRadio);
      setBusy(false);

      const ItemList = radioData.upNext;
      setData(ItemList);
      setBusy(false);
    };
    asyncFetchLive();
  }, []);

  return (
    <>
      <span
        className="live-play-btn"
        //  onClick={handleToggle}
      >
        <span className="main-lable">{title}</span>
        <span className="left-icon lnr lnr-menu"></span>
      </span>
      <div
        className="live-player-box"
        // style={{ right: showMe ? "0" : "-500px" }}
      >
        <div className="live-player">
          <div className="row live-now live-fixed">
            <div
              className="item-news live-close col-md-12"
              // onClick={handleClose}
            >
              <span className="main-title">
                {title}
                <span className="close-live">
                  <span className="left-icon lnr lnr-cross"></span>
                </span>
              </span>
            </div>

            {isBusy
              ? "...loading data from server"
              : radio && (
                  <div className="item-news on-air-now col-md-12">
                    <span className="live-title spinner">
                      Now
                      <span className="on-air">
                        On Air <span className="double-bounce1"></span>
                        <span className="double-bounce2"></span>
                      </span>
                    </span>
                    <Link to={`/programDetail/${radio["id"]}`}>
                        <figure className="mr-3">
                          <img src={radio["image_link"]} alt={radio["name"]} />
                        </figure>

                        <span className="main-title">{radio["name"]}</span>
                        <span className="start-time">
                          {radio["start_time"]} - {radio["end_time"]}
                        </span>
                    </Link>
                  </div>
                )}

            <div className="item-news player-box col-md-12">
              <div className="playerbox">
                <div className="player player-cover">
                  <audio
                    id="player2"
                    preload="true"
                    controls
                    autoPlay
                    style={{ maxWidth: "100%", width: "100%" }}
                  >
                    <source src="https://streaming.softnep.net:10941/;stream.nsv&type=mp3&volume=70" />
                  </audio>
                </div>
              </div>
            </div>

            <div className="item-news provided-by col-md-12">
              <span className="live-info">
                Live streaming is powered by
                <Link to="https://softnep.com">
                  SoftNEP
                </Link>
              </span>
            </div>

            <div className="right-side col-md-12">
              {isBusy ? (
                "...loading data from server"
              ) : (
                <>
                  <div className="items samachar-box todays">
                    <span className="live-title">Up Next</span>
                    {data &&
                      data
                        .map((c) => (
                          <div className="item-news media" key={c.id}>
                            <Link to={`/programDetail/${c.id}`}>
                                <figure className="mr-3">
                                  <img src={c.image_link} alt={c.name} />
                                </figure>
                                <span className="media-body">
                                  <span className="main-title">{c.name}</span>
                                  <span className="start-time">
                                    {c.start_time} - {c.end_time}
                                  </span>
                                </span>
                            </Link>
                          </div>
                        ))
                        .slice(0, 1)}
                  </div>

                  <div className="items samachar-box todays alt">
                    <span className="live-title">Later On</span>
                    {data &&
                      data
                        .map((a) => (
                          <div className="item-news media" key={a.id}>
                            <Link to={`/programDetail/${a.id}`}>
                                <figure className="mr-3">
                                  <img src={a.image_link} alt={a.name} />
                                </figure>
                                <span className="media-body">
                                  <span className="main-title">{a.name}</span>
                                  <span className="start-time">
                                    {a.start_time} - {a.end_time}
                                  </span>
                                </span>
                            </Link>
                          </div>
                        ))
                        .slice(1, 4)}
                  </div>
                </>
              )}
              <div className="item-news provided-by view-full col-md-12">
                <span className="live-info">
                  View all programme schedule
                  <Link to="/programSchedules">
                    Click Here
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        <span className="overlay-box"></span>
      </div>
    </>
  );
};

export default LivePlayer;
