import styled from "@emotion/styled";
import theme from "../styles/theme";
import ColorSlider from "./ColorSlider";
import { useState } from "react";
import { Icons } from "../assets/icons";

const PaletteBox = () => {
  const [color, setColor] = useState<string>("#000000");
  const { color_code_icon: ColorCodeIcon } = Icons;
  return (
    <PaletteBoxWrapper>
      <ColorSlider color={color} onChange={setColor} />
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
