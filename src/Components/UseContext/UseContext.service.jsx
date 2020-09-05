import React from "react";
import CompC from "./CompC";

export const UserContext = React.createContext();

function UseContextService() {
  const contextData = {
    username: "unit964",
    color: "#1d0047",
  };

  return (
    <>
      <h1
        style={{
          color: contextData.color,
          textDecoration: "2px #333 underline",
        }}
      >
        UseHook()
      </h1>
      <UserContext.Provider value={contextData}>
        <CompC />
      </UserContext.Provider>
    </>
  );
}

export default UseContextService;
