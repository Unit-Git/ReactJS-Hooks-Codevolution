import React, { Fragment, useContext } from "react";
import { CRContext } from "./context.service";

function ComponentA() {
  const contextA = useContext(CRContext);

  const { store, storeDispatch } = contextA;

  return (
    <Fragment>
      <h4>Component A - ({store.count})</h4>{" "}
      <button
        className="hk-btn hk-btn-dark "
        onClick={() => storeDispatch({ type: "increment" })}
      >
        +
      </button>
      <hr />
    </Fragment>
  );
}

export default ComponentA;
