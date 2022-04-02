import { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1`
  color: red;
  font-size: 24px;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Title>Welcome to the chat</Title>
    </Container>
  );
}

export default App;
