import { useContext } from "react";
import { SocketContext } from "../contexts/socket";

const useSocketContext = () => {
  const context = useContext(SocketContext);

  if (!context)
    throw new Error(
      "Socket client value missing. Make sure useSocketContext hook is used within SocketProvider"
    );

  return context;
};

export default useSocketContext;
