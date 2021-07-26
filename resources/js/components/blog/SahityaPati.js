import React from "react";
import { Link } from "react-router-dom";

const SahityaPati = () => {
  return (
    <>
      <h1>साहित्यपाटी</h1>
      <div className="media bichar-item">
        <Link to="/bichar-detail">
            <figure>
              <img
                src="https://setopati.com/wp-content/uploads/2017/07/bidhya-110x110.png"
                className="author rounded-circle"
                alt=""
              />
            </figure>
            <span className="main-title">आँखा सामुन्ने एउटा साँझ</span>
            <span className="author-name">निर्भीकजङ्ग रायमाझी</span>
        </Link>
      </div>

      <div className="media bichar-item">
        <Link to="/bichar-detail">
            <figure>
              <img
                src="https://setopati.com/wp-content/uploads/2017/11/jeewan-subedi-110x110.jpg"
                className="author rounded-circle"
                alt=""
              />
            </figure>
            <span className="main-title">संक्रमण</span>
            <span className="author-name">जीवन सुवेदी</span>
        </Link>
      </div>

      <div className="media bichar-item">
        <Link to="/bichar-detail">
            <figure>
              <img
                src="https://setopati.com/wp-content/uploads/2017/06/sarada_dahal-110x110.jpg"
                className="author rounded-circle"
                alt=""
              />
            </figure>
            <span className="main-title">चियावाली</span>
            <span className="author-name">सारदा दाहाल</span>
        </Link>
      </div>

      <div className="media ad-item">
        <Link to="/bichar-detail">
            <img
              src="https://setopati.com/wp-content/uploads/2018/02/244x150_PPTMT.gif"
              alt=""
            />
        </Link>
      </div>
    </>
  );
};

export default SahityaPati;

const BicharItem = () => {
  return (
    <div className="media bichar-item">
      <Link to="/bichar-detail">
          <figure>
            <img
              src="https://setopati.com/wp-content/uploads/2017/07/bidhya-110x110.png"
              className="author rounded-circle"
              alt=""
            />
          </figure>
          <span className="main-title">आँखा सामुन्ने एउटा साँझ</span>
          <span className="author-name">निर्भीकजङ्ग रायमाझी</span>
      </Link>
    </div>
  );
};
