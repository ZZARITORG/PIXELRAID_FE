import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { Icons } from "../../assets/icons";
import { useModal } from "../../hooks/useModal";
import SignUpForm from "./modal/SignUpForm";
import LoginForm from "./modal/LoginForm";

type TopbarProps = {
  mousePos: { x: number; y: number } | null;
};

type Mode = "login" | "signup";

const Topbar = ({ mousePos }: TopbarProps) => {
  const { logo_icon: LogoIcon } = Icons;
  const { openModal } = useModal();

  const ModalContent = (mode: Mode, openCorrectModal: (mode: Mode) => void) => {
    return {
      login: {
        title: "로그인",
        render: () => (
          <LoginForm onClickSignUp={() => openCorrectModal("signup")} />
        ),
      },
      signup: {
        title: "회원가입",
        render: () => (
          <SignUpForm onClickLogin={() => openCorrectModal("login")} />
        ),
      },
    }[mode];
  };

  const openCorrectModal = (mode: Mode) => {
    const modalData = ModalContent(mode, openCorrectModal);
    openModal({
      title: modalData.title,
      content: modalData.render(),
    });
  };

  return (
    <TopbarContainer>
      <LogoWrapper>
        <LogoIcon />
        <CoordinateWrapper>
          <span>x: {mousePos?.x ?? "-"}</span>
          <span>y: {mousePos?.y ?? "-"}</span>
        </CoordinateWrapper>
      </LogoWrapper>
      <button onClick={() => openCorrectModal("login")}>로그인</button>
    </TopbarContainer>
  );
};

export default Topbar;

const TopbarContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 104px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const CoordinateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font: ${theme.typography["body3-2"]};
  color: ${theme.color.neutral.black};
`;
