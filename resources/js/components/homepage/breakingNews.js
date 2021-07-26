import { Link } from "react-router-dom";
import React from "react";
import useFetch from "../../api/useFetch";

const BreakingNews = () => {

  const { data: items } = useFetch(
    "https://www.uniquefm.com.np/api/get-latest-news-data"
  );

  return (
    <div className="row">
      {items?.map((a, id) => (
        <BreakingBox {...a} key={`news-${id}`} />
      )).slice(0, 4)}
    </div>
  );
};

export default BreakingNews;

const BreakingBox = ({
  id,
  image_link,
  title,
  subtitle,
  authors,
  summary,
  categories,
  featured_video,
  className = "news-break",
}) => {
  return (
    <div className="breaking-box col-md-12">
      <div className={className}>
        <span
          className={`break-tags 
            ${typeof categories === "undefined" ? "d-none" : ""}
            `}
        >
          {categories.map((c) => c.name)}
        </span>
        <Link to={`/newsDetail/${id}`}>
            <span className="main-title">{title}</span>
            <span
              className={`sub-line
                    ${typeof subtitle === "undefined" ? "d-none" : ""}`}
            >
              {subtitle}
            </span>
            <span
              className={`author-name
                    ${typeof authors === "undefined" ? "d-none" : ""}`}
            >
              -{authors.map((c) => c.name)}
            </span>
            <iframe
              className={`
                    ${typeof featured_video === "undefined" ? "d-none" : ""}`}
              width="100%"
              height="463"
              src={featured_video}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            ></iframe>
            <img
              className={`
                    ${typeof image_link === "undefined" ? "d-none" : ""}`}
              src={image_link}
              alt={title}
            />
            <span
              className={`description
                    ${typeof summary === "undefined" ? "d-none" : ""}`}
            >
              {summary}
              <span className="more-news">विस्तृतमा</span>
            </span>
        </Link>
      </div>
    </div>
  );
};
