import React from "react";
import { Link } from "react-router-dom";

const BicharList = () => {
  return (
    <>
      <h1>विचार</h1>
      <div className="media bichar-item">
        <Link to="/blogDetail">
            <figure>
              <img
                src="https://setopati.com/wp-content/uploads/2017/11/IMG_8434-110x110.jpg"
                className="author rounded-circle"
                alt=""
              />
              <img
                src="https://setopati.com/wp-content/uploads/2017/06/sarada_dahal-110x110.jpg"
                className="author author-two rounded-circle"
                alt=""
              />
            </figure>
            <span className="main-title">
              गलत डिजाइनमा बनेको आठ लेनको रिङरोड
            </span>
            <span className="author-name">
              केशव शर्मा र कल्पना अधिकारी सुवेदी
            </span>
        </Link>
      </div>

      <div className="media ad-item">
        <Link to="/blogDetail">
            <img
              src="https://setopati.com/wp-content/uploads/2017/12/setopati-250x235-2.gif"
              alt=""
            />
        </Link>
      </div>

      <div className="media bichar-item">
        <Link to="/blogDetail">
            <figure>
              <img
                src="https://setopati.com/wp-content/uploads/2017/06/sarada_dahal-110x110.jpg"
                className="author rounded-circle"
                alt=""
              />
            </figure>
            <span className="main-title">विचारको राजनीति र चुनौती</span>
            <span className="author-name">दयालबहादुर शाही</span>
        </Link>
      </div>

      <div className="media ad-item">
        <Link to="/blogDetail">
            <img
              src="https://setopati.com/wp-content/uploads/2017/07/jagdamba.jpg"
              alt=""
            />
        </Link>
      </div>

      <div className="media bichar-item">
        <Link to="/blogDetail">
            <figure>
              <img
                src="https://setopati.com/wp-content/uploads/2017/11/jeewan-subedi-110x110.jpg"
                className="author rounded-circle"
                alt=""
              />
              <img
                src="https://setopati.com/wp-content/uploads/2017/06/sarada_dahal-110x110.jpg"
                className="author author-two rounded-circle"
                alt=""
              />
            </figure>
            <span className="main-title">असनको साँढे</span>
            <span className="author-name">तीर्थबहादुर श्रेष्ठ</span>
        </Link>
      </div>

      <div className="media ad-item">
        <Link to="/blogDetail">
            <img
              src="https://setopati.com/wp-content/uploads/2017/12/nepa-top.gif"
              alt=""
            />
        </Link>
      </div>
    </>
  );
};

export default BicharList;
