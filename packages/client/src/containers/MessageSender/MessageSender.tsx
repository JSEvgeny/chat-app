import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import { EventTypes } from "../../enums";
import useKeyPressed from "../../hooks/useKeyPressed";
import useSocket from "../../hooks/useSocket";

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const MessageSender = () => {
  const [message, setMessage] = useState("");

  const { sendMessage } = useSocket(EventTypes.MESSAGE_TO_SERVER);

  const onMessageSubmitHandler = () => {
    sendMessage(message);
    setMessage("");
  };

  useKeyPressed("Enter", onMessageSubmitHandler);

  return (
    <Container>
      <TextInput value={message} onChange={setMessage} />

      <Button onClick={onMessageSubmitHandler}>Send message</Button>
    </Container>
  );
};

export default MessageSender;
