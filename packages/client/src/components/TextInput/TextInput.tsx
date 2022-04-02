import React, { useCallback } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
`;

interface ITextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TextInput = ({ value, onChange }: ITextInputProps) => {
  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      onChange(value);
    },
    []
  );

  return <Input value={value} onChange={onChangeHandler} />;
};

export default TextInput;
