import React, { Fragment } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HKWrapper } from "../Styled-Components/style.Hooks";
import Welcome from "./Welcome";
import UseCallbackHook from "./useCallback/UseCallbackHook.jsx";
import UseMemoHook from "./useMemo/UseMemoHook";
import UseRefHook from "./useRef/UseRefHook";

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
            <Route
              path="/use-memo"
              component={props => <UseMemoHook {...props} />}
            />
            <Route
              path="/use-ref"
              component={props => <UseRefHook {...props} />}
            />
          </Switch>
        </HKWrapper>
      </Fragment>
    </Router>
  );
}

export default _MainHook;
