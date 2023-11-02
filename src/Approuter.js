import React, { lazy, Suspense } from "react";
import { useState } from "react";
import { useRoutes } from "react-router";
import Loading from "./Componetns/Loading";
import Dropbox from "./Componetns/Dropbox";
import Dashboard from "./Pages/Dashboard";
import Redirect from "./Pages/Redirect";
import MarathonForm from "./Pages/MarathonForm";


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
      path: "dropbox",
      element:(
        <Suspense fallback={<Loading />}>
           <Dropbox />
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
    {
      path: "add",
      element: (
        <Suspense fallback={<Loading />}>
          <MarathonForm />
        </Suspense>
      ),
    },
    {
      path: "edit/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <MarathonForm isEdit />
        </Suspense>
      ),
    },
  ];
  const routes = useRoutes(testroutes);
  return routes;
};

export default AppRouter;
