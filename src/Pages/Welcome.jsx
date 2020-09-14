import React from "react";

import { Jumbotron, Container } from "reactstrap";
import TemplateHook from "../Components/layouts/Template";

function Welcome(props) {
  return (
    <TemplateHook {...props}>
      <div style={{ height: "100%" }}>
        <Jumbotron
          className="border-0"
          fluid
          style={{ height: " 100%", backgroundColor: "transparent" }}
        >
          <Container fluid>
            <h1 className="display-3">Project Toturial React Hook</h1>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </div>
    </TemplateHook>
  );
}

export default Welcome;
