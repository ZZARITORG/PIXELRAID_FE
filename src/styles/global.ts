import { css } from "@emotion/react";
import theme from "./theme";

const globalStyle = css`
  * {
    font-family: "Pretendard", "system-ui", "-apple-system",
      "BlinkMacSystemFont", "Open Sans", "Helvetica Neue", sans-serif;
    box-sizing: border-box;
  }

  body {
    font-family: "Pretendard Variable", sans-serif;
    background-color: ${theme.color.neutral.B40};
  }

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export default globalStyle;
