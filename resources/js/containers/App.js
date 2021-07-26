import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "../components/common/layout";

import {
  HOME,
  ERROR,
  NEWS_DETAIL,
  NEWS_LIST,
  PROGRAM_SCHEDULE,
  PROGRAM_DETAIL,
  TEAM_DETAIL,
  CONTACT,
} from "../constant/routes";

import Home from "../pages/Home";
import Error from "../pages/404/Error";
import DetailNews from "../pages/newsDetail/NewsDetail";
import NewsList from "../pages/newsList/NewsList";
import ProgramDetail from "../pages/programDetail/ProgramDetail";
import ProgramSchedules from "../pages/programSchedule/ProgramSchedules";
import DetailTeam from "../pages/teamDetail/DetailTeam";
import ContactUs from "../pages/contact/Contact";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={HOME.INDEX} exact component={Home} />
          <Route path={NEWS_LIST.INDEX}>
            <NewsList />
          </Route>
          <Route path={PROGRAM_DETAIL.INDEX}>
            <ProgramDetail />
          </Route>
          <Route path={PROGRAM_SCHEDULE.INDEX}>
            <ProgramSchedules />
          </Route>
          <Route path={NEWS_DETAIL.INDEX}>
            <DetailNews />
          </Route>
          <Route path={TEAM_DETAIL.INDEX}>
            <DetailTeam />
          </Route>
          <Route path={CONTACT.INDEX}>
            <ContactUs />
          </Route>
          <Route path={ERROR.INDEX}>
            <Error />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
