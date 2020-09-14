import React from "react";
import { Button } from "reactstrap";
import { memo } from "react";

function ButtonCallback({ handleClick, type, color, children, className }) {
  console.log("rendering button - ", children);
  return (
    <Button
      className={className}
      outline={type}
      color={color}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

export default memo(ButtonCallback);
