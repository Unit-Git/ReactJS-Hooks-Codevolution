import React, { Fragment, useContext } from "react";
import CompE from "./CompE";
import { UserContext, ThemeContext } from "./UseContext.service";

function CompC() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <Fragment>
      <h1 style={{ color: theme.color.primary }}>{user.username}</h1>
      <CompE />
    </Fragment>
  );
}

export default CompC;
