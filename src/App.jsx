import React from "react";
import { RootApp } from "./Styled-Components/HookStyled.js";
import ClassCounter from "./Components/ClassCounter.jsx";
import HookCounter from "./Components/HookCounter.jsx";
import HookCounteTwo from "./Components/HookCounteTwo.jsx";
import HookCounter3 from "./Components/HookCounter3.jsx";

function App() {
  return (
    <RootApp>
      <ClassCounter flexBasis="2fr" />
      <HookCounter flexBasis="2fr" />
      <HookCounteTwo flexBasis="2fr" />
      <HookCounter3 flexBasis="4fr" />
    </RootApp>
  );
}

export default App;
