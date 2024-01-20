//import { useEffect } from "react";

const useKeydownHandler = (callbackName, keyName) => {
  const handleKeydown = (event) => {
    if (event.type === "keydown" && event.key === "Escape") {
      callbackName();
    }
  };

  window.addEventListener("keydown", handleKeydown);

  return () => {
    window.removeEventListener("keydown", handleKeydown);
  };
  //useEffect(() => {}, []);
};

export { useKeydownHandler };
