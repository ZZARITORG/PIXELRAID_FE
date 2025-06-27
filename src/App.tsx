import { Global, ThemeProvider } from "@emotion/react";
import "./App.css";
import theme from "./styles/theme";
import globalStyle from "./styles/global";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
