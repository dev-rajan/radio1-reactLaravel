import Header from "../header";
import Footer from "../footer/Footer";
import TopNav from "../header/topNav";
import Navigation from "../header/navigation";
import { useEffect } from "react";
import Logo from "../../../assets/favicons/favicon.png";
import jQuery from "jquery";

const Layout = ({
  children,
  topTitle = "Top Navigation",
  mainTitle = "Main Navigation",
}) => {
  useEffect(() => {
    jQuery(document).ready(function ($) {
      //open/close primary navigation
      $("#mm-menu-toggle").on("click", function () {
        $(".my-menu").toggleClass("active");
        $(".mm-menu").toggleClass("active");
        $(".mm-menu-mask").toggleClass("active");
        $(".wrapper").toggleClass("mm-menu-open");
      });
    });
  }, []);

  const handleClick = () => {
    jQuery(".modalbox").fadeOut("fast");
  };

  return (
    <>
      <div className="modalbox" style={{ display: "none !important" }}>
        <div className="modal_content">
          <div className="imagebox">
            <div className="logobox">
              <img src={Logo} alt="Logo" />
            </div>

            <a href="/#!" title="Logo">
              <img src="https://picsum.photos/903/574?random" alt="" />
            </a>
            <div className="close-box">
              <a
                className="close_btn"
                href="/#!"
                onClick={handleClick}
                title="Skip This"
              >
                Skip This <span className="arrows lnr lnr-arrow-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <button id="mm-menu-toggle" className="mm-menu-toggle my-menu">
        <span className="menu-icon bar-menu lnr lnr-menu"></span>
        <span className="menu-icon back-menu lnr lnr-arrow-left"></span>
      </button>
      <nav id="mm-menu" className="mm-menu">
        <span className="nav-title">{topTitle}</span>
        <TopNav />
        <span className="nav-title">{mainTitle}</span>
        <Navigation />
      </nav>
      <div id="wrapper" className="wrapper">
        <Header />
        {children}
        <Footer />
      </div>
      <div className="mm-menu-mask"></div>
    </>
  );
};

export default Layout;
