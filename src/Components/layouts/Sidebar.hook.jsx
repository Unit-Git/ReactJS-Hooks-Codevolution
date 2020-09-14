import React from "react";
import { HKSidebar } from "../../Styled-Components/style.Hooks";
import { Container, Nav, NavItem } from "reactstrap";
import { NavItemHook } from "./NavItem.Hook";

function SidebarHook(props) {
  return (
    <HKSidebar className="hk-sidebar">
      <Container>
        <div className="hk-sidebar-content">
          <p>React Hook Tutorial</p>
          <Nav vertical>
            <NavItem>
              <NavItemHook {...props} className="nav-link " to="/">
                Home
              </NavItemHook>
            </NavItem>
            <NavItem>
              <NavItemHook {...props} className="nav-link " to="/use-callback">
                Use Callback
              </NavItemHook>
            </NavItem>
            <NavItem>
              <NavItemHook {...props} className="nav-link " to="/use-memo">
                Use Memo
              </NavItemHook>
            </NavItem>
            <NavItem>
              <NavItemHook {...props} className="nav-link " to="/use-ref">
                Use Ref
              </NavItemHook>
            </NavItem>
          </Nav>
        </div>
      </Container>
    </HKSidebar>
  );
}

export default SidebarHook;
