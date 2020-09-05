import React from "react";
import { RootApp } from "./Styled-Components/HookStyled.js";
import "./scss/hook.scss";
import DataFetching from "./Components/DataFetching.jsx";
import UseContextService from "./Components/UseContext/UseContext.service.jsx";
import CounterOneReducer from "./Components/useReducer/CounterOneReducer.jsx";

function App() {
  return (
    <RootApp>
      <DataFetching />
      <div>
        <UseContextService />
      </div>
      <div>
        <CounterOneReducer />
      </div>
    </RootApp>
  );
}

export default App;
