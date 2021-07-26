import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";

const LatestNews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [activePage, setActivePage] = useState(null);

  useEffect(() => {
    const asyncFetchContent = async () => {
      const contentItem = await fetch(
        `https://www.uniquefm.com.np/api/get-news-list?page=1&per_page=30&catSlug=local-news`
      );
      const contentData = await contentItem.json();
      const CurrentContent = contentData;
      setContent(CurrentContent);
      setIsLoading(false);
    };
    asyncFetchContent();
  }, []);

  const handlePageChange = () => {
    console.log(`active page is ${content?.posts?.current_page}`);
    setActivePage(content?.posts?.current_page);
  };

  return (
    <>
      {!isLoading && (
        <>
          <h2 className="font-weight-bold mb-2">{content?.category?.name}</h2>
          <div className="row bishesh news-cat-list">
            {content?.posts?.data?.map((i) => (
              <div className="items col-md-4" key={i.id}>
                <Link to={`/newsDetail/${i.id}`}>
                  <figure>
                    <img src={i.image_link} alt={i.title} />
                  </figure>

                  <span className="main-title">{i.title}</span>
                  <span className="comments-line">
                    <span className="left-icon fa fa-comments"></span>240
                    Comments
                  </span>
                </Link>
              </div>
            ))}

            <Pagination
              activePage={activePage}
              itemsCountPerPage={6}
              totalItemsCount={content?.posts?.total}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </div>
        </>
      )}
    </>
  );
};

export default LatestNews;
