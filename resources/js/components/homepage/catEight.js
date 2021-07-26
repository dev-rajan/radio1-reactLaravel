import { Link } from "react-router-dom";
import React from "react";
import useFetch from "../../api/useFetch";

const CatEight = ({ title }) => {
  const { data: items } = useFetch(
    "https://www.uniquefm.com.np/api/get-latest-news-data"
  );
  return (
    <div className="samachar-box cat-news-list normal-list">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      <div className="row samachar-list">
        <div className="samachar-list more-list col-md-12">
          <div className="row cat-list-box big-feature side-section rochak-list">
            {items?.map((a, id) => (
              <NewsItem {...a} key={`news-item-${id}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatEight;

const NewsItem = ({ id, title }) => (
  <div className="item-list col-md-3">
    <Link to={`newsDetail/${id}`}>
        <figure>
          <img src="https://picsum.photos/1280/960/?random" alt={title} />
          <span className="main-title">{title}</span>
        </figure>
    </Link>
  </div>
);
