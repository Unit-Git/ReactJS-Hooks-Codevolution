import React, { useEffect } from "react";
import { RootApp } from "./Styled-Components/HookStyled.js";
import "./scss/hook.scss";
import ReducerApi from "./Components/useReducer/Reducer.api.jsx";
import MainProjectHook from "./projectHook/MainProjectHook.jsx";
import ReducerApi2 from "./Components/useReducer/Reducer.api2.jsx";
// import DataFetching from "./Components/DataFetching.jsx";
// import UseContextService from "./Components/UseContext/UseContext.service.jsx";
// import CounterOneReducer from "./Components/useReducer/CounterOneReducer.jsx";
// import CounterTwoReducer from "./Components/useReducer/CounterTwoReducer.jsx";
// import UseCRService from "./Components/useContext-and-useReducer/UseCR.service.jsx";

function App() {
  useEffect(() => {
    document.title = "Hook Tutorial";
  });

  return (
    <RootApp>
      {/* <ReducerApi /> */}
      <MainProjectHook />
      <ReducerApi2 />
    </RootApp>
  );
}

export default App;
