import Ad280 from "../../components/common/ads/ad-280x480";
import Ad600 from "../../components/common/ads/ad-600x90";
import React from "react";
import BreakingNews from "./breakingNews";
import CatEight from "./catEight";
import CatFive from "./catFive";
import CatFour from "./catFour";
import CatOne from "./catOne";
import CatSeven from "./catSeven";
import CatSix from "./catSix";
import CatThree from "./catThree";
import CatTwo from "./catTwo";
import LatestPodcast from "./latestPodcast";
import MukhyaSamachar from "./mukhyaSamachar";
import PopularNews from "./popularNews";
import SpecialPrograms from "./specialPrograms";
import TajaSamachar from "./tajaSamachar";
import TodaysHighlights from "./todaysHighlights";
import CountDown from "./countDown";
import RadioPresentors from "./radioPresentors";
import MostRead from "./mostRead";

const HomePage = () => {
  return (
    <div className="container">
      <section className="section breaking-news">
        <BreakingNews />
      </section>

      <section className="section taja-samachar-section">
        <TajaSamachar />
      </section>

      <section className="section full-ad">
        <Ad600 />
      </section>

      <div className="row content-section">
        <aside className="left-side col-sm-8 col-md-9">
          <section className="section common-section photo-section">
            <MukhyaSamachar />
          </section>

          <section className="section full-ad">
            <Ad600 />
          </section>

          <section className="section common-section cat-section">
            <CatOne />
          </section>

          <section className="section full-ad">
            <Ad600 />
          </section>

          <section className="section common-section cat-section">
            <CatTwo />
          </section>

          <section className="section full-ad">
            <Ad600 />
          </section>

          <section className="section common-section cat-section">
            <CatThree />
          </section>
          <section className="section full-ad">
            <Ad600 />
          </section>

          <section className="section common-section cat-section">
            <CatFour />
          </section>

          <section className="section full-ad">
            <Ad600 />
          </section>

          <section className="section common-section cat-section">
            <CatFive />
          </section>

          <section className="section full-ad">
            <Ad600 />
          </section>

          <section className="section common-section cat-section">
            <CatSix />
          </section>

          <section className="section full-ad">
            <Ad600 />
          </section>

          <section className="section common-section cat-section">
            <CatSeven />
          </section>

          <section className="section full-ad">
            <Ad600 />
          </section>

          <section className="section common-section cat-section">
            <CatEight />
          </section>
        </aside>

        <div className="right-side col-sm-4 col-md-3">
          <div className="items samachar-box">
            <PopularNews />
          </div>
          <div className="items adbox">
            <Ad280 />
          </div>

          <div className="items samachar-box todays">
            <TodaysHighlights />
          </div>

          <div className="items adbox">
            <Ad280 />
          </div>

          <div className="items samachar-box">
            <SpecialPrograms />
          </div>

          <div className="items adbox">
            <Ad280 />
          </div>

          <div className="items samachar-box">
            <LatestPodcast />
          </div>

          <div className="items adbox">
            <Ad280 />
          </div>

          <div className="items samachar-box countdown">
            <CountDown />
          </div>

          <div className="items adbox">
            <Ad280 />
          </div>

          <div className="items samachar-box rjs">
            <RadioPresentors />
          </div>

          <div className="items adbox">
            <Ad280 />
          </div>

          <div className="items samachar-box">
            <MostRead />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
