import { Link } from "react-router-dom";
import React from "react";

const MoreTeam = ({ content, title = "More Presenters" }) => {
  return (
    <>
      <div className="samachar-box team-more-title">
        <span className="cat-box">
          <span className="cat-tags">{title}</span>
        </span>
      </div>

      <div className="row more-teams">
        {content.moreTeam.map((t) => (
          <div className="col-md-4 item-news media">
            <div key={t.id}>
              <Link to={`/teamDetail/${t.id}`}>
                  <figure className="mr-3">
                    <img src={t.image_link} alt={t.title} />
                  </figure>
                  <span className="media-body">
                    <span className="main-title">{t.name}</span>
                    <span className="start-time">{t.jobtitle}</span>
                  </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MoreTeam;
