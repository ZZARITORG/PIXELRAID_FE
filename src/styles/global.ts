import { css } from "@emotion/react";

const globalStyle = css`
  * {
    font-family: "Pretendard", "system-ui", "-apple-system",
      "BlinkMacSystemFont", "Open Sans", "Helvetica Neue", sans-serif;
  }

  body {
    font-family: "Pretendard Variable", sans-serif;
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
