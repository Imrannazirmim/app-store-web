import { createBrowserRouter } from "react-router";
import RootLayout from "../Components/Layout/RootLayout.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import Home from "../Pages/Home.jsx";
import Apps from "../Pages/Apps.jsx";
import Installation from "../Pages/Installation.jsx";
import AppErrorPage from "../Pages/AppErrorPage.jsx";
import AppDetails from "../Components/Layout/AppDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <AppErrorPage />,
    children: [
      { index: true, Component: Home },
      {
        path: "apps",
        children: [
          { index: true, Component: Apps },
          { path: ":id", Component: AppDetails },
        ],
      },
      { path: "installation", Component: Installation },
      { path: "*", Component: ErrorPage },
    ],
  },
]);
