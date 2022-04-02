import { useEffect } from "react";

const useKeyPressed = (keyCode: string, callback: () => void) => {
  useEffect(() => {
    const onKeyPressedHandler = (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        e.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", onKeyPressedHandler);

    return () => window.removeEventListener("keydown", onKeyPressedHandler);
  }, [keyCode, callback]);
};

export default useKeyPressed;
