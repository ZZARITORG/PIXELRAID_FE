import { HexColorPicker } from "react-colorful";
import styled from "@emotion/styled";
import theme from "../styles/theme";

interface Props {
  color: string;
  onChange: (color: string) => void;
}

const ColorSlider = ({ color, onChange }: Props) => {
  return <StyledPicker color={color} onChange={onChange} />;
};

export default ColorSlider;

const StyledPicker = styled(HexColorPicker)`
  &.react-colorful {
    width: 172px !important;
  }
  .react-colorful__saturation {
    width: 100%;
    height: 172px !important;
    border-radius: 16px;
    border: none;
    flex: none;
  }

  .react-colorful__hue {
    margin-top: 12px;
    height: 8px;
    border-radius: 8px;
  }

  .react-colorful__hue-pointer,
  .react-colorful__saturation-pointer {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid ${theme.color.neutral.B00};
  }
`;
