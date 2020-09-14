import React from "react";
import { HKSidebar } from "../../Styled-Components/style.Hooks";
import { Container, Nav, NavLink, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

function SidebarHook() {
  return (
    <HKSidebar className="hk-sidebar">
      <Container>
        <div className="hk-sidebar-content">
          <p>React Hook Tutorial</p>
          <Nav vertical>
            <NavItem>
              <Link className="nav-link text-black-50" to="/ref">
                Ref
              </Link>
            </NavItem>
          </Nav>
        </div>
      </Container>
    </HKSidebar>
  );
}

export default SidebarHook;
