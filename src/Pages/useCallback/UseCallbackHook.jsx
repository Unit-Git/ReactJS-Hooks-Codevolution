import React, { useState, useCallback } from "react";
import Title from "./Title.jsx";
import { Container, Row, Col } from "reactstrap";
import Count from "./Count.jsx";
import ButtonCallback from "./Button.jsx";

import { withRouter } from "react-router-dom";
import TemplateHook from "../../Components/layouts/Template.jsx";

function UseCallbackHook(props) {
  const [age, setAge] = useState(18);
  const [sallary, setSallary] = useState(50000);

  const incrementAge = useCallback(() => setAge(age + 1), [age]);
  const incrementSallary = useCallback(() => setSallary(sallary + 10000), [
    sallary,
  ]);

  return (
    <TemplateHook {...props}>
      <Container className="pt-md-5">
        <Title />
        <Row>
          <Col md="6">
            <Count text="Abay01" count={age} />
            <ButtonCallback
              className="mt-2"
              type={true}
              color="primary"
              handleClick={incrementAge}
            >
              Increment Age
            </ButtonCallback>
          </Col>
          <Col md="6">
            <Count text="Salary" count={sallary} />
            <ButtonCallback
              className="mt-2"
              type={true}
              color="danger"
              handleClick={incrementSallary}
            >
              Increment Sallary
            </ButtonCallback>
          </Col>
        </Row>
      </Container>
    </TemplateHook>
  );
}

export default withRouter(UseCallbackHook);
