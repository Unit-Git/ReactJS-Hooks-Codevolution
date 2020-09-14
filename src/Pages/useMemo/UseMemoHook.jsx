import React, { useState, useCallback } from "react";
import TemplateHook from "../../Components/layouts/Template";
import { Container, Badge } from "reactstrap";
import { Row, Col, Card, Button } from "reactstrap";

function UseMemoHook(props) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCounter1 = useCallback(
    (e, type) => {
      if (type === "plus") setCount1(count1 + 1);
      if (type === "min") {
        if (count1 > 0) setCount1(count1 - 1);
      }
    },
    [count1]
  );

  const handleCounter2 = useCallback(
    (e, type) => {
      if (type === "plus") setCount2(count2 + 1);
      if (type === "min") {
        if (count2 > 0) setCount2(count2 - 1);
      }
    },
    [count2]
  );

  return (
    <TemplateHook {...props}>
      <Container className="pt-md-5">
        <h2>useMemo()</h2>
        <br />
        <br />
        <Row>
          <Col md="6" lg="4" className="position-relative">
            <Card body className="d-flex flex-row justify-content-center ">
              <Button
                color="dark"
                size="sm"
                onClick={e => handleCounter1(e, "min")}
              >
                -
              </Button>
              <Badge
                color="info"
                className="mx-3 d-flex align-items-center px-3"
              >
                Counter One {count1}
              </Badge>
              <Button
                color="dark"
                size="sm"
                onClick={e => handleCounter1(e, "plus")}
              >
                +
              </Button>
            </Card>
          </Col>
          {/* col 2 */}
          <Col md="6" lg="4" className="position-relative">
            <Card body className="d-flex flex-row justify-content-center ">
              <Button
                outline
                color="danger"
                size="sm"
                onClick={e => handleCounter2(e, "min")}
              >
                -
              </Button>
              <Badge
                color="danger"
                className="mx-3 d-flex align-items-center px-3"
              >
                Counter Two {count2}
              </Badge>
              <Button
                outline
                color="danger"
                size="sm"
                onClick={e => handleCounter2(e, "plus")}
              >
                +
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </TemplateHook>
  );
}

export default UseMemoHook;
