import { Link } from "react-router-dom";
import React from "react";
import useFetch from "../../api/useFetch";

const CatSix = ({ title }) => {
  const { data: items } = useFetch(
    "https://www.uniquefm.com.np/api/get-latest-news-data"
  );
  return (
    <div className="samachar-box cat-news-list videos-list">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      <div className="row samachar-list">
        {items?.map((a, id) => (
          <ItemList {...a} key={`item-list-${id}`} />
        )).slice(0, 4)}
      </div>
    </div>
  );
};

export default CatSix;

const ItemList = ({ id, title }) => (
  <div className="cat-list-box big-feature col-md-6">
    <div className="item-list">
      <Link to={`newsDetail/${id}`}>
          <figure>
            <img src="https://picsum.photos/1280/960/?random" alt="" />
            <span className="video-play fa fa-youtube-play"></span>
            <span className="main-title">{title}</span>
          </figure>
      </Link>
    </div>
  </div>
);
