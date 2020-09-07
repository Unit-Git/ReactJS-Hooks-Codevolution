import React, { Fragment, useContext } from "react";
import { CRContext } from "./context.service";

function ComponentF() {
  const contextF = useContext(CRContext);

  const { store, storeDispatch } = contextF;
  return (
    <Fragment>
      <h4>Component F - ({store.count})</h4>{" "}
      <button
        className="hk-btn hk-btn-dark "
        onClick={() => storeDispatch({ type: "decrement" })}
      >
        -
      </button>
      <hr />
    </Fragment>
  );
}

export default ComponentF;
