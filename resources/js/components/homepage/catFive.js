import { Link } from "react-router-dom";
import React from "react";
import useFetch from "../../api/useFetch";

const CatFive = ({ title }) => {
  const { data: items } = useFetch(
    "https://www.uniquefm.com.np/api/get-latest-news-data"
  );
  return (
    <div className="samachar-box cat-news-list normal-list">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      <div className="row samachar-list">
        <div className="cat-list-box big-feature col-md-6">
          {items
            ?.map((a, id) => <LeftItem {...a} key={`list-item-${id}`} />)
            .slice(0, 1)}
        </div>

        <div className="samachar-list more-list col-md-6">
          <div className="row cat-list-box big-feature side-section ">
            {items
              ?.map((a, id) => <RightItem {...a} key={`list-item-${id}`} />)
              .slice(0, 4)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatFive;

const LeftItem = ({ id, title }) => (
  <div className="item-list">
    <Link to={`newsDetail/${id}`}>
        <figure>
          <img src="https://picsum.photos/1280/960/?random" alt={title} />
          <span className="main-title">{title}</span>
        </figure>
    </Link>
  </div>
);

const RightItem = ({ id, title }) => (
  <div className="item-list col-md-6">
    <Link to={`newsDetail/${id}`}>
        <figure>
          <img src="https://picsum.photos/1280/960" alt={title} />
          <span className="main-title">{title}</span>
        </figure>
    </Link>
  </div>
);
