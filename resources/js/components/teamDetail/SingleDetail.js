import { Link } from "react-router-dom";
import React from "react";
import MoreTeam from "./MoreTeam";

const SingleDetail = ({ content }) => {
  return (
    <>
      <div className="row team-detail-box">
        <div className="col-md-3 team-infos">
          <div className="items profile-pic">
            <figure>
              <img
                src={content.teamInfo.image_link}
                alt={content.teamInfo.member_type.title}
              />
            </figure>
            <span className="main-title">{content.teamInfo.name}</span>
            <span className="designation">{content.teamInfo.jobtitle}</span>
          </div>

          <div className="items shows">
            <span className="main-title">My Shows</span>
            <ul className="my-shows">
              {content &&
                content.myPrograms.map((p) => (
                  <li>
                    <div key={p.id}>
                      <Link to={`/programDetail/${p.id}`}>
                        {p.name}
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          {/* <div className="items social">
            <span className="main-title">Get Connected</span>
            <TeamSocial
              url={content && content ? content.teamInfo.facebook : ("#")}
              label="Facebook"
              className="fa fa-facebook"
            />
            <TeamSocial
              url={content && content ? content.teamInfo.twitter : ("#")}
              label="Twitter"
              className="fa fa-twitter"
            />
            <TeamSocial
              url={content && content ? content.teamInfo.google_plus : ("#")}
              label="Google_Plus"
              className="fa fa-google-plus"
            />
          </div> */}
        </div>

        <div className="col-md-9 samachar-box team-details">
          <span className="cat-box">
            <span className="cat-tags">{content.teamInfo.name}'s Profile</span>
          </span>
          <div className="editor-box">{content.teamInfo.content}</div>

          <div className="comment-box">
            <span className="comment-title main-title">
              प्रतिक्रिया दिनुहोस्
            </span>
            <span>The facebook comment plugin code goes here.</span>
          </div>
        </div>
      </div>
      <MoreTeam content={content} />
    </>
  );
};

export default SingleDetail;

// const TeamSocial = ({ url = "#", label = "", className = "" }) => {
//   return (
//     <Link to={url} title={label} target="_blank">
//         <span className={`left-icon ${className}`}></span>
//     </Link>
//   );
// };
