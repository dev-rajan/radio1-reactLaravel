import TopNav from "./topNav";
import Navigation from "./navigation";
import TrendingNews from "./trendingNews";
import { Link } from "react-router-dom";
import NavDate from "./date";
import Logo from "../../../assets/images/logo.png";
import { useEffect, useState } from "react";
// import AbortController from "abort-controller"

const Header = () => {
  const [ads, setAds] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const abortCont = new AbortController();

    fetch(
      "https://www.uniquefm.com.np/api/get-ad-and-top-nav-data"
      // , {signal: abortCont.signal,}
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setAds(data.advertisements.header);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch Aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    // return () => abortCont.abort();
  }, []);

  return (
    <>
      {isPending && <></>}
      {error && <div>{error}</div>}

      <header id="header" className="new-header">
        <div className="top-nav-box">
          <div className="container">
            <div className="row">
              <div className="top-left-menu col-md-8">
                <TopNav />
              </div>

              <NavDate />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="logo-box col-md-5">
              <Link to="/">
                  <figure>
                    <img src={Logo} alt="" />
                  </figure>
              </Link>
            </div>
            <div className="top-right-ads col-md-7">
              {ads &&
                ads.map((c) => (
                  <Link to="/#!" key={c.id} target={c.target} title={c.title}>
                      <img src={c.banner} alt={c.title} />
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <div className="main-menu">
          <div className="container">
            <div className="row header-main">
              <div className="col-md-12 navigation-box">
                <Navigation />
              </div>
            </div>
          </div>
        </div>

        <div className="trending-news">
          <div className="container">
            <TrendingNews />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
