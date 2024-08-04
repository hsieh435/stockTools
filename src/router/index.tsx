import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginScreen from "./../view/loginScreen";
import MainView from "./../view/mainView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/",
    element: <MainView />,
    // children: [
    //   {
    //     path: "/products",
    //     element: <Products />,
    //   },
    //   {
    //     path: "/user",
    //     element: <User />,
    //   },
    // ],
  },
]);

// function App() {
//   return <RouterProvider router={router} />;
// }


export default router;
