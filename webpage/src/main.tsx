import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Root';
import Instructions from "./Instructions";

const baseUrl = import.meta.env.BASE_URL;
const basename = baseUrl === "/" ? undefined : baseUrl.replace(/\/$/, "");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/instructions",
    element: <Instructions />,
  },
  {
    path: "/instructions/:slug",
    element: <Instructions />,
  },
], { basename });

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error('Root element "#root" not found');

createRoot(rootEl).render(
  <RouterProvider router={router} />
);