import React, { Fragment, useState } from "react";
import { Card, CardBody, Button, Input } from "reactstrap";
import styled from "styled-components";
import { useRef } from "react";
import useCounter from "../../hooks/useCounter";

const Dflex = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const FlexColumn = styled(Dflex)`
  flex-direction: column;
`;

const FlexRow = styled(Dflex)`
  flex-direction: row;
  justify-content: center;
`;

function CustomHookCounterOne() {
  // const [count, setCount] = useState(0);

  const input = useRef();
  const { count, increment, decrement } = useCounter(0);

  // const increment = () => setCount(prevCount => prevCount + 1);
  // const decrement = () => {
  //   if (count > 0) setCount(prevCount => prevCount - 1);
  // };
  const handleInputChange = e => {
    e.target.value = count;
    e.preventDefault();
  };

  return (
    <Fragment>
      <Card className="border-0 shadow-sm">
        <CardBody>
          <FlexRow>
            <Button
              onClick={decrement}
              className="mr-1"
              style={{ flexGrow: 1 }}
              color="secondary"
              disabled={count < 1 ? true : false}
            >
              {" "}
              -{" "}
            </Button>
            {/* input field */}
            <div>
              <Input
                ref={input}
                type="text"
                className="text-center"
                style={{ flexGrow: 1 }}
                value={count}
                onChange={handleInputChange}
              />
            </div>
            <Button
              onClick={increment}
              className="ml-1"
              style={{ flexGrow: 1 }}
              color="secondary"
            >
              {" "}
              +{" "}
            </Button>
          </FlexRow>
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default CustomHookCounterOne;
