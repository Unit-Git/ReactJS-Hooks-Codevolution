import React from "react";
import { RootApp } from "./Styled-Components/HookStyled.js";
import "./scss/hook.scss";
import DataFetching from "./Components/DataFetching.jsx";

function App() {
  return (
    <RootApp>
      <div>
        <h1>Data fetching with hook</h1>
        <DataFetching />
      </div>
    </RootApp>
  );
}

export default App;
