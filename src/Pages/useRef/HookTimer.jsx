import React, { useState, useEffect, useRef } from "react";
import { Card, CardTitle, CardBody, Badge, Button } from "reactstrap";

function HookTimer() {
  const [timer, setTimer] = useState(0);

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Card className="border-0 shadow">
      <CardBody>
        <CardTitle>Hook Timer With useRef()</CardTitle>

        <div>
          <span>Timer : </span> <Badge color="info">{timer}</Badge>
        </div>
        <Button
          className="mt-2"
          color="info"
          outline
          onClick={() => clearInterval(intervalRef.current)}
        >
          Stop Interval
        </Button>
      </CardBody>
    </Card>
  );
}

export default HookTimer;
