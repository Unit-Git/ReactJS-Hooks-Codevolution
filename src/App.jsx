import React from "react";
import { RootApp } from "./Styled-Components/HookStyled.js";
import "./scss/hook.scss";
import DataFetching from "./Components/DataFetching.jsx";
import UseContextService from "./Components/UseContext/UseContext.service.jsx";

function App() {
  return (
    <RootApp>
      <DataFetching />
      <div>
        <UseContextService />
      </div>
    </RootApp>
  );
}

export default App;
