import { Link } from "react-router-dom";
import React from "react";
import useFetch from "../../api/useFetch";

const PopularNews = ({ title }) => {
  const { data: items } = useFetch(
    "https://www.uniquefm.com.np/api/get-sidebar1-popular-news-data"
  );

  return (
    <>
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      {items?.map((a, id) => (
        <Popular {...a} key={`popular-item-${id}`} />
      ))}
    </>
  );
};

export default PopularNews;

const Popular = ({ id, title }) => (
  <div className="item-news media">
    <Link to={`/videoDetail/${id}`}>
        <figure className="mr-3">
          <img src="https://picsum.photos/150/150?random" alt={title} />
        </figure>
        <span className="media-body">
          <span className="main-title">{title}</span>
        </span>
    </Link>
  </div>
);
