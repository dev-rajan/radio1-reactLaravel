import Pagination from "../../components/newsList/Pagination";
import { Link } from "react-router-dom";
import React from "react";

const VideosLists = () => {
  return (
    <div className="samachar-box mukhya-samachar photos-list-box video-list">
      <div className="row main-stories">
        <div className="items latest-album more-item col-md-12">
          <Link to="/videoDetail">
              <figure>
                <img src="https://picsum.photos/1280/960/?random" alt="" />
                <span className="main-title">
                  वैशाख ९ गते एमाले र माओवादी केन्द्रको एकता घोषणा: उपाध्यक्ष
                  वामदेव गौतम
                  <span className="date-box">
                    <span className="left-icon fa fa-calendar"></span>मङ्गलबार,
                    पुष २५, २०७४
                  </span>
                </span>
                <span className="video-play fa fa-youtube-play"></span>
              </figure>
          </Link>
        </div>

        <div className="items more-item col-md-6">
          <Link to="/videoDetail">
              <figure>
                <img src="https://picsum.photos/1280/960?random" alt="" />
                <span className="main-title">
                  केही तलमाथि भेटिए ऐया आत्थु भन्न पनि पाउनु हुन्न –
                  प्रधानमन्त्री ओली
                </span>
                <span className="video-play fa fa-youtube-play"></span>
              </figure>
          </Link>
        </div>

        <div className="items more-item col-md-6">
          <Link to="/videoDetail">
              <figure>
                <img src="https://picsum.photos/1280/960" alt="" />
                <span className="main-title">
                  पराजुलीविरुद्ध परेको अवहेलना मुद्धा कामु प्रधानन्यायाधीश
                  जोशीको इजलासमा
                </span>
                <span className="video-play fa fa-youtube-play"></span>
              </figure>
          </Link>
        </div>

        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default VideosLists;
