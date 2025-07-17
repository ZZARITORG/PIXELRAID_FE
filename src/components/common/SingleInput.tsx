import styled from "@emotion/styled";
import React from "react";
import theme from "../../styles/theme";

export interface InputProps {
  title: string;
  placeholder?: string;
  validationMessage?: string;
  isValid?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const SingleInput = ({
  title,
  placeholder,
  validationMessage,
  isValid,
  value,
  onChange,
  type = "text",
}: InputProps) => {
  return (
    <InputGroup>
      <LabelRow>
        <Title>{title}</Title>
        {validationMessage && (
          <Validation isValid={isValid ?? false}>
            {validationMessage}
          </Validation>
        )}
      </LabelRow>
      <InputSection
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        isValid={isValid ?? false}
        hasValue={!!value}
      />
    </InputGroup>
  );
};

export default SingleInput;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: ${theme.typography["body3-3"].fontSize};
  font-weight: ${theme.typography["body3-3"].fontWeight};
  color: ${theme.color.neutral.B20};
`;

const InputSection = styled.input<{ isValid: boolean; hasValue: boolean }>`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1.5px solid
    ${({ isValid, hasValue }) =>
      hasValue
        ? isValid
          ? `${theme.color.neutral.B00}`
          : `${theme.color.primary.P00}`
        : `${theme.color.neutral.B00}`};
  outline: none;
  color: ${theme.color.neutral.black};

  &::placeholder {
    color: ${theme.color.neutral.B10};
  }
`;

const Validation = styled.div<{ isValid: boolean }>`
  font-size: ${theme.typography["small1-3"].fontSize};
  font-weight: ${theme.typography["small1-3"].fontWeight};
  color: ${({ isValid }) =>
    isValid ? theme.color.neutral.B30 : theme.color.primary.P00};
`;

const LabelRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
`;
