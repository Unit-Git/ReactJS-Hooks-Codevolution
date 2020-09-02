import React, { Fragment, useState } from "react";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  const toggleDisplay = () => setDisplay(!display);

  return (
    <Fragment>
      <section>
        <button onClick={toggleDisplay} className="hook-btn hook-btn-primary">
          Toggle Display
        </button>
        {display && <div className="hook-card hook-card-primary "></div>}
      </section>
    </Fragment>
  );
}

export default MouseContainer;
