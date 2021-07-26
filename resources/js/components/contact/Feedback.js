import React from "react";

const Feedback = () => {
  return (
    <>
      <span className="cat-box">
        <span className="cat-tags">Feedback Form</span>
      </span>

      <form className="feedback" method="get" action="#">
        <fieldset>
          <div className="row">
            <span className="fieldbox col-md-12">
              <div className="form-groups">
                <label className="label">Name</label>
                <input type="text" className="textfield" />
              </div>
            </span>

            <span className="fieldbox col-md-12">
              <div className="form-groups">
                <label className="label">Email</label>
                <input type="email" className="textfield" />
              </div>
            </span>

            <span className="fieldbox col-md-12">
              <div className="form-groups">
                <label className="label">Address</label>
                <input type="text" className="textfield" />
              </div>
            </span>

            <span className="fieldbox col-md-12">
              <div className="form-groups">
                <label className="label">Message</label>
                <textarea className="textarea"></textarea>
              </div>
            </span>

            <span className="fieldbox  col-md-12">
              <div className="form-groups recaptcha">
                <iframe
                  title="capctha"
                  src="https://www.google.com/recaptcha/api2/anchor?k=6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-&amp;co=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbTo0NDM.&amp;hl=en&amp;v=v1520836262157&amp;size=normal&amp;cb=rgxa7n6x0bnb"
                  style={{
                    width: "304px",
                    height: "78px",
                    role: "presentation",
                    frameBorder: "0",
                    scrolling: "no",
                    sandbox:
                      "allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox",
                  }}
                ></iframe>
              </div>
            </span>
            <span className="submit col-xs-12 col-sm-12 col-md-12">
              <button className="more-btn">
                Submit<span className="right-icon lnr lnr-arrow-right"></span>
              </button>
            </span>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Feedback;
