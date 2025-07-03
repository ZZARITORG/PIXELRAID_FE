import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import theme from "../styles/theme";
import Topbar from "../components/common/Topbar";

const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <TopBarWrapper>
        <Topbar />
      </TopBarWrapper>
      <SideAdvertiseWrapper></SideAdvertiseWrapper>
      <BottomAdvertiseWrapper></BottomAdvertiseWrapper>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </LayoutContainer>
  );
};

export default DefaultLayout;

const LayoutContainer = styled.div`
  position: relative;
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
  height: 100%;
  padding-top: 8rem;
  box-sizing: border-box;
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
