import { useEffect, useState } from "react";
import useSocketContext from "./useSocketContext";

const useSocket = (eventName: string) => {
  const socket = useSocketContext();

  const [data, setData] = useState("");

  useEffect(() => {
    socket.on(eventName, (data) => {
      setData(data);
    });

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (message: string) => socket.emit("message", message);

  return { data, sendMessage };
};

export default useSocket;
