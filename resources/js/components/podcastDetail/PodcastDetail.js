import React from "react";

const PodcastDetail = ({ title = "Podcasts" }) => {
  return (
    <>
      <section className="section content-editor video-player-box col-md-12">
        <div className="tag-box">
          <span className="tags">{title}</span>
          <ul className="breadcrumbs float-right">
            <li className="first">
                Home
            </li>
            <li>
              <a href="/#" title="Podcasts">
                Podcasts
              </a>
            </li>
            <li className="active">Bhanjyang Ka Suseli Haru</li>
          </ul>
        </div>
        <div className="title-names col-md-12">
          <span className="news-big-title">Bhanjyang Ka Suseli Haru</span>

          <div className="row share-items">
            <div className="total-comments col-md-4">
              <span className="left-icon fa fa-calendar"></span>
              <span className="author-title">मङ्गलबार, पुष २५, २०७४</span>
            </div>
            <div className="share-box col-md-8">
              <div className="share-now sharethis-inline-share-buttons"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="row latest-album">
        <div className="video-detail col-md-12">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/ASmiyZQmBOQ?&autoplay=true"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
      </div>
    </>
  );
};

export default PodcastDetail;
