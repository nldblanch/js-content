import { Link } from "react-router";
import { getAsset } from "../utils/getAsset";
import routes from "../routes";

export default function Home() {

    return (
        <div className="page-container">

            <div className="flex flex-col grow-0 max-w-fit items-end justify-center">
                <h1 className="text-6xl font-sans font-extrabold leading-tight text-white">
                    Making JavaScript{' '}
                    <span className="relative inline-block text-blue">
                        Easy
                        <img
                            src={getAsset('underline.svg')}
                            alt=""
                            aria-hidden="true"
                            className="pointer-events-none absolute left-0 top-full block w-full select-none"
                        />
                    </span>
                </h1>
            </div>
            <div className="w-full">
                <p className="text-gray text-4xl font-normal px-8 font-fira mx-auto">A comprehensive course designed for beginners to master JavaScript fundamentals through hands-on exercises.</p>
            </div>
            <Link to={routes.SETUP.path} className="bg-blue px-4 py-2 rounded-3xl max-h-68 flex items-center justify-center">
                <button className="text-black-700 font-bold font-fira text-3xl">
                    Start Learning
                </button>
                <div className="p-4">
                    <img src={getAsset('arrow.svg')} className="inline-block h-8 text-black-700" />
                </div>
            </Link>
        </div>
    );
}