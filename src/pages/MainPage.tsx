import styled from "@emotion/styled";
import CanvasBoard from "../components/CanvasBoard";
import { useOutletContext } from "react-router-dom";
import React, { useEffect, useRef } from "react";

type ContextType = {
  setMousePos: (pos: { x: number; y: number } | null) => void;
  selectedColor: string;
  scale: number;
  offset: { x: number; y: number };
  setOffset: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
  setScale: React.Dispatch<React.SetStateAction<number>>;
  isLocked: boolean;
};

const MainPage = () => {
  const {
    setMousePos,
    selectedColor,
    scale,
    offset,
    setOffset,
    setScale,
    isLocked,
  } = useOutletContext<ContextType>();

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleWheel = (e: WheelEvent) => {
      if (isLocked) return;
      e.preventDefault();
      const zoomIntensity = 0.01;
      const direction = e.deltaY > 0 ? -1 : 1;
      const factor = 1 + direction * zoomIntensity;

      const rect = wrapper.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const newScale = Math.min(Math.max(1, scale * factor), 50);
      const dx = (mouseX - offset.x) / scale;
      const dy = (mouseY - offset.y) / scale;

      const newOffset = {
        x: offset.x - dx * (newScale - scale),
        y: offset.y - dy * (newScale - scale),
      };

      setScale(newScale);
      setOffset(newOffset);
    };

    wrapper.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
    };
  }, [scale, offset, setOffset, setScale]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isLocked) return;
    e.preventDefault();
    isDragging.current = true;
    dragStart.current = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isLocked) return;
    if (!isDragging.current) return;
    const newOffset = {
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    };
    setOffset(newOffset);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const dragStart = useRef({ x: 0, y: 0 });
  const isDragging = useRef<boolean>(false);

  return (
    <PageWrapper
      ref={wrapperRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <CanvasBoardWrapper
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <CanvasBoard
          selectedColor={selectedColor}
          scale={scale}
          offset={offset}
          onMouseMove={(pos) => setMousePos(pos)}
        />
      </CanvasBoardWrapper>
    </PageWrapper>
  );
};

export default MainPage;

const PageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CanvasBoardWrapper = styled.div`
  position: absolute;
  left: 312px;
  top: 9rem;
  width: fit-content;
  height: fit-content;
`;
