import useFetch from "../../../api/useFetch";
import { Link } from "react-router-dom";

const TrendingNews = ({ title = "Trending" }) => {
  const {
    data: trending,
    error,
    isPending,
  } = useFetch("https://www.uniquefm.com.np/api/get-trending-data");

  return (
    <ul className="trending-news">
      {isPending && <></>}
      {error && <div>{error}</div>}
      <li className="trending-title">
        <span className="trend-title">{title}</span>
      </li>
      <TrendingMenu url="/" label={`# ${trending && trending["1"]}`} />
      <TrendingMenu url="/" label={trending && trending["2"]} />
      <TrendingMenu url="/" label={trending && trending["3"]} />
      <TrendingMenu url="/" label={trending && trending["4"]} />
      <TrendingMenu url="/" label={trending && trending["5"]} />
      <TrendingMenu url="/" label={trending && trending["6"]} />
      <TrendingMenu url="/" label={trending && trending["7"]} />
      <TrendingMenu url="/" label={trending && trending["8"]} />
      <TrendingMenu url="/" label={trending && trending["9"]} />
      <TrendingMenu url="/" label={trending && trending["10"]} />
    </ul>
  );
};

export default TrendingNews;

const TrendingMenu = ({ url = "/", label = "" }) => {
  return (
    <li>
      <Link to={url}>
        {label}
      </Link>
    </li>
  );
};
