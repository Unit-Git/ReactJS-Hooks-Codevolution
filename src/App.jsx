import React from "react";
import { RootApp } from "./Styled-Components/HookStyled.js";
import ClassCounter from "./Components/ClassCounter.jsx";
import HookCounter from "./Components/HookCounter.jsx";
import HookCounteTwo from "./Components/HookCounteTwo.jsx";

function App() {
  return (
    <RootApp>
      <ClassCounter />
      <HookCounter />
      <HookCounteTwo />
    </RootApp>
  );
}

export default App;
