import { Link } from "react-router-dom";
import React from "react";
import useFetch from "../../api/useFetch";

const CatTwo = ({ title, title1 }) => {
  const { data: items } = useFetch(
    "https://www.uniquefm.com.np/api/get-latest-news-data"
  );
  return (
    <div className="samachar-box cat-news-list">
      <div className="row samachar-list">
        <div className="cat-list-box big-feature half-section col-md-6">
          <span className="cat-box">
            <span className="cat-tags">{title}</span>
          </span>

          <div className="item-list">
            {items
              ?.map((a, id) => <ItemList {...a} key={`item-${id}`} />)
              .slice(0, 1)}
          </div>

          <div className="side-list">
            {items
              ?.map((a, id) => <SideList {...a} key={`side-item-${id}`} />)
              .slice(0, 3)}
          </div>
        </div>

        <div className="cat-list-box big-feature half-section col-md-6">
          <span className="cat-box">
            <span className="cat-tags">{title1}</span>
          </span>

          <div className="item-list">
            {items
              ?.map((a, id) => <ItemList {...a} key={`item-${id}`} />)
              .slice(0, 1)}
          </div>

          <div className="side-list">
            {items
              ?.map((a, id) => <SideList {...a} key={`side-item-${id}`} />)
              .slice(0, 3)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatTwo;

const ItemList = ({ id, title }) => (
  <Link to={`newsDetail/${id}`}>
      <figure>
        <img src="https://picsum.photos/1280/960/?random" alt={title} />
        <span className="main-title">{title}</span>
      </figure>
  </Link>
);

const SideList = ({ id, title }) => (
  <div className="media">
    <Link to={`newsDetail/${id}`}>
        <figure className="mr-3">
          <img src="https://picsum.photos/150/150" alt={title} />
        </figure>
        <span className="media-body">
          <span className="main-title">{title}</span>
        </span>
    </Link>
  </div>
);
