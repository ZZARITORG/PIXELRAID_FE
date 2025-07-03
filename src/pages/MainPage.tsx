import styled from "@emotion/styled";
import CanvasBoard from "../components/CanvasBoard";
import theme from "../styles/theme";
import SideBox from "../components/SideBox";
import { useState } from "react";

const MainPage = () => {
  const [selectedColor, setSelectedColor] = useState<string>(
    `${theme.color.neutral.black}`
  );
  return (
    <PageWrapper>
      <SideBoxWrapper>
        <SideBox
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </SideBoxWrapper>
      <CanvasBoardWrapper>
        <CanvasBoard selectedColor={selectedColor} />
      </CanvasBoardWrapper>
    </PageWrapper>
  );
};

export default MainPage;

const PageWrapper = styled.div`
  position: relative;
  display: flex;
`;

const CanvasBoardWrapper = styled.div`
  position: absolute;
  left: 312px;
`;

const SideBoxWrapper = styled.div`
  position: fixed;
  left: 12px;
  top: 9rem;
  z-index: 10;
`;
