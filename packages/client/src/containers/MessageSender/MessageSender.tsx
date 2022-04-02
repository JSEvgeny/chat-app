import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import TextAreaInput from "../../components/TextAreaInput/TextAreaInput";
import useKeyPressed from "../../hooks/useKeyPressed";
import useSocket from "../../hooks/useSocket";

const Container = styled.div``;

const MessageSender = () => {
  const [message, setMessage] = useState("");

  const { sendMessage } = useSocket("message-to-server");

  const onMessageSubmitHandler = () => {
    sendMessage(message);
    setMessage("");
  };

  useKeyPressed("Enter", onMessageSubmitHandler);

  return (
    <Container>
      <TextAreaInput value={message} onChange={setMessage} />

      <Button onClick={onMessageSubmitHandler}>Send message</Button>
    </Container>
  );
};

export default MessageSender;
