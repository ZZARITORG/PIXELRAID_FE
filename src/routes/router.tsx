import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [{ path: "", element: <MainPage /> }],
  },
]);

export default router;
