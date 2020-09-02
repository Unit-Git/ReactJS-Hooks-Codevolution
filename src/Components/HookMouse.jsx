import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <>
      <h1>Hook Mouse </h1>
      <p>Hook MOuse X : {x}</p>
      <p>Hook MOuse Y : {y}</p>
    </>
  );
}

export default HookMouse;
