import { Link } from "react-router-dom";

import React from "react";

const LatestPodcast = ({ title }) => {

  return (
    <>
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>
      {<PodcastItems />}
    </>
  );
};

export default LatestPodcast;

const PodcastItems = ({ id, catTitle }) => {
  return (
    <div className="item-news media">
      <Link to={`/podcastDetail/${id}`}>
          <figure className="mr-3">
            <img src="https://picsum.photos/150/150?random" alt="Temporary" />
          </figure>
          <span className="media-body">
            <span className="main-title">"Temporary"</span>
            <span className="start-time"> Mar 20, 2018</span>
          </span>
      </Link>
    </div>
  );
};
