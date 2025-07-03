import React, { useRef } from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";

const PIXEL_SIZE = 2;

type CanvasBoardProps = {
  selectedColor: string;
};

const CanvasBoard = ({ selectedColor }: CanvasBoardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(e.clientX - rect.left);
    const y = Math.floor(e.clientY - rect.top);

    ctx.fillStyle = selectedColor;
    ctx.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
  };

  return (
    <CanvasWrapper>
      <canvas
        ref={canvasRef}
        width={1200}
        height={620}
        onClick={handleCanvasClick}
      />
    </CanvasWrapper>
  );
};

export default CanvasBoard;

const CanvasWrapper = styled.div`
  width: 1200px;
  height: 620px;
  image-rendering: pixelated;
  background-color: ${theme.color.neutral.white};

  canvas {
    display: block;
  }
`;
