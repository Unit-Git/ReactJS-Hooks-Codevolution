import React, { memo } from "react";
import { useRouteMatch } from "react-router-dom";
import { NavLink as HookLink } from "react-router-dom";

export const NavItemHook = ({
  children,
  to,
  className = "",
  style = {},
  match,
  activeStyle = {},
}) => {
  let styleObj = style;

  if (match.url === to) {
    activeStyle = { ...activeStyle, fontWeight: "600" };
    styleObj = { ...style, ...activeStyle };
  }

  return (
    <HookLink
      to={to}
      className={`${className} ${
        match.url === to ? "text-dark" : "text-black-50"
      }`}
      style={styleObj}
    >
      {children}
    </HookLink>
  );
};

export default memo(NavItemHook);
