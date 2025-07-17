import styled from "@emotion/styled";
import React from "react";
import theme from "../../../styles/theme";
import { Icons } from "../../../assets/icons";
import { useModal } from "../../../hooks/useModal";

export interface ModalProps {
  title?: string;
  content?: React.ReactNode;
}

const Modal = ({ title, content }: ModalProps) => {
  const { closeModal } = useModal();
  const { color_logo_icon: ColorLogoIcon, close_icon: CloseIcon } = Icons;

  return (
    <ModalContainer>
      <ColorLogoIcon />
      <CloseButton>
        <CloseIcon onClick={closeModal} />
      </CloseButton>
      <Title>{title}</Title>
      <div key={title}>{content}</div>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

  background-color: ${theme.color.neutral.white};
  padding: 56px 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
`;

const Title = styled.div`
  font-size: ${theme.typography["title1-1"].fontSize};
  font-weight: ${theme.typography["title1-1"].fontWeight};
  color: ${theme.color.primary.P00};
  margin-top: 14px;
  margin-bottom: 40px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 34px;
  right: 34px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;
