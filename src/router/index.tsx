import { createBrowserRouter } from "react-router-dom";

import { DefaultLayout } from "@/layouts/default";
import { HomePage } from "@/pages/home";
import { InfosPage } from "@/pages/infos";

export const routes = createBrowserRouter([
  {
    path: "/",

    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/infos",
        element: <InfosPage />,
      },
    ],
  },
]);
