import React from "react";
import SideBox from "../components/SideBox";
import styled from "@emotion/styled";

const MainPage = () => {
  return (
    <PageWrapper>
      <SideBox />
    </PageWrapper>
  );
};

export default MainPage;

const PageWrapper = styled.div`
  background-color: black;
`;
