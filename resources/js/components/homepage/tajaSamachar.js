import { Link } from "react-router-dom";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import useFetch from "../../api/useFetch";

const TajaSamachar = ({ title }) => {
  const { data: items } = useFetch(
    "https://www.uniquefm.com.np/api/get-latest-news-data"
  );

  const options = {
    rewind: true,
    loop: false,
    items: 4,
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
        items: 5,
      },
    },
  };
  return (
    <div className="samachar-box taja-samachar">
      <span className="cat-tags">{title}</span>

      <div className="row boundary taja-box">
        <OwlCarousel className="owl-theme" {...options}>
          {items?.map((item, id) => (
            <TajaNews key={`taja-news-${id}`} {...item} />
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default TajaSamachar;

const TajaNews = ({ id, categories, title }) => {
  return (
    <div className="items">
      <Link to={`/newsDetail/${id}`}>
          <span className="tags">{categories.map((c) => c.name)}</span>
          <span className="main-title">{title}</span>
      </Link>
    </div>
  );
};
