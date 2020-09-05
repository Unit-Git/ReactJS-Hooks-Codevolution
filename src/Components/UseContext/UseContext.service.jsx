import React from "react";
import CompC from "./CompC";

export const UserContext = React.createContext();
export const ThemeContext = React.createContext();

function UseContextService() {
  const userContextData = {
    username: "unit",
    email: "unit@gmail.com",
    address: "Distric 13",
  };

  const themeContextData = {
    color: {
      primary: "#1d0047",
    },
  };

  return (
    <>
      <h1
        style={{
          color: themeContextData.color.primary,
          textDecoration: "2px #333 underline",
        }}
      >
        UseHook()
      </h1>
      <UserContext.Provider value={userContextData}>
        <ThemeContext.Provider value={themeContextData}>
          <CompC />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default UseContextService;
