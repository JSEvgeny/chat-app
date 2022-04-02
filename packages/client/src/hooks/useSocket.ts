import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { SOCKET_SERVER_URL } from "../constants";

const useSocket = () => {
  const socket = io(SOCKET_SERVER_URL);

  const [data, setData] = useState("");

  useEffect(() => {
    socket.on("message", (data) => {
      setData(data);
    });
  }, []);

  const sendMessage = (message: string) => socket.emit("message", message);

  return { data, sendMessage };
};

export default useSocket;
