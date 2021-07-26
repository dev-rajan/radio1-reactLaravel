import { Link } from "react-router-dom";
import React from "react";
import useFetch from "../../api/useFetch";
import { useParams } from "react-router";

const Schedules = () => {
  const { id } = useParams();

  const {
    data: list,
    error,
    isPending,
  } = useFetch(`https://www.uniquefm.com.np/api/get-program-by-schedule/${id}`);

  const { data: day } = useFetch(
    "https://www.uniquefm.com.np/api/get-program-list"
  );

  return (
    <>
      <div className="special-box schedules">
        <ul className="nav nav-tabs pro-tab" id="myTab" role="tablist">
          {isPending && <></>}
          {error && <div>{error}</div>}
          {day && (
            <>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="sunday-tab"
                  data-toggle="tab"
                  href="/#sunday"
                  role="tab"
                  aria-controls="hosundayme"
                  aria-selected="true"
                >
                  {day.schedule.map((n) => n.name).slice(0, 1)}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="monday-tab"
                  data-toggle="tab"
                  href="/#monday"
                  role="tab"
                  aria-controls="monday"
                  aria-selected="false"
                >
                  {day.schedule.map((n) => n.name).slice(1, 2)}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tuesday-tab"
                  data-toggle="tab"
                  href="/#tuesday"
                  role="tab"
                  aria-controls="tuesday"
                  aria-selected="false"
                >
                  {day.schedule.map((n) => n.name).slice(2, 3)}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="wednesday-tab"
                  data-toggle="tab"
                  href="/#wednesday"
                  role="tab"
                  aria-controls="wednesday"
                  aria-selected="false"
                >
                  {day.schedule.map((n) => n.name).slice(3, 4)}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="thursday-tab"
                  data-toggle="tab"
                  href="/#thursday"
                  role="tab"
                  aria-controls="thursday"
                  aria-selected="false"
                >
                  {day.schedule.map((n) => n.name).slice(4, 5)}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="friday-tab"
                  data-toggle="tab"
                  href="/#friday"
                  role="tab"
                  aria-controls="friday"
                  aria-selected="false"
                >
                  {day.schedule.map((n) => n.name).slice(5, 6)}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="saturday-tab"
                  data-toggle="tab"
                  href="/#saturday"
                  role="tab"
                  aria-controls="saturday"
                  aria-selected="false"
                >
                  {day.schedule.map((n) => n.name).slice(6, 7)}
                </a>
              </li>
            </>
          )}
        </ul>

        <div className="tab-content" id="myTabContent">
          {list && (
            <>
              <div
                className="tab-pane fade show active"
                id="sunday"
                role="tabpanel"
                aria-labelledby="sunday-tab"
              >
                <div className="item-news media">
                  <Link to={`/programDetail/${list.liveProgram.id}`}>
                    <figure className="mr-3">
                      <img
                        src={list.liveProgram.image_link}
                        alt={list.liveProgram.name}
                      />
                    </figure>
                    <span className="media-body">
                      <span className="main-title">
                        {list.liveProgram.name}
                        <span className="spinner">
                          <span className="on-air">
                            On Air
                            <span className="double-bounce1"></span>
                            <span className="double-bounce2"></span>
                          </span>
                        </span>
                        <span className="start-time">
                          {list.liveProgram.start_time} -{" "}
                          {list.liveProgram.end_time}
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>

                {list.programs.map((a) => (
                  <div className="item-news media" key={a.id}>
                    <Link to={`/programDetail/${a.id}`}>
                      <figure className="mr-3">
                        <img src={a.image_link} alt={a.name} />
                      </figure>
                      <span className="media-body">
                        <span className="main-title">
                          {a.name}
                          {/* <span className="spinner">
                        <span className="on-air">
                          On Air
                          <span className="double-bounce1"></span>
                          <span className="double-bounce2"></span>
                        </span>
                      </span>
                      <span className="start-time">
                        {a.start_time} - {a.end_time}
                      </span> */}
                        </span>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>

              <div
                className="tab-pane fade"
                id="monday"
                role="tabpanel"
                aria-labelledby="monday-tab"
              >
                <div className="item-news media">
                  <Link to={`/programDetail/${list.liveProgram.id}`}>
                    <figure className="mr-3">
                      <img
                        src={list.liveProgram.image_link}
                        alt={list.liveProgram.name}
                      />
                    </figure>
                    <span className="media-body">
                      <span className="main-title">
                        {list.liveProgram.name}
                        <span className="spinner">
                          <span className="on-air">
                            On Air
                            <span className="double-bounce1"></span>
                            <span className="double-bounce2"></span>
                          </span>
                        </span>
                        <span className="start-time">
                          {list.liveProgram.start_time} -{" "}
                          {list.liveProgram.end_time}
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                {list.programs.map((a) => (
                  <div className="item-news media">
                    <Link to={`/programDetail/${a.id}`}>
                      <figure className="mr-3">
                        <img src={a.image_link} alt={a.name} />
                      </figure>
                      <span className="media-body">
                        <span className="main-title">
                          {a.name}
                          {/* <span className="spinner">
                        <span className="on-air">
                          On Air
                          <span className="double-bounce1"></span>
                          <span className="double-bounce2"></span>
                        </span>
                      </span>
                      <span className="start-time">
                        {a.start_time} - {a.end_time}
                      </span> */}
                        </span>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              <div
                className="tab-pane fade"
                id="tuesday"
                role="tabpanel"
                aria-labelledby="tuesday-tab"
              >
                <div className="item-news media">
                  <Link to={`/programDetail/${list.liveProgram.id}`}>
                    <figure className="mr-3">
                      <img
                        src={list.liveProgram.image_link}
                        alt={list.liveProgram.name}
                      />
                    </figure>
                    <span className="media-body">
                      <span className="main-title">
                        {list.liveProgram.name}
                        <span className="spinner">
                          <span className="on-air">
                            On Air
                            <span className="double-bounce1"></span>
                            <span className="double-bounce2"></span>
                          </span>
                        </span>
                        <span className="start-time">
                          {list.liveProgram.start_time} -{" "}
                          {list.liveProgram.end_time}
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                {list.programs.map((a) => (
                  <div className="item-news media">
                    <Link to={`/programDetail/${a.id}`}>
                      <figure className="mr-3">
                        <img src={a.image_link} alt={a.name} />
                      </figure>
                      <span className="media-body">
                        <span className="main-title">
                          {a.name}
                          {/* <span className="spinner">
                        <span className="on-air">
                          On Air
                          <span className="double-bounce1"></span>
                          <span className="double-bounce2"></span>
                        </span>
                      </span>
                      <span className="start-time">
                        {a.start_time} - {a.end_time}
                      </span> */}
                        </span>
                      </span>
                    </Link>
                  </div>
                ))}{" "}
              </div>
              <div
                className="tab-pane fade"
                id="wednesday"
                role="tabpanel"
                aria-labelledby="wednesday-tab"
              >
                <div className="item-news media">
                  <Link to={`/programDetail/${list.liveProgram.id}`}>
                    <figure className="mr-3">
                      <img
                        src={list.liveProgram.image_link}
                        alt={list.liveProgram.name}
                      />
                    </figure>
                    <span className="media-body">
                      <span className="main-title">
                        {list.liveProgram.name}
                        <span className="spinner">
                          <span className="on-air">
                            On Air
                            <span className="double-bounce1"></span>
                            <span className="double-bounce2"></span>
                          </span>
                        </span>
                        <span className="start-time">
                          {list.liveProgram.start_time} -{" "}
                          {list.liveProgram.end_time}
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                {list.programs.map((a) => (
                  <div className="item-news media">
                    <Link to={`/programDetail/${a.id}`}>
                      <figure className="mr-3">
                        <img src={a.image_link} alt={a.name} />
                      </figure>
                      <span className="media-body">
                        <span className="main-title">
                          {a.name}
                          {/* <span className="spinner">
                        <span className="on-air">
                          On Air
                          <span className="double-bounce1"></span>
                          <span className="double-bounce2"></span>
                        </span>
                      </span>
                      <span className="start-time">
                        {a.start_time} - {a.end_time}
                      </span> */}
                        </span>
                      </span>
                    </Link>
                  </div>
                ))}{" "}
              </div>
              <div
                className="tab-pane fade"
                id="thursday"
                role="tabpanel"
                aria-labelledby="thursday-tab"
              >
                <div className="item-news media">
                  <Link to={`/programDetail/${list.liveProgram.id}`}>
                    <figure className="mr-3">
                      <img
                        src={list.liveProgram.image_link}
                        alt={list.liveProgram.name}
                      />
                    </figure>
                    <span className="media-body">
                      <span className="main-title">
                        {list.liveProgram.name}
                        <span className="spinner">
                          <span className="on-air">
                            On Air
                            <span className="double-bounce1"></span>
                            <span className="double-bounce2"></span>
                          </span>
                        </span>
                        <span className="start-time">
                          {list.liveProgram.start_time} -{" "}
                          {list.liveProgram.end_time}
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                {list.programs.map((a) => (
                  <div className="item-news media">
                    <Link to={`/programDetail/${a.id}`}>
                      <figure className="mr-3">
                        <img src={a.image_link} alt={a.name} />
                      </figure>
                      <span className="media-body">
                        <span className="main-title">
                          {a.name}
                          {/* <span className="spinner">
                        <span className="on-air">
                          On Air
                          <span className="double-bounce1"></span>
                          <span className="double-bounce2"></span>
                        </span>
                      </span>
                      <span className="start-time">
                        {a.start_time} - {a.end_time}
                      </span> */}
                        </span>
                      </span>
                    </Link>
                  </div>
                ))}{" "}
              </div>
              <div
                className="tab-pane fade"
                id="friday"
                role="tabpanel"
                aria-labelledby="friday-tab"
              >
                <div className="item-news media">
                  <Link to={`/programDetail/${list.liveProgram.id}`}>
                    <figure className="mr-3">
                      <img
                        src={list.liveProgram.image_link}
                        alt={list.liveProgram.name}
                      />
                    </figure>
                    <span className="media-body">
                      <span className="main-title">
                        {list.liveProgram.name}
                        <span className="spinner">
                          <span className="on-air">
                            On Air
                            <span className="double-bounce1"></span>
                            <span className="double-bounce2"></span>
                          </span>
                        </span>
                        <span className="start-time">
                          {list.liveProgram.start_time} -{" "}
                          {list.liveProgram.end_time}
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                {list.programs.map((a) => (
                  <div className="item-news media">
                    <Link to={`/programDetail/${a.id}`}>
                      <figure className="mr-3">
                        <img src={a.image_link} alt={a.name} />
                      </figure>
                      <span className="media-body">
                        <span className="main-title">
                          {a.name}
                          {/* <span className="spinner">
                        <span className="on-air">
                          On Air
                          <span className="double-bounce1"></span>
                          <span className="double-bounce2"></span>
                        </span>
                      </span>
                      <span className="start-time">
                        {a.start_time} - {a.end_time}
                      </span> */}
                        </span>
                      </span>
                    </Link>
                  </div>
                ))}{" "}
              </div>
              <div
                className="tab-pane fade"
                id="saturday"
                role="tabpanel"
                aria-labelledby="saturday-tab"
              >
                <div className="item-news media">
                  <Link to={`/programDetail/${list.liveProgram.id}`}>
                    <figure className="mr-3">
                      <img
                        src={list.liveProgram.image_link}
                        alt={list.liveProgram.name}
                      />
                    </figure>
                    <span className="media-body">
                      <span className="main-title">
                        {list.liveProgram.name}
                        <span className="spinner">
                          <span className="on-air">
                            On Air
                            <span className="double-bounce1"></span>
                            <span className="double-bounce2"></span>
                          </span>
                        </span>
                        <span className="start-time">
                          {list.liveProgram.start_time} -{" "}
                          {list.liveProgram.end_time}
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>

                {list.programs.map((a) => (
                  <div className="item-news media">
                    <Link to={`/programDetail/${a.id}`}>
                      <figure className="mr-3">
                        <img src={a.image_link} alt={a.name} />
                      </figure>
                      <span className="media-body">
                        <span className="main-title">
                          {a.name}
                          {/* <span className="spinner">
                        <span className="on-air">
                          On Air
                          <span className="double-bounce1"></span>
                          <span className="double-bounce2"></span>
                        </span>
                      </span>
                      <span className="start-time">
                        {a.start_time} - {a.end_time}
                      </span> */}
                        </span>
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Schedules;
