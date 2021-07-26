import useFetch from "../../../api/useFetch";
import LatestPodcast from "../../homepage/latestPodcast";
import SpecialPrograms from "../../homepage/specialPrograms";
import TodaysHighlights from "../../homepage/todaysHighlights";

const Sidebar1 = () => {
  const { data: today, isPending, error } = useFetch(
    "https://www.uniquefm.com.np/api/get-sidebar1-today-highlight-data"
  );
  const { data: special } = useFetch(
    "https://www.uniquefm.com.np/api/get-sidebar1-special-program-data"
  );
  const { data: latest } = useFetch(
    "https://www.uniquefm.com.np/api/get-sidebar1-latest-podcast-data"
  );

  return (
    <div>
      {isPending && <></>}
      {error && <div>{error}</div>}

      {today && (
        <div className="items samachar-box todays">
          <TodaysHighlights items={today} title="Today's Highlights" />
        </div>
      )}

      {special && (
        <div className="items samachar-box">
          <SpecialPrograms items={special} title="Special Programmes" />
        </div>
      )}

      {latest && (
        <div className="items samachar-box">
          <LatestPodcast items={latest} title="Latest Podcast" />
        </div>
      )}
    </div>
  );
};

export default Sidebar1;
