import React from "react";
import { RootApp } from "./Styled-Components/HookStyled.js";
import ClassCounter from "./Components/ClassCounter.jsx";
import HookCounter from "./Components/HookCounter.jsx";
import HookCounter2 from "./Components/HookCounter2.jsx";
import HookCounter3 from "./Components/HookCounter3.jsx";
import HookCounter4 from "./Components/HookCounter4.jsx";
import ClassCounter2 from "./Components/ClassCounter2.jsx";
import HookCounter5 from "./Components/HookCounter5.jsx";

function App() {
  return (
    <RootApp>
      <ClassCounter />
      <HookCounter />
      <HookCounter2 />
      <HookCounter3 />
      <HookCounter4 />
      <ClassCounter2 />
      <HookCounter5 />
    </RootApp>
  );
}

export default App;
