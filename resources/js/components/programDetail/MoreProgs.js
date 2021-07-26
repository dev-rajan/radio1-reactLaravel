import { Link } from "react-router-dom";
import React from "react";

const MoreProgs = ({ content }) => {
  return (
    <>
      <div className="samachar-box team-more-title alt">
        <span className="cat-box">
          <span className="cat-tags">More Programmes</span>
        </span>
      </div>

      <div className="row more-teams todays more-progs">
        {content.otherPrograms.map((a) => (
          <div className="col-md-4 item-news media">
            <Link to={`/programDetail/${a.id}`}>
                <figure className="mr-3">
                  <img src={a.image_link} alt={a.name} />
                </figure>
                <span className="media-body">
                  <span className="main-title">{a.name}</span>
                  <span className="start-time">
                    {a.start_time} - {a.end_time}
                  </span>
                  <span className="float-right on-air">
                    On Air <span className="double-bounce1"></span>
                    <span className="double-bounce2"></span>
                  </span>
                </span>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoreProgs;
