import React, { Fragment } from "react";
import { UserContext } from "./UseContext.service";

function CompF() {
  return (
    <div>
      <UserContext.Consumer>
        {data => {
          return (
            <Fragment>
              <h3 style={{ color: data.color }}>{data.username}</h3>
            </Fragment>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default CompF;
