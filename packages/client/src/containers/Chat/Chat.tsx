import { useEffect, useState } from "react";
import styled from "styled-components";
import useSocket from "../../hooks/useSocket";
import MessageSender from "../MessageSender/MessageSender";

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

const Chat = () => {
  const { data } = useSocket("message");

  const [messageHistory, setMessageHistory] = useState<string[]>([]);

  useEffect(() => setMessageHistory((prev) => [...prev, data]), [data]);

  const renderSingleMessage = (message: string, index: number) =>
    message && <Message key={`message_${index}`}>{message}</Message>;

  return (
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
  );
};

export default Chat;
