import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from 'react-router';
import RootLayout from './RootLayout';
import Instructions from "./Instructions";
import routes from "./routes";

const baseUrl = import.meta.env.BASE_URL;
const basename = baseUrl === "/" ? undefined : baseUrl.replace(/\/$/, "");

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/instructions/:slug",
        element: <Instructions />,
      },
      {
        path: "*",
        element: <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <h1>404 Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <Link to={routes.HOME.path}>Go back to Home</Link>
        </div>,
      }
    ]
  },
], { basename });

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error('Root element "#root" not found');

createRoot(rootEl).render(
  <RouterProvider router={router} />
);