import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage";
import DefaultLayout from "../layouts/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ path: "", element: <MainPage /> }],
  },
]);

export default router;
