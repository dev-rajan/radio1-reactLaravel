import { Link } from "react-router-dom";

import React from "react";

const MostRead = () => {
  return (
    <>
      <span className="cat-box">
        <span className="cat-tags">लोकप्रीय समाचार</span>
      </span>

      <div className="bishesh sifaris-list">
        <div className="items">
          <Link to="/#!">
              <figure>
                <img
                  src="https://setopati.com/wp-content/uploads/2018/02/Oppo.png"
                  alt=""
                />
              </figure>

              <span className="main-title">
                ओप्पोद्वारा ‘पर्फेक्ट कम्पानियन कन्टेस्ट’का विजेतालाई पुरस्कार
                हस्तान्तरण
              </span>
          </Link>
        </div>
        <div className="items normal-list">
          <Link to="/#!">
              <figure>
                <span className="tags">राजनीति</span>
              </figure>

              <span className="main-title">
                रोनाल्डो बिना पनि रियलको प्रभावशाली जित
              </span>
          </Link>
        </div>
        <div className="items normal-list">
          <Link to="/#!">
              <figure>
                <span className="tags">फुटबल</span>
              </figure>

              <span className="main-title">
                कांग्रेसबाट अनुराधा कोइरालासहित पाँच प्रदेश प्रमुख, २ र ५ मा
                मधेसीवादी दलले सिफारिश गर्ने
              </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MostRead;
