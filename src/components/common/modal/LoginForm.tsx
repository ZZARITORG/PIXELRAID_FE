import styled from "@emotion/styled";
import SingleInput from "../SingleInput";
import Button from "../Button";
import theme from "../../../styles/theme";
import { useState } from "react";

interface LoginFormProps {
  onClickSignUp: () => void;
}

const LoginForm = ({ onClickSignUp }: LoginFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = () => {
    console.log("로그인합니다.");
  };
  return (
    <FormWrapper>
      <InputWrapper>
        <SingleInput
          title="이메일"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SingleInput
          title="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button
          backgroundColor={theme.color.primary.P00}
          content="계정 만들기"
          onClick={handleLogin}
        />
        <Commentwrapper>
          <Comment>아직 계정이 없으신가요?</Comment>
          <CommentButton onClick={onClickSignUp}>회원가입</CommentButton>
        </Commentwrapper>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 28px;
  margin-bottom: 60px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 14px;
`;

const Commentwrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const Comment = styled.div`
  font-size: ${theme.typography["body2-3"].fontSize};
  font-weight: ${theme.typography["body2-3"].fontWeight};
  color: ${theme.color.neutral.B20};
`;

const CommentButton = styled.div`
  font-size: ${theme.typography["body2-1"].fontSize};
  font-weight: ${theme.typography["body2-1"].fontWeight};
  color: ${theme.color.primary.P00};
  cursor: pointer;
`;
