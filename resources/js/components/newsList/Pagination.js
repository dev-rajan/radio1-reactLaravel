import React from "react";

const Pagination = ({ content }) => {
  return (
    <div className="pagination">
      <span className="current">{content.posts.current_page}</span>
      <a className="page larger" href="/#">
        2
      </a>
      <a className="page larger" href="/#">
        3
      </a>
      <a className="page larger" href="/#">
        4
      </a>
      <span>...</span>
      <a className="nextpostslink" rel="next" href="/#">
        {content.posts.to}
      </a>
    </div>
  );
};

export default Pagination;
