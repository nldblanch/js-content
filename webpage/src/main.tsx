import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router";
import RootLayout from "./RootLayout";
import Instructions from "./Instructions";
import CLI from "./CLI";
import routes from "./routes";
import Home from "./Home";
import { BASE_URL, CLI_FEATURE_FLAG } from "./config";

const basename = BASE_URL === "/" ? undefined : BASE_URL.replace(/\/$/, "");

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
      {
        path: "/",
        element: <Home />,
      },
        {
          path: routes.INSTRUCTIONS.path,
          element: <Instructions />,
        },
        {
          path: routes.INSTRUCTION_DETAIL.path,
          element: <Instructions />,
        },
        ...(CLI_FEATURE_FLAG
          ? [{ path: routes.CLI.path, element: <CLI /> }]
          : []),
        {
          path: "*",
          element: (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <h1>404 Not Found</h1>
              <p>The page you are looking for does not exist.</p>
              <Link to={routes.HOME.path}>Go back to Home</Link>
            </div>
          ),
        },
      ],
    },
  ],
  { basename },
);

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error('Root element "#root" not found');

createRoot(rootEl).render(<RouterProvider router={router} />);
