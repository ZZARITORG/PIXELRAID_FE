import styled from "@emotion/styled";
import theme from "../styles/theme";

interface ColorCircleAvatarProps {
  color: string;
  selected?: boolean;
  onClick?: () => void;
  isGradient?: boolean;
}

const ColorCircleAvatar = ({
  color,
  selected = false,
  onClick,
  isGradient = false,
}: ColorCircleAvatarProps) => {
  return (
    <CircleWrapper
      color={color}
      selected={selected}
      onClick={onClick}
      isGradient={isGradient}
    />
  );
};

export default ColorCircleAvatar;

const CircleWrapper = styled.div<{
  color: string;
  selected: boolean;
  isGradient: boolean;
}>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ color, isGradient }) =>
    isGradient
      ? "linear-gradient(45deg, #FF0000 0%, #D35D0E 25%, #D4FF00 50%, #26FF00 75%, #0062FF 100%)"
      : color};
  cursor: pointer;
  box-sizing: border-box;

  border: ${({ color, selected }) =>
    selected
      ? "2px solid #F48E39"
      : color === "#FFFFFF"
      ? `1px solid ${theme.color.neutral.B00}`
      : "none"};
`;
