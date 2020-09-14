import React, { Fragment } from "react";
import SidebarHook from "./Sidebar.hook";
import { HKMain } from "../../Styled-Components/style.Hooks";

function TemplateHook(props) {
  return (
    <Fragment>
      <SidebarHook {...props} />
      <HKMain className="hk-main">{props.children}</HKMain>
    </Fragment>
  );
}

export default TemplateHook;
