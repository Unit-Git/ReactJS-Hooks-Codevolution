import React, { Fragment, memo } from "react";

function Title() {
  console.log("rendering the title");
  return (
    <Fragment>
      <h2>UseCallback()</h2>
    </Fragment>
  );
}

export default memo(Title);
