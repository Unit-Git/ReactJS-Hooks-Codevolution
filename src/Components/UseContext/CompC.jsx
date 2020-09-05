import React, { Fragment } from "react";
import CompE from "./CompE";
import { UserContext } from "./UseContext.service";

function CompC() {
  return (
    <UserContext.Consumer>
      {data => {
        return (
          <Fragment>
            <h2 style={{ color: data.color }}>Comp C</h2>
            <CompE />
          </Fragment>
        );
      }}
    </UserContext.Consumer>
  );
}

export default CompC;
