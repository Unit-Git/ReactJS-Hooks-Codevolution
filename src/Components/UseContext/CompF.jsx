import React, { Fragment, useContext } from "react";
import { UserContext, ThemeContext } from "./UseContext.service";

function CompF() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <Fragment>
      <h3 style={{ color: theme.color.primary }}>{user.address}</h3>
    </Fragment>
  );
}

export default CompF;
