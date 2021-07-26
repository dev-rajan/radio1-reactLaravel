import useFetch from "../../../api/useFetch";
import CountDown from "../../homepage/countDown";
import LatestPodcast from "../../homepage/latestPodcast";
import MostRead from "../../homepage/mostRead";
import PopularNews from "../../homepage/popularNews";
import RadioPresentors from "../../homepage/radioPresentors";
import SpecialPrograms from "../../homepage/specialPrograms";
import TodaysHighlights from "../../homepage/todaysHighlights";
import Ad280 from "../ads/ad-280x480";

const Sidebar = () => {
  const { data: popular, error, isPending } = useFetch(
    "https://www.uniquefm.com.np/api/get-sidebar1-popular-news-data"
  );
  const { data: today} = useFetch(
    "https://www.uniquefm.com.np/api/get-sidebar1-today-highlight-data"
  );
  const { data: special} = useFetch(
    "https://www.uniquefm.com.np/api/get-sidebar1-special-program-data"
  );
  const { data: latest} = useFetch(
    "https://www.uniquefm.com.np/api/get-sidebar1-latest-podcast-data"
  );
  const { data: presenter} = useFetch(
    "https://www.uniquefm.com.np/api/get-sidebar1-radio-presenter-data"
  );

  return (
    <div>
      {isPending && <></>}
      {error && <div>{error}</div>}
      {popular && (
        <div className="items samachar-box">
          <PopularNews items={popular} title="Popular News" />
        </div>
      )}
      <div className="items adbox">
        <Ad280 />
      </div>

      {today && (
        <div className="items samachar-box todays">
          <TodaysHighlights items={today} title="Today's Highlights" />
        </div>
      )}
      <div className="items adbox">
        <Ad280 />
      </div>

      {special && (
        <div className="items samachar-box">
          <SpecialPrograms items={special} title="Special Programmes" />
        </div>
      )}
      <div className="items adbox">
        <Ad280 />
      </div>

      {latest && (
        <div className="items samachar-box">
          <LatestPodcast items={latest} title="Latest Podcast" />
        </div>
      )}

      <div className="items adbox">
        <Ad280 />
      </div>

      <div className="items samachar-box countdown">
        <CountDown />
      </div>

      <div className="items adbox">
        <Ad280 />
      </div>

      {presenter && (
        <div className="items samachar-box rjs">
          <RadioPresentors items={presenter} title="Radio Presentors" />
        </div>
      )}
      <div className="items adbox">
        <Ad280 />
      </div>

      <div className="items samachar-box">
        <MostRead />
      </div>
    </div>
  );
};

export default Sidebar;
