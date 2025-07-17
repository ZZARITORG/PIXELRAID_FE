import React, { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";

const PIXEL_SIZE = 1;

export type CanvasBoardProps = {
  selectedColor: string;
  scale: number;
  offset: { x: number; y: number };
  onMouseMove?: (pos: { x: number; y: number } | null) => void;
  onPan?: (offset: { x: number; y: number }) => void;
  onScaleChange?: (scale: number) => void;
};

const CanvasBoard = ({
  selectedColor,
  scale,
  offset,
  onMouseMove,
  onPan,
  onScaleChange,
}: CanvasBoardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const isDragging = useRef<boolean>(false);
  const mouseDownTime = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = theme.color.neutral.white;
        ctx.fillRect(0, 0, 2400, 1240);
      }
    }
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const zoomIntensity = 0.01;
      const direction = e.deltaY > 0 ? -1 : 1;
      const factor = 1 + direction * zoomIntensity;
      const newScale = Math.min(Math.max(1, scale * factor), 50);

      const dx = (mouseX - offset.x) / scale;
      const dy = (mouseY - offset.y) / scale;

      const newOffset = {
        x: offset.x - dx * (newScale - scale),
        y: offset.y - dy * (newScale - scale),
      };

      onScaleChange?.(newScale);
      onPan?.(newOffset);
    };

    wrapper.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
    };
  }, [scale, offset, onPan, onScaleChange]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    mouseDownTime.current = Date.now();
    dragStart.current = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (isDragging.current) {
      const newOffset = {
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y,
      };
      onPan?.(newOffset);
    } else {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (
        mouseX < rect.left ||
        mouseX > rect.right ||
        mouseY < rect.top ||
        mouseY > rect.bottom
      ) {
        onMouseMove?.(null);
        return;
      }

      const x = Math.floor((mouseX - rect.left) * (2400 / rect.width));
      const y = Math.floor((mouseY - rect.top) * (1240 / rect.height));

      onMouseMove?.({ x, y });
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const hexToRGB = (hex: string) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (Date.now() - mouseDownTime.current > 150) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const rawX = (e.clientX - rect.left) * (2400 / rect.width);
    const rawY = (e.clientY - rect.top) * (1240 / rect.height);
    const x = Math.max(0, Math.min(2399, Math.floor(rawX)));
    const y = Math.max(0, Math.min(1239, Math.floor(rawY)));

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const currentColor = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
    const selectedRGB = hexToRGB(selectedColor);
    const isSameColor = currentColor === selectedRGB;

    ctx.fillStyle = isSameColor ? theme.color.neutral.white : selectedColor;
    ctx.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
  };

  return (
    <OuterWrapper
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <CanvasWrapper>
        <canvas
          ref={canvasRef}
          width={2400}
          height={1240}
          onClick={handleCanvasClick}
        />
      </CanvasWrapper>
    </OuterWrapper>
  );
};

export default CanvasBoard;

const OuterWrapper = styled.div`
  width: 1200px;
  height: 620px;
  overflow: hidden;
`;

const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
  background-color: ${theme.color.neutral.white};

  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
