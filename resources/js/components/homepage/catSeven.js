import { Link } from "react-router-dom";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import useFetch from "../../api/useFetch";

const CatSeven = ({ title }) => {
  const { data: items } = useFetch(
    "https://www.uniquefm.com.np/api/get-latest-news-data"
  );
  const options = {
    rewind: true,
    loop: false,
    items: 3,
    responsiveRefreshRate: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    autoplaySpeed: 2000,
    responsiveClass: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className="samachar-box cat-news-list videos-list photo-list">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      <div className="row samachar-list album-slider">
        <OwlCarousel className="owl-theme" {...options}>
          {items?.map((a, id) => (
            <PhotoList {...a} key={`photo-item-${id}`} />
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default CatSeven;

const PhotoList = ({ id, title }) => (
  <div className="cat-list-box big-feature col-md-4">
    <div className="item-list">
      <Link to={`newsDetail/${id}`}>
          <figure>
            <img src="https://picsum.photos/1280/960/?random" alt={title} />
            <span className="main-title">{title}</span>
          </figure>
      </Link>
    </div>
  </div>
);
