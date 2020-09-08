import React, { Fragment } from "react";
import "./scss/hook.scss";
import MainProjectHook from "./projectHook/MainProjectHook.jsx";

//* Styles
import "bootstrap/dist/css/bootstrap.min.css";

// router
import { BrowserRouter as Router, Route } from "react-router-dom";
import _MainHook from "./Components/_MainHook";

// component
function App() {
  return (
    <Router>
      <Fragment>
        <Route path="/" exact component={_MainHook} />
        <Route path="/shoe-shop" component={MainProjectHook} />
      </Fragment>
    </Router>
  );
}

export default App;
