import styled from "@emotion/styled";
import theme from "../styles/theme";
import ColorSlider from "./ColorSlider";
import { Icons } from "../assets/icons";

type PaletteBoxProps = {
  color: string;
  onChange: (color: string) => void;
};

const PaletteBox = ({ color, onChange }: PaletteBoxProps) => {
  const { color_code_icon: ColorCodeIcon } = Icons;
  return (
    <PaletteBoxWrapper>
      <ColorSlider color={color} onChange={onChange} />
      <ColorCodeWrapper>
        <ColorCodeIcon />
        {color.toUpperCase()}
      </ColorCodeWrapper>
    </PaletteBoxWrapper>
  );
};

export default PaletteBox;

const PaletteBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: -204px;
  width: 200px;
  height: 264px;
  background-color: ${theme.color.neutral.white};
  border: 1px solid ${theme.color.neutral.B00};
  border-radius: 18px;
  padding: 0.875rem;
  box-sizing: border-box;
  z-index: 999;
`;

const ColorCodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font: ${theme.typography["body3-1"]};
  color: ${theme.color.neutral.B40};
`;
