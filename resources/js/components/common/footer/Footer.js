import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import LivePlayer from "../livePlayer";
import $ from "jquery";
import jQuery from "jquery";

const Footer = ({
  ContactTitle = "Contact Us",
  MostReadTitle = "Most Read",
  PhotoGalleryTitle = "Photo Gallery",
  FindUsTitle = "Find us on Facebook",
}) => {
  useEffect(() => {
    jQuery(".scrollToTop").click(function (e) {
      jQuery("html,body").animate(
        {
          scrollTop: 0,
        },
        "slow"
      );
      e.preventDefault();
      return false;
    });

    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 500) {
        $(".upToScroll").addClass("buttonShow");
      } else {
        $(".upToScroll").removeClass("buttonShow");
      }
    });
  }, []);
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div
              id="contact-box"
              className="samachar-box items col-sm-6 col-md-3"
            >
              <span className="cat-box">
                <span className="cat-tags">{ContactTitle}</span>
              </span>

              <span className="item-box">
                <h1 className="title-main">SoftNEP Radio 1 Pvt. Ltd.</h1>

                <span className="description">
                  Minbhawan, Kathmandu, Nepal
                  <br />
                  Email: info&#64;softnep.com
                  <br />
                  URL: www.softnep.com
                </span>
              </span>

              <span className="item-box">
                <h1 className="title-main">Phone</h1>

                <span className="description">
                  Marketing: +977-1-411 59 34
                  <br />
                  Advertisement: +977-1-411 59 34
                  <br />
                </span>
              </span>

              <span className="item-box">
                <h1 className="title-main">Email</h1>

                <span className="description">
                  Marketing: marketing @softnepradio.com
                  <br />
                  Advertisement: ad-tarrif@softnepradio.com
                  <br />
                  Feedback: suggestion@softnepradio.com
                  <br />
                </span>
              </span>

              <span className="social-box media">
                <SocialIcon
                  url="#!"
                  title="Facebook"
                  className="fa fa-facebook"
                />
                <SocialIcon
                  url="/#!"
                  title="Twitter"
                  className="fa fa-twitter"
                />
                <SocialIcon
                  url="/#!"
                  title="Youtube"
                  className="fa fa-youtube"
                />
                <SocialIcon
                  url="/#!"
                  title="Android"
                  className="fa fa-android"
                />
                <SocialIcon url="/#!" title="Apple" className="fa fa-apple" />
              </span>
            </div>

            <div className="samachar-box items col-sm-6 col-md-3">
              <span className="cat-box">
                <span className="cat-tags">{MostReadTitle}</span>
              </span>

              <div className="box-item">
                <FooterMostRead
                  url="/newsDetail"
                  tag="राजनीति"
                  title="छ प्रदेशमा राष्ट्रिय सभा सदस्यको चुनाव जारी"
                />
              </div>
              <div className="box-item">
                <FooterMostRead
                  url="/newsDetail"
                  tag="घुमफिर"
                  title="महान्यायाधीवक्ता नियुक्त खरेलले दिए एमाले पोलिटब्यूरोबाट
                राजीनामा"
                />
              </div>
              <div className="box-item">
                <FooterMostRead
                  url="/newsDetail"
                  tag="खेलकुद"
                  title="सम्बन्ध विच्छेद गरेका श्रीमान् , छोरीको शव दाबी गर्न आएपछि"
                />
              </div>

              <div className="box-item">
                <FooterMostRead
                  url="/newsDetail"
                  tag="समाज"
                  title="पदमुक्त भएको खबरपछि कानूनको किताब बोकेर पैदलै प्रधानमन्त्री
                निवास पुगे पराजुली"
                />
              </div>
            </div>

            <div className="samachar-box items col-sm-6 col-md-3">
              <span className="cat-box">
                <span className="cat-tags">{PhotoGalleryTitle}</span>
              </span>
              <div className="items media">
                <FooterPhotoGallery
                  url="/newsDetail"
                  title="नेपाल, हङहङ र पिएनजीमध्ये एकले यसरी पाउनेछन् एकदिवसीय
                      मान्यता"
                  img="https://picsum.photos/150/150?random"
                  date="Mar 23, 2018"
                />
              </div>

              <div className="items media">
                <FooterPhotoGallery
                  url="/newsDetail"
                  title="नेपाल, हङहङ र पिएनजीमध्ये एकले यसरी पाउनेछन् एकदिवसीय
                      मान्यता"
                  img="https://picsum.photos/150/150?random"
                  date="Feb 12, 2018"
                />
              </div>

              <div className="items media">
                <FooterPhotoGallery
                  url="/newsDetail"
                  title="नेपाल, हङहङ र पिएनजीमध्ये एकले यसरी पाउनेछन् एकदिवसीय
                      मान्यता"
                  img="https://picsum.photos/150/150?random"
                  date="Jan 18, 2018"
                />
              </div>
            </div>

            <div className="samachar-box items col-sm-6 col-md-3">
              <span className="cat-box">
                <span className="cat-tags">{FindUsTitle}</span>
              </span>

              <div className="row">
                <div className="items col-md-12">
                  <div
                    className="fb-page"
                    data-href="https://www.facebook.com/softnep"
                    data-tabs="timeline"
                    data-height="480"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                  >
                    <blockquote
                      cite="https://www.facebook.com/softnep"
                      className="fb-xfbml-parse-ignore"
                    >
                      <Link to="https://www.facebook.com/softnep">SoftNEP</Link>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-line">
          <div className="container">
            <span className="row copyright">
              <span className="company-info col-md-6">
                &copy; SoftNEP Radio Pvt. Ltd.
              </span>
              <span className="designby col-md-6">
                Powered by:
                <Link to="/#!">RaraCMS</Link>
              </span>
            </span>
          </div>
        </div>
      </footer>

      <LivePlayer />
      <div className="upToScroll">
        <a href="/#" className="scrollToTop">
          <i className="lnr lnr-chevron-up"></i>
        </a>
      </div>
    </>
  );
};

const SocialIcon = ({ url = "", title = "", className = " " }) => {
  return (
    <Link to={url}>
      <span className={`social-icon ${className}`}></span>
    </Link>
  );
};

const FooterMostRead = ({ url = "", tag = "", title = "" }) => {
  return (
    <Link to={url}>
      <span className="tags">{tag}</span>

      <span className="main-title">{title}</span>
    </Link>
  );
};

const FooterPhotoGallery = ({ url = "", title = "", img = "", date = "" }) => {
  return (
    <Link to={url}>
      <figure className="mr-3">
        <img src={img} alt={title} />
      </figure>
      <span className="media-body">
        <span className="main-title">{title}</span>
        <span className="description">{date}</span>
      </span>
    </Link>
  );
};

export default Footer;
