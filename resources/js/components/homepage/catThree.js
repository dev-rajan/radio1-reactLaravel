import { Link } from "react-router-dom";
import React from "react";
import useFetch from "../../api/useFetch";

const CatThree = ({ title }) => {
  const { data: items } = useFetch(
    "https://www.uniquefm.com.np/api/get-latest-news-data"
  );
  return (
    <div className="samachar-box cat-news-list">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>
      <div className="row samachar-list pradesh-list">
        {items?.map((a, id) => (
          <NewsItem {...a} key={`news-item-${id}`} />
        )).slice(0, 6)}
      </div>
    </div>
  );
};

export default CatThree;

const NewsItem = ({ id, title }) => (
  <div className="news-item col-md-4">
    <Link to={`newsDetail/${id}`}>
        <figure className="mr-3">
          <img src="https://picsum.photos/1280/960/?random" alt={title} />
        </figure>
        <span className="main-title">{title}</span>
    </Link>
  </div>
);
