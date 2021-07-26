import { Link } from "react-router-dom";
import React from "react";
import MoreProgs from "./MoreProgs";

const ProgrammeDetails = ({ content }) => {
  return (
    <>
      <div className="row team-detail-box pro-details">
        <div className="col-md-3 team-infos">
          <div className="items profile-pic">
            <figure>
              <img
                src={content.program.image_link}
                alt={content.program.name}
              />
            </figure>
          </div>

          <div className="items shows">
            <span className="main-title">Everyday</span>

            <ul className="my-shows">
              {content.programSchedules.Everyday?.map((a) => (
                <li>
                  <span className="start-time">
                    {a.start_time} - {a.end_time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="items shows">
            <span className="main-title">Radio Presenter</span>
            <ul className="my-shows">
              {content.programPresenters.map((a) => (
                <li key={a.id}>
                  <Link to={`/teamDetail/${a.id}`}>
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="items social">
            <span className="main-title">Get Connected</span>
            <Link to="/#!" target="_blank" title="Facebook">
                <span className="left-icon fa fa-facebook"></span>
            </Link>
            <Link to="/#!" target="_blank" title="Twitter">
                <span className="left-icon fa fa-twitter"></span>
            </Link>
          </div>
        </div>

        <div className="col-md-9 samachar-box team-details">
          <span className="cat-box">
            <span className="cat-tags">Programme Info</span>
          </span>
          <div className="editor-box">{content.details}</div>

          <div className="comment-box">
            <span className="comment-title main-title">
              प्रतिक्रिया दिनुहोस्
            </span>
            <span>The facebook comment plugin code goes here.</span>
          </div>
        </div>
      </div>

      <MoreProgs content={content} />
    </>
  );
};

export default ProgrammeDetails;
