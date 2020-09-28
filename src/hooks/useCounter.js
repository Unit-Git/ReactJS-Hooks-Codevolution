import { useState, useCallback } from "react";

function useCounter(init) {
  const [count, setCount] = useState(init);

  const increment = useCallback(() => setCount(prev => prev + 1));
  const decrement = useCallback(() => {
    if (count > 0) setCount(prev => prev - 1);
  });

  return { count, increment, decrement };
}

export default useCounter;
