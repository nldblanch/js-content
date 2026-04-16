import "./index.css";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router";
import { RootLayout, Home, Instructions, GettingStarted } from "@src/pages";
import routes from "@src/routes";
import { BASE_URL, CLI_FEATURE_FLAG } from "./config";
import { getAsset } from "./utils/getAsset";
import { Loader } from "./ui/Loader";
import { lazyWithMinDelay } from "./utils/lazy";

const CLI = lazyWithMinDelay(() => import("./CLI"), 500);

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
          path: "*",
          element: (
            <div className="flex flex-col items-center justify-center min-h-[70vh] w-full text-center space-y-8 px-4">
              {/* 404 Heading with the 'Easy' style theme */}
              <h1 className="text-7xl font-libre font-extrabold text-white">
                404
                <span className="block text-3xl text-blue mt-2">
                  Page Not Found
                </span>
              </h1>

              {/* Description using the Home page paragraph style */}
              <p className="text-gray text-2xl font-fira max-w-md">
                The page you are looking for does not exist.
              </p>

              {/* Button styled like the "Start Learning" button */}
              <Link
                to={routes.HOME.path}
                className="bg-blue px-10 py-3 rounded-4xl flex items-center justify-center"
              >
                <span className="text-black-700 font-bold font-fira text-2xl">
                  Back to Home
                </span>
                <div className="flex items-center pl-3 py-0 h-full">
                  <img
                    src={getAsset("arrow.svg")}
                    className="h-6 w-auto block text-black-700"
                    alt=""
                  />
                </div>
              </Link>
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
