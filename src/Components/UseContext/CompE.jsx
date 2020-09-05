import React, { Fragment } from "react";
import CompF from "./CompF";
import { UserContext } from "./UseContext.service";

function CompE() {
  return (
    <UserContext.Consumer>
      {data => {
        return (
          <Fragment>
            <h2 style={{ color: data.color }}>Comp E</h2>
            <CompF />
          </Fragment>
        );
      }}
    </UserContext.Consumer>
  );
}

export default CompE;
