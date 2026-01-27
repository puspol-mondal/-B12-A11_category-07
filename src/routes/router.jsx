import { createBrowserRouter } from "react-router";

import RootLayout from "../layouts/RootLayout/RootLayout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Register from "../pages/Auth/Register/Register";
import Login from "../pages/Auth/Login/Login";
import ResetPassword from "../pages/Auth/ResetPassword/ResetPassword";
import Decorator from "../pages/Decorator/Decorator";
import PrivateRoute from "./privateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "home",
        loader: () => fetch("serviceCenter.json").then((res) => res.json()),
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "decorator",
        element: (
          <PrivateRoute>
            <Decorator />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "resetPassword",
        element: <ResetPassword />,
      },
    ],
  },
]);
