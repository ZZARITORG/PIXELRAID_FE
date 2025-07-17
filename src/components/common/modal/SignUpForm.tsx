import { useState } from "react";
import theme from "../../../styles/theme";
import Button from "../Button";
import SingleInput from "../SingleInput";
import styled from "@emotion/styled";

interface SignUpProps {
  onClickLogin: () => void;
}

const SignUpForm = ({ onClickLogin }: SignUpProps) => {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [checkPasswordMessage, setCheckPasswordMessage] = useState("");

  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [isNicknameValid, setIsNicknameValid] = useState<boolean | null>(null);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean | null>(null);
  const [isCheckPasswordValid, setIsCheckPasswordValid] = useState<
    boolean | null
  >(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!value) {
      setEmailMessage("");
      setIsEmailValid(null);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailMessage("이메일 형식이 올바르지 않습니다.");
      setIsEmailValid(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmailValid(true);
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickname(value);
    if (!value) {
      setNicknameMessage("");
      setIsNicknameValid(null);
      return;
    }
    setNicknameMessage("");
    setIsNicknameValid(true);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (!value) {
      setPasswordMessage("");
      setIsPasswordValid(null);
      setCheckPasswordMessage("");
      return;
    }
    const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!pwRegex.test(value)) {
      setPasswordMessage("비밀번호 형식이 올바르지 않습니다.");
      setIsPasswordValid(false);
    } else {
      setPasswordMessage("사용 가능한 비밀번호입니다.");
      setIsPasswordValid(true);
    }

    if (checkPassword) {
      if (checkPassword !== value) {
        setCheckPasswordMessage("비밀번호가 일치하지 않습니다.");
        setIsCheckPasswordValid(false);
      } else {
        setCheckPasswordMessage("비밀번호가 일치합니다.");
        setIsCheckPasswordValid(true);
      }
    }
  };

  const handleCheckPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setCheckPassword(value);
    if (!value) {
      setCheckPasswordMessage("");
      setIsCheckPasswordValid(null);
      return;
    }
    if (value !== password) {
      setCheckPasswordMessage("비밀번호가 일치하지 않습니다.");
      setIsCheckPasswordValid(false);
    } else {
      setCheckPasswordMessage("비밀번호가 일치합니다.");
      setIsCheckPasswordValid(true);
    }
  };

  const handleSignUp = () => {
    console.log("회원가입합니다.");
  };

  return (
    <FormWrapper>
      <InputWrapper>
        <SingleInput
          title="이메일"
          placeholder="예) pixelraid@gmail.com"
          value={email}
          onChange={handleEmailChange}
          validationMessage={emailMessage}
          isValid={isEmailValid ?? false}
        />
        <SingleInput
          title="닉네임"
          placeholder="예) pixelraid"
          value={nickname}
          onChange={handleNicknameChange}
          validationMessage={nicknameMessage}
          isValid={isNicknameValid ?? false}
        />
        <SingleInput
          title="비밀번호"
          placeholder="영문과 숫자를 조합해서 만들어주세요."
          value={password}
          onChange={handlePasswordChange}
          validationMessage={passwordMessage}
          isValid={isPasswordValid ?? false}
          type="password"
        />
        <SingleInput
          title="비밀번호 재확인"
          placeholder="비밀번호 확인을 입력해주세요."
          value={checkPassword}
          onChange={handleCheckPasswordChange}
          validationMessage={checkPasswordMessage}
          isValid={isCheckPasswordValid ?? false}
          type="password"
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button
          backgroundColor={theme.color.primary.P00}
          content="계정 만들기"
          onClick={handleSignUp}
        />
        <Commentwrapper>
          <Comment>계정이 있으신가요?</Comment>
          <CommentButton onClick={onClickLogin}>로그인</CommentButton>
        </Commentwrapper>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default SignUpForm;

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
