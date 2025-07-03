import styled from "@emotion/styled";
import React from "react";
import theme from "../../styles/theme";
import { Icons } from "../../assets/icons";

const Topbar = () => {
  const { logo_icon: LogoIcon } = Icons;
  return (
    <TopbarContainer>
      <LogoWrapper>
        <LogoIcon />
        <CoordinateWrapper>
          <span>x: </span>
          <span>y: </span>
        </CoordinateWrapper>
      </LogoWrapper>
    </TopbarContainer>
  );
};

export default Topbar;

const TopbarContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 104px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const CoordinateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font: ${theme.typography["body3-2"]};
  color: ${theme.color.neutral.white};
`;
