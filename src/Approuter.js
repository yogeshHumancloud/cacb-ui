import React, { lazy, Suspense } from "react";
import { useState } from "react";
import { useRoutes } from "react-router";
import Loading from "./Componetns/Loading";
import Dashboard from "./Pages/Dashboard";
import Redirect from "./Pages/Redirect";

const Login = lazy(() => import("./Pages/Login"));
const ForgotPassWord = lazy(() => import("./Pages/ForgotPassWord"));

const AppRouter = () => {
  const testroutes = [
    {
      path: "/",
      element: <Redirect />,
    },
    {
      path: "login/*",
      element: (
        <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "forgotpassword",
      element: (
        <Suspense fallback={<Loading />}>
          <ForgotPassWord />
        </Suspense>
      ),
    },

    {
      path: "forgotpassword",
      element: (
        <Suspense fallback={<Loading />}>
          <ForgotPassWord />
        </Suspense>
      ),
    },
    {
      path: "dashboard",
      element: (
        <Suspense fallback={<Loading />}>
          <Dashboard />
        </Suspense>
      ),
    },
  ];
  const routes = useRoutes(testroutes);
  return routes;
};

export default AppRouter;
