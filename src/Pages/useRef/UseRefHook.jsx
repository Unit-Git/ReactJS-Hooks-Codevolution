import React, { useEffect, useRef } from "react";
import TemplateHook from "../../Components/layouts/Template";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Input,
} from "reactstrap";
import HookTimer from "./HookTimer";

function UseRefHook(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus Input
    inputRef.current.focus();
  }, []);

  return (
    <TemplateHook {...props}>
      <Container className="pt-md-5">
        <h2>useRef()</h2>
        <br />
        <br />
        <Row>
          <Col md="6">
            <Card className="border-0 shadow py-4 px-2">
              <CardBody>
                <FormGroup>
                  <Input
                    className="border-primary"
                    ref={inputRef}
                    type="text"
                  />
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <HookTimer />
          </Col>
        </Row>
      </Container>
    </TemplateHook>
  );
}

export default UseRefHook;
