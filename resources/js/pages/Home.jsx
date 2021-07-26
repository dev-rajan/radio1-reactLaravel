import BreakingNews from "../components/homepage/breakingNews";
// import Head from "next/head";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import staticTitles from "staticTitles";
import TajaSamachar from "../components/homepage/tajaSamachar";
import Ad600 from "../components/common/ads/ad-600x90";
import MukhyaSamachar from "../components/homepage/mukhyaSamachar";
import CatOne from "../components/homepage/catOne";
import CatTwo from "../components/homepage/catTwo";
import CatThree from "../components/homepage/catThree";
import CatFour from "../components/homepage/catFour";
import CatFive from "../components/homepage/catFive";
import CatSix from "../components/homepage/catSix";
import CatSeven from "../components/homepage/catSeven";
import CatEight from "../components/homepage/catEight";
import PopularNews from "../components/homepage/popularNews";
import TodaysHighlights from "../components/homepage/todaysHighlights";
import SpecialPrograms from "../components/homepage/specialPrograms";
import Ad280 from "../components/common/ads/ad-280x480";
import LatestPodcast from "../components/homepage/latestPodcast";
import CountDown from "../components/homepage/countDown";
import RadioPresentors from "../components/homepage/radioPresentors";
import MostRead from "../components/homepage/mostRead";

const Home = () => {
  return (
    <main>

      <div className="container">
        <section className="section breaking-news">
          <BreakingNews />
        </section>

        <section className="section taja-samachar-section">
          <TajaSamachar title="ताजा समाचार" />
        </section>

        <section className="section full-ad">
          <Ad600 />
        </section>

        <div className="row content-section">
          <aside className="left-side col-sm-8 col-md-9">
            <section className="section common-section photo-section">
              <MukhyaSamachar title="मुख्य समाचार" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatOne title="राजनीति" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatTwo title="अर्थ बाणिज्य" title1="खेलकुद" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatThree title="प्रदेश समाचार" />
            </section>
            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatFour title="मनोरञ्जन" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatFive title="विश्व" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatSix title="भिडियो ग्यालरी" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatSeven title="फोटो ग्यालरी" />
            </section>

            <section className="section full-ad">
              <Ad600 />
            </section>

            <section className="section common-section cat-section">
              <CatEight title="रोचक समाचार" />
            </section>
          </aside>

          <div className="right-side col-sm-4 col-md-3">
            <div className="items samachar-box">
              <PopularNews title="Popular News" />
            </div>
            <div className="items adbox">
              <Ad280 />
            </div>

            <div className="items samachar-box todays">
              <TodaysHighlights title="Today's Highlights" />
            </div>

            <div className="items adbox">
              <Ad280 />
            </div>

            <div className="items samachar-box">
              <SpecialPrograms title="Special Programmes" />
            </div>

            <div className="items adbox">
              <Ad280 />
            </div>

            <div className="items samachar-box">
              <LatestPodcast title="Latest Podcast" />
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
              <RadioPresentors title="Radio Presentors" />
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
    </main>
  );
};

export default Home;
