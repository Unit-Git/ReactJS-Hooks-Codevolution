import React, { Fragment, useContext } from "react";
import CompF from "./CompF";
import { UserContext, ThemeContext } from "./UseContext.service";

function CompE() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <Fragment>
      <h2 style={{ color: theme.color.primary }}>{user.email}</h2>
      <CompF />
    </Fragment>
  );
}

export default CompE;
