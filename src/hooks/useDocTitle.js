import { useEffect } from "react";

function useDocTitle(text, count) {
  useEffect(() => {
    document.title = `${text} - ${count}`;

    return () => {
      document.title = "React App";
    };
  }, [count]);
}

export default useDocTitle;
