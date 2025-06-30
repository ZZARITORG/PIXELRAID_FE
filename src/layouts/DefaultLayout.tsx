import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import theme from "../styles/theme";

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <TopBarWrapper></TopBarWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </LayoutContainer>
  );
};

export default DefaultLayout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${theme.color.neutral.B40};
`;

const TopBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 7rem;
  z-index: 10;
`;

const OutletWrapper = styled.div`
  min-height: calc(100vh - 7rem);
  padding-top: 7rem;
  box-sizing: border-box;
`;
