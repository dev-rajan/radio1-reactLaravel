import { Link } from "react-router-dom";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import useFetch from "../../api/useFetch";

const MukhyaSamachar = ({ title }) => {
  const { data: items } = useFetch(
    "https://www.uniquefm.com.np/api/get-latest-news-data"
  );

  const options = {
    rewind: true,
    loop: false,
    items: 1,
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
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <div className="samachar-box mukhya-samachar">
      <span className="cat-box">
        <span className="cat-tags">{title}</span>
      </span>

      <div className="row main-stories main-story-slider">
        <OwlCarousel className="owl-theme" {...options}>
          {items?.map((item, id) => (
            <MukhyaNews key={`mukhya-news-${id}`} {...item} />
          )).slice(0, 2)}
        </OwlCarousel>
        {items?.map((item, id) => (
          <MukhyaSubNews key={`mukhya-subNews-${id}`} {...item} />
        )).slice(0, 2)}
      </div>
    </div>
  );
};

export default MukhyaSamachar;

const MukhyaNews = ({ id, title }) => {
  return (
    <div className="items">
      <Link to={`/newsDetail/${id}`}>
          <figure>
            <img src="https://picsum.photos/1280/960/?random" alt="" />
            <span className="main-title">{title}</span>
          </figure>
      </Link>
    </div>
  );
};

const MukhyaSubNews = ({ id, title }) => {
  return (
    <div className="items more-item col-md-6">
      <Link to={`/newsDetail/${id}`}>
          <figure>
            <img src="https://picsum.photos/1280/960?random" alt="" />
            <span className="main-title">{title}</span>
          </figure>
      </Link>
    </div>
  );
};
