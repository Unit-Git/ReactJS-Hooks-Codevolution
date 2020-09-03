import React from "react";
import { RootApp } from "./Styled-Components/HookStyled.js";
import HookMouse from "./Components/HookMouse.jsx";
import "./scss/hook.scss";
import MouseContainer from "./Components/MouseContainer.jsx";
import IntervalClassCounter from "./Components/IntervalClassCounter.jsx";
import IntervalHookCounter from "./Components/IntervalHookCounter.jsx";

function App() {
  return (
    <RootApp>
      <HookMouse />
      <MouseContainer />
      <IntervalClassCounter />
      <IntervalHookCounter />
    </RootApp>
  );
}

export default App;
