const useKeydown = (callbackName, keyName) => {
  const handleKeydown = (event) => {
    if (event.type === "keydown" && event.key === keyName) {
      callbackName();
    }
  };

  window.addEventListener("keydown", handleKeydown);

  return () => {
    window.removeEventListener("keydown", handleKeydown);
  };
};

export { useKeydown };
