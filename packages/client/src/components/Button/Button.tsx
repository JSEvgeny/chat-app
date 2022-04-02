import { ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button``;

interface IButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: IButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
