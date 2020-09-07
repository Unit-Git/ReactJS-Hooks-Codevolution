import React, { Fragment, useContext } from "react";
import { CRContext } from "./context.service";
import ComponentE from "./ComponentE";

function ComponentC() {
  const contextC = useContext(CRContext);

  const { store, storeDispatch } = contextC;
  return (
    <Fragment>
      <h4>Component C - ({store.count})</h4>
      <button
        className="hk-btn hk-btn-danger"
        onClick={() => storeDispatch({ type: "reset" })}
      >
        Reset
      </button>
      <hr />
      <ComponentE />
    </Fragment>
  );
}

export default ComponentC;
