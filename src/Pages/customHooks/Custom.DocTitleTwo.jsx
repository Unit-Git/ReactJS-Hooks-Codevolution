import React, { Fragment, useState } from "react";
import { Card, Button } from "reactstrap";
import useDocTitle from "../../hooks/useDocTitle";

function CustomDocTitleTwo() {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = "Custom Hook " + count;
  //   return () => {
  //     document.title = "Loading..";
  //   };
  // }, [count]);
  useDocTitle("use", count);

  return (
    <Fragment>
      <Card body className="border-0 shadow-sm">
        <Button onClick={() => setCount(prevCount => prevCount + 1)}>
          Increment Document Title - {count}
        </Button>
      </Card>
    </Fragment>
  );
}

export default CustomDocTitleTwo;
