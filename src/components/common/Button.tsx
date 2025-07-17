import styled from "@emotion/styled";
import theme from "../../styles/theme";

export interface ButtonProps {
  backgroundColor: string;
  content: string;
  onClick: () => void;
}

const Button = ({ backgroundColor, content, onClick }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} backgroundColor={backgroundColor}>
      {content}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.div<{ backgroundColor: string }>`
  width: 386px;
  height: 52px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 12px;
  color: ${theme.color.neutral.white};
  font: ${theme.typography["body2-2"]};
  cursor: pointer;
`;
