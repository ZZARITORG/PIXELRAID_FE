import "@emotion/react";
import { DefaultTheme } from "./theme";

declare module "@emotion/react" {
  export type Theme = DefaultTheme;
}
