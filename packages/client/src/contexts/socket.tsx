import { createContext, ReactElement, useMemo } from "react";
import { io, Socket } from "socket.io-client";
import { SOCKET_SERVER_URL } from "../constants";

const SocketContext = createContext<Socket | undefined>(undefined);

interface ISocketProviderProps {
  children: ReactElement | ReactElement[];
  socket: Socket;
}

const SocketProvider = ({ children, socket }: ISocketProviderProps) => {
  const socketCached = useMemo(() => socket, [socket]);

  return (
    <SocketContext.Provider value={socketCached}>
      {children}
    </SocketContext.Provider>
  );
};

const getSocket = () => io(SOCKET_SERVER_URL);

export { SocketContext, SocketProvider, getSocket };
