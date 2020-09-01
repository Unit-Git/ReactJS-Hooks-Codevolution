import React from "react";
import { RootApp } from "./Styled-Components/HookStyled.js";
import ClassCounter from "./Components/ClassCounter.jsx";
import HookCounter from "./Components/HookCounter.jsx";
import HookCounter2 from "./Components/HookCounter2.jsx";
import HookCounter3 from "./Components/HookCounter3.jsx";
import HookCounter4 from "./Components/HookCounter4.jsx";

function App() {
  return (
    <RootApp>
      <ClassCounter />
      <HookCounter />
      <HookCounter2 />
      <HookCounter3 />
      <HookCounter4 />
    </RootApp>
  );
}

export default App;
