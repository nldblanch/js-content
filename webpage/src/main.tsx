import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Root.tsx';

const baseUrl = import.meta.env.BASE_URL;
const basename = baseUrl === "/" ? undefined : baseUrl.replace(/\/$/, "");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // {
      //   path: "team",
      //   element: <Team />,
      //   loader: teamLoader,
      // },
    ],
  },
], { basename });

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error('Root element "#root" not found');

createRoot(rootEl).render(
  <RouterProvider router={router} />
);