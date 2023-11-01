import { useEffect, useState } from "react";

const useWindos = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const delay = 100;

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }, delay);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, [delay]);

  return { width, height };
};

export default useWindos;
