import Chat from "./containers/Chat/Chat";
import { getSocket, SocketProvider } from "./contexts/socket";
import GlobalStyles from "./globalStyles.styled";

function App() {
  const socket = getSocket();

  return (
    <>
      <GlobalStyles />

      <SocketProvider socket={socket}>
        <Chat />
      </SocketProvider>
    </>
  );
}

export default App;
