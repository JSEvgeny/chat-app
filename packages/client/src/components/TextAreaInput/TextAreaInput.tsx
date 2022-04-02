import React, { useCallback } from "react";
import styled from "styled-components";

const TextArea = styled.textarea``;

interface ITextAreaInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TextAreaInput = ({ value, onChange }: ITextAreaInputProps) => {
  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = e.target;

      onChange(value);
    },
    []
  );

  return <TextArea value={value} onChange={onChangeHandler} />;
};

export default TextAreaInput;
