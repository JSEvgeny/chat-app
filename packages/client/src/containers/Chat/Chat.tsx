import { useEffect, useState } from "react";
import styled from "styled-components";
import { EventTypes } from "../../enums";
import useSocket from "../../hooks/useSocket";
import MessageSender from "../MessageSender/MessageSender";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Wrapper = styled.div`
  height: 50vh;
  width: 50vw;
  display: flex;
  gap: 1rem;
  border: 1px solid lightgray;
  border-radius: 3px;

  @media (max-width: 1024px) {
    height: 100%;
    width: 100%;
  }
`;

const Sidebar = styled.aside`
  flex: 1;
  max-width: 300px;
  padding: 1rem;
  padding-right: 0;
  background-color: aliceblue;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  padding-left: 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: calc(100% - 4rem);
`;

const MessageContainer = styled.ul`
  list-style: none;
  overflow: auto;
  padding: 0;

  scroll-snap-type: y proximity;

  > li:last-child {
    scroll-snap-align: end;
  }
`;

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
      <Wrapper>
        <Sidebar>{connectedData}</Sidebar>
        <Main>
          <Title>Welcome to the chat</Title>

          <ScrollContainer>
            <MessageContainer>
              {messageHistory.map(renderSingleMessage)}
            </MessageContainer>
          </ScrollContainer>

          <MessageSender />
        </Main>
      </Wrapper>
    </Container>
  );
};

export default Chat;
