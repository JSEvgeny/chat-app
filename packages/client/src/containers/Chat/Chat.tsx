import { useEffect, useState } from "react";
import styled from "styled-components";
import { EventTypes } from "../../enums";
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
  const { data } = useSocket(EventTypes.MESSAGE_TO_CLIENT);
  const { data: connectedData } = useSocket(EventTypes.CLIENT_CONNECTED);

  const [messageHistory, setMessageHistory] = useState<string[]>([]);

  useEffect(() => setMessageHistory((prev) => [...prev, data]), [data]);

  const renderSingleMessage = (message: string, index: number) =>
    message && <Message key={`message_${index}`}>{message}</Message>;

  return (
    <Container>
      <Sidebar>{JSON.stringify(connectedData)}</Sidebar>
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
