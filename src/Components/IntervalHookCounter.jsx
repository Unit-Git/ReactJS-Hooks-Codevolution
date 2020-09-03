import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => setCount(prevC => prevC + 1);

  useEffect(() => {
    // const interval = setInterval(tick, 1000);

    return () => {
      // clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="hook-card hook-card-info">
        <h1>Interval Class Counter</h1>
        <h3>The Count is : {count}</h3>
      </div>
    </>
  );
}

export default IntervalHookCounter;
