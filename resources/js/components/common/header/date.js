import React, { useEffect, useState } from "react";
import Clock from "react-live-clock";
// import AbortController from "abort-controller"

// const abortC = new AbortController();

const NavDate = () => {
  const [Cdate, setDate] = useState([]);

  useEffect(() => {
    const asyncFetchDate = async () => {
      const dateItem = await fetch(
        "https://www.uniquefm.com.np/api/get-ad-and-top-nav-data"
        // ,
        // { signal: abortC.signal }
      );
      const dateData = await dateItem.json();
      const CurrentDate = dateData.nepaliDate;
      setDate(CurrentDate);
    };
    asyncFetchDate();
  }, []);
  return (
    <div className="calendar-box col-md-4">
      <span className="icon-text current-date">
        <span className="left-icon lnr lnr-calendar-full"></span>
        {Cdate && (
          <span className="main-title">
            {Cdate.day}, {Cdate.nmonth} {Cdate.date}, {Cdate.year}
          </span>
        )}
      </span>
      <TimeData />
    </div>
  );
};

export default NavDate;

const TimeData = () => {
  return (
    <span className="icon-text current-date current-time">
      <span className="left-icon lnr lnr-clock"></span>
      <span className="main-title">
        <Clock
          format={"h:mm:ss a"}
          ticking={true}
          timezone={"Asia/Kathmandu"}
          locale="ne"
        />
      </span>
    </span>
  );
};
