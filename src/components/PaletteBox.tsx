import styled from "@emotion/styled";
import theme from "../styles/theme";
import ColorSlider from "./ColorSlider";

const PaletteBox = () => {
  return (
    <PaletteBoxWrapper>
      <ColorBox />
      <ColorSlider />
    </PaletteBoxWrapper>
  );
};

export default PaletteBox;

const PaletteBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ColorBox = styled.div`
  width: 172px;
  height: 172px;
  border-radius: 16px;
  background-color: ${theme.color.neutral.B00};
  margin-bottom: 0.75rem;
`;
