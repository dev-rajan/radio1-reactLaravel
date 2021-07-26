import { Link } from "react-router-dom";
import React from "react";
import useFetch from "../../api/useFetch";

const RadioPresentors = ({ title }) => {
  const { data: items } = useFetch(
    "https://www.uniquefm.com.np/api/get-sidebar1-radio-presenter-data"
  );

  return (
    <>
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>
      {items?.map((a, id) => (
        <PresentorsList {...a} key={`presenter-num-${id}`} />
      ))}
    </>
  );
};

export default RadioPresentors;

const PresentorsList = ({ name, image_link, id }) => {
  return (
    <div className="item-news media">
      <Link to={`/teamDetail/${id}`}>
          <figure className="mr-3">
            <img src={image_link} alt={name} />
          </figure>
          <span className="media-body">
            <span className="main-title">{name}</span>
            <span className="start-time">Yo Maya Bhanne Chij Yastai Ho</span>
          </span>
      </Link>
    </div>
  );
};
