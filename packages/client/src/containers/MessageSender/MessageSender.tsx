import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import TextAreaInput from "../../components/TextAreaInput/TextAreaInput";
import useSocket from "../../hooks/useSocket";

const Container = styled.div``;

const MessageSender = () => {
  const [message, setMessage] = useState("");

  const { sendMessage } = useSocket();

  const onMessageSubmitHandler = () => {
    sendMessage(message);
  };

  return (
    <Container>
      <TextAreaInput value={message} onChange={setMessage} />

      <Button onClick={onMessageSubmitHandler}>Send message</Button>
    </Container>
  );
};

export default MessageSender;
