import { getAsset } from "@src/utils/getAsset";
import { Link } from "react-router";
import routes from "@src/routes";

/**
 *The page to be displayed to the user, informing them that the path is not recognised. Displays a Not Found Error. 
 Is rendered on any path that the application is not explicitly designed to handle.
 */
export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full text-center space-y-8 px-4">
      {/* 404 Heading with the 'Easy' style theme */}
      <h1 className="text-7xl font-libre font-extrabold text-white">
        404
        <span className="block text-3xl text-blue mt-2">Page Not Found</span>
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
  );
}
