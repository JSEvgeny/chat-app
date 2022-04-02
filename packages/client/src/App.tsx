import { useEffect, useState } from "react";
import styled from "styled-components";
import MessageSender from "./containers/MessageSender/MessageSender";
import GlobalStyles from "./globalStyles.styled";
import useSocket from "./hooks/useSocket";

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const Sidebar = styled.aside`
  flex: 1;
  max-width: 300px;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: red;
  font-size: 24px;
`;

const MessageContainer = styled.ul``;

const Message = styled.li``;

function App() {
  const { data } = useSocket();

  const [messageHistory, setMessageHistory] = useState<string[]>([]);

  useEffect(() => setMessageHistory((prev) => [...prev, data]), [data]);

  const renderSingleMessage = (message: string) =>
    message && <Message>{message}</Message>;

  return (
    <>
      <GlobalStyles />
      <Container>
        <Sidebar></Sidebar>
        <Main>
          <Title>Welcome to the chat</Title>

          <MessageContainer>
            {messageHistory.map(renderSingleMessage)}
          </MessageContainer>

          <MessageSender />
        </Main>
      </Container>
    </>
  );
}

export default App;
