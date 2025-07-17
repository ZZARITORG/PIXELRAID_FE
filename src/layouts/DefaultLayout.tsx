// ✅ DefaultLayout.tsx
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import theme from "../styles/theme";
import Topbar from "../components/common/Topbar";
import SideBox from "../components/SideBox";
import { useState } from "react";

const DefaultLayout = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const [selectedColor, setSelectedColor] = useState<string>(
    theme.color.neutral.black
  );
  const [isLocked, setIsLocked] = useState<boolean>(false);

  return (
    <LayoutContainer>
      <TopBarWrapper>
        <Topbar mousePos={mousePos} />
      </TopBarWrapper>

      <SideAdvertiseWrapper />
      <BottomAdvertiseWrapper />

      <SideBoxWrapper>
        <SideBox
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          isLocked={isLocked}
          setIsLocked={setIsLocked}
        />
      </SideBoxWrapper>

      <CanvasViewport>
        <Outlet
          context={{
            setMousePos,
            scale,
            offset,
            setOffset,
            selectedColor,
            setScale,
            isLocked,
          }}
        />
      </CanvasViewport>
    </LayoutContainer>
  );
};

export default DefaultLayout;

const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: ${theme.color.neutral.B40};
`;

const TopBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 7rem;
  z-index: 10;
  background-color: transparent;
`;

const CanvasViewport = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;

const SideAdvertiseWrapper = styled.div`
  width: 160px;
  height: 500px;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: ${theme.color.neutral.black};
`;

const BottomAdvertiseWrapper = styled.div`
  width: 728px;
  height: 90px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${theme.color.neutral.black};
  z-index: 10;
`;

const SideBoxWrapper = styled.div`
  position: fixed;
  left: 12px;
  top: 9rem;
  z-index: 10;
`;
