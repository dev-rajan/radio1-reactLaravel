import React from "react";
import SpecialProgs from "./SpecialProgs";

const SpecialProgramPage = () => {
  return (
    <div className="container">
      <div className="row">
        <aside className="left-side col-sm-8 col-md-12">
          <section className="section content-editor col-md-12">
            <div className="title-names special-title col-md-12">
              <span className="news-big-title">
                Special Programmes
                <div className="share-box">
                  <div className="share-now sharethis-inline-share-buttons"></div>
                </div>
              </span>
            </div>
          </section>

          <section className="section special-news special-programmes">
            <SpecialProgs />
          </section>
        </aside>
      </div>
    </div>
  );
};

export default SpecialProgramPage;
