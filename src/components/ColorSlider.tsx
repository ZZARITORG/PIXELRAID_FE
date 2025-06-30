import React, { useState } from "react";
import styled from "@emotion/styled";

const ColorSlider = () => {
  const [hue, setHue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHue(Number(e.target.value));
  };

  return (
    <Wrapper>
      <Slider
        type="range"
        min="0"
        max="360"
        value={hue}
        onChange={handleChange}
        hue={hue}
      />
      <ThumbPreview style={{ backgroundColor: `hsl(${hue}, 100%, 50%)` }} />
    </Wrapper>
  );
};

export default ColorSlider;

const Wrapper = styled.div`
  position: relative;
  width: 300px;
`;

const Slider = styled.input<{ hue: number }>`
  -webkit-appearance: none;
  width: 100%;
  height: 16px;
  border-radius: 8px;
  background: linear-gradient(
    to right,
    red 0%,
    yellow 17%,
    lime 33%,
    cyan 50%,
    blue 67%,
    magenta 83%,
    red 100%
  );
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: hsl(${(props) => props.hue}, 100%, 50%);
    border: 4px solid white;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
    margin-top: -6px;
  }

  &::-moz-range-thumb {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: hsl(${(props) => props.hue}, 100%, 50%);
    border: 4px solid white;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  }
`;

const ThumbPreview = styled.div`
  margin-top: 12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #ccc;
`;
