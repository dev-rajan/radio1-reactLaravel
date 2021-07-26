import Ad280 from "../../components/common/ads/ad-280x480";
import LatestPodcast from "../../components/homepage/latestPodcast";
import React, { useEffect, useState } from "react";
import ProgrammeDetails from "./ProgrammeDetails";
import { useParams } from "react-router";

const ProgramDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);

  useEffect(() => {
    const asyncFetchContent = async () => {
      const contentItem = await fetch(
        `https://www.uniquefm.com.np/api/get-program-detail/${id}`
      );
      const contentData = await contentItem.json();
      const CurrentContent = contentData;
      setContent(CurrentContent);
      setIsLoading(false);
    };
    asyncFetchContent();
  }, [id]);

  return (
    <>
      {!isLoading && (
        <div className="container">
          <div className="row">
            <section className="section content-editor full-content col-md-12">
              <div className="title-names special-title col-md-12">
                <span className="news-big-title">
                  {content.program.name}
                  <div className="share-box">
                    <div className="share-now sharethis-inline-share-buttons"></div>
                  </div>
                </span>
              </div>
            </section>
            <aside className="left-side col-sm-8 col-md-9">
              <section className="section special-news special-programmes">
                <ProgrammeDetails content={content} />
              </section>
            </aside>

            <div className="right-side col-sm-4 col-md-3">
              <div className="items samachar-box">
                <LatestPodcast />
              </div>

              <div className="items adbox">
                <Ad280 />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgramDetail;
