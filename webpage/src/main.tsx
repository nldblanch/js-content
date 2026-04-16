import "./index.css";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { BASE_URL, CLI_FEATURE_FLAG } from "@src/config";
import { Loader } from "@src/ui/Loader";
import { lazyWithMinDelay } from "@src/utils/lazy";
import { GettingStarted, Home, Instructions, RootLayout, ErrorPage} from "@src/pages";
import routes from "@src/routes";

const CLI = lazyWithMinDelay(() => import("@src/CLI"), 500);

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
        {
          path: routes.SETUP.path,
          element: <GettingStarted />,
        },
        ...(CLI_FEATURE_FLAG
          ? [
            {
              path: routes.CLI.path,
              element: (
                <Suspense
                  fallback={
                    <Loader />
                  }
                >
                  <CLI />
                </Suspense>
              ),
            },
          ]
          : []),
        {
          // If path does not match any of the above, render error page
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ],
  { basename },
);

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error('Root element "#root" not found');

createRoot(rootEl).render(<RouterProvider router={router} />);
