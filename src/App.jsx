import React from "react";
import { RootApp } from "./Styled-Components/HookStyled.js";
import HookMouse from "./Components/HookMouse.jsx";
import "./scss/hook.scss";
import MouseContainer from "./Components/MouseContainer.jsx";

function App() {
  return (
    <RootApp>
      <HookMouse />
      <MouseContainer />
    </RootApp>
  );
}

export default App;
