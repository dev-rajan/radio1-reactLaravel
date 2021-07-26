import React from "react";
import LatestNews from "../../components/newsList/LatestNews";
import Sidebar from "../../components/common/sidebar/Sidebar";
// import AbortController from "abort-controller"

// const abortC = new AbortController();

const SearchList = ({ SearchItem, title }) => {
  return (
    <div className="container">
      <div className="row">
        <aside className="left-side col-sm-8 col-md-9">
          <h2>Search Results for : {title}</h2>
          <section className="section special-news cat-list">
            {SearchItem && <LatestNews content={SearchItem} />}
          </section>
        </aside>

        <div className="right-side col-sm-4 col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  try {
    const SingleNews = await fetch(
      `https://www.uniquefm.com.np/api/get-search-list`
      // ,{ signal: abortC.signal }
    );
    const NewsListData = await SingleNews.json();

    return {
      props: {
        SearchItem: NewsListData,
      },
    };
  } catch (error) {
    console.warn(error);
  }
};

export default SearchList;
