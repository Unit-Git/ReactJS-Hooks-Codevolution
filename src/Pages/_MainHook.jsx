import React, { Fragment } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { HKWrapper, HKSidebar, HKMain } from "../Styled-Components/style.Hooks";
import SidebarHook from "../Components/layouts/Sidebar.hook";
import Welcome from "./Welcome";

function _MainHook() {
  return (
    <Router>
      <Fragment>
        <HKWrapper className="hk-wrapper">
          <SidebarHook />
          <HKMain className="hk-main">
            <Route path="/" exact component={Welcome} />
          </HKMain>
        </HKWrapper>
      </Fragment>
    </Router>
  );
}

export default _MainHook;
