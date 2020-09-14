import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import { HKWrapper } from "../Styled-Components/style.Hooks";
import Welcome from "./Welcome";
import UseCallbackHook from "./useCallback/UseCallbackHook.jsx";

function _MainHook() {
  return (
    <Router>
      <Fragment>
        <HKWrapper className="hk-wrapper">
          <Switch>
            <Route path="/" exact component={props => <Welcome {...props} />} />
            <Route
              path="/use-callback"
              component={props => <UseCallbackHook {...props} />}
            />
          </Switch>
        </HKWrapper>
      </Fragment>
    </Router>
  );
}

export default _MainHook;
