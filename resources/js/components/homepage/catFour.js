import { Link } from "react-router-dom";
import React from "react";
import useFetch from "../../api/useFetch";

const CatFour = ({ title }) => {
  const { data: items } = useFetch(
    "https://www.uniquefm.com.np/api/get-latest-news-data"
  );
  return (
    <div className="samachar-box cat-news-list manoranjan">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      <div className="row samachar-list">
        <div className="cat-list-box big-feature col-md-8">
          {items
            ?.map((a, id) => <BigItem {...a} key={`Big-item-${id}`} />)
            .slice(0, 1)}
        </div>

        <div className="cat-list-box big-feature side-section col-md-4">
          {items
            ?.map((a, id) => <SideItem {...a} key={`Big-item-${id}`} />)
            .slice(0, 2)}
        </div>
      </div>
    </div>
  );
};

export default CatFour;

const BigItem = ({ id, title }) => (
  <div className="item-list">
    <Link to={`newsDetail/${id}`}>
        <figure>
          <img src="https://picsum.photos/1280/960/?random" alt={title} />
          <span className="main-title">{title}</span>
        </figure>
    </Link>
  </div>
);

const SideItem = ({ id, title }) => (
  <div className="item-list">
    <Link to={`newsDetail/${id}`}>
        <figure>
          <img src="https://picsum.photos/150/150" alt={title} />
          <span className="main-title">{title}</span>
        </figure>
    </Link>
  </div>
);
