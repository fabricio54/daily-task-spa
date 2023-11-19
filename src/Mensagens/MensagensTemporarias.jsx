import { useState, useEffect } from "react";
import { MsgTemporarias } from "./MsgTemporaria";

export function MensagensTemporarias({ msg, cor }) {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showMessage && (
        <MsgTemporarias cor={cor}>
          {msg}
        </MsgTemporarias> 
      )}
    </>
  );
}
