import React from "react";
import { Link } from "react-router-dom";
import Feedback from "./Feedback";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <section className="section content-editor full-content col-md-12">
          <div className="title-names special-title col-md-12">
            <span className="news-big-title">
              Contact
              <div className="share-box">
                <div className="share-now sharethis-inline-share-buttons"></div>
              </div>
            </span>
          </div>
        </section>

        <aside className="left-side col-sm-8 col-md-9">
          <section className="section special-news special-programmes google-maps">
            <iframe
            title='image'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9318468625843!2d85.33935231550956!3d27.688501232925613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1991388fadf1%3A0xb9466756a12f03b0!2sSoftNEP+Pvt.+Ltd.!5e0!3m2!1sen!2snp!4v1521463090270"
              style={{
                border: "0",
                width: "600px",
                height: "450px",
                frameborder: "0",
              }}
              allowfullscreen
            ></iframe>
            <Link
              to="javascript:void(0)"
              className="address-btn floating"
              title="View Contact Address"
            >
              Contact Address
              <span className="left-icon lnr lnr-arrow-down"></span>
            </Link>
          </section>
        </aside>

        <div className="right-side col-sm-4 col-md-3">
          <div className="items samachar-box">
            <Feedback />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
