import { Link } from "react-router-dom";
import React from "react";

const SipharisLeft = () => {
  return (
    <div className="sif-left">
      <h1>सिफारिस</h1>
      <div className="bishesh sifaris-list">
        <div className="items normal-list">
          <Link to="/#!">
              <figure>
                <span className="tags">राजनीति</span>
              </figure>

              <span className="main-title">
                घाइतेको अवस्था बुझ्न प्रधानमन्त्रीलगायत केएमसी अस्पतालमा
              </span>
          </Link>
        </div>

        <div className="items normal-list">
          <Link to="/#!">
              <figure>
                <span className="tags">समाज</span>
              </figure>

              <span className="main-title">
                उद्धार गरेर अस्पताल पुर्‍याइएका यात्रुहरू, हेर्नुहोस् तस्बिरमा
              </span>
          </Link>
        </div>

        <div className="items normal-list">
          <Link to="/#!">
              <figure>
                <span className="tags">खेलकुद</span>
              </figure>

              <span className="main-title">
                त्रिभुवन विमानस्थल अनिश्चितकालका लागि बन्द
              </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SipharisLeft;
