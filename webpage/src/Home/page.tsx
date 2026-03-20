import { Link } from "react-router";
import { getAsset } from "../utils/getAsset";
import routes from "../routes";
import { VSCodeWindow } from "../ui/VSCodeWindow";
import { useState } from "react";

export default function Home() {
    const DEFAULT_VALUE = "Your name here...";
    const [value, setValue] = useState(DEFAULT_VALUE);
    const [showTip, setShowTip] = useState(false);
    return (
        <div className="page-container">

            {/* Making JavaScript Easy */}
            <div className="flex flex-col grow-0 max-w-fit items-end justify-center">
                <h1 className="text-6xl font-libre font-extrabold leading-tight text-white">
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
                <p className="text-gray text-3xl font-normal px-8 font-fira mx-auto text-center">A comprehensive course designed for beginners to master JavaScript fundamentals through hands-on exercises.</p>
            </div>
            <Link to={routes.SETUP.path} className="bg-blue px-8 py-2 rounded-4xl max-h-68 flex items-center justify-center">
                <button className="text-black-700 font-bold font-fira text-3xl">
                    Start Learning
                </button>
                <div className="p-4">
                    <img src={getAsset('arrow.svg')} className="inline-block h-8 text-black-700" />
                </div>
            </Link>

            {/* Code block */}
            <div className="my-4 w-full">

                <VSCodeWindow title="example.js" code={
                    `function greetStudent(name) {
    const message = \`Welcome to the JavaScript course, \${name}!\`;
    console.log(message);
    return message;
  }
  
  // Try it yourself`
                }>
                    <div className="space-y-2">
                    <form action={() => {
                        setShowTip(true);
                        console.log(`Welcome to the JavaScript course, ${value}!`)
                    }} className="flex text-white font-fira items-center">
                        <span className="text-[#dcdcaa]">{'greetStudent'}</span>
                        <span>{'('}</span>
                        <span className="text-[#ce9178]">{'"'}</span>
                        <input
                            type="text"
                            placeholder=""
                            className="text-[#ce9178] border-none outline-none"
                            value={value}
                            id="auto"
                            style={{ width: `${Math.max(value.length, 1)}ch` }}
                            onChange={(e) => {
                                setValue(e.currentTarget.value);
                            }}
                            onBlur={(e) => {
                                if (e.currentTarget.value === "") {
                                    setValue(DEFAULT_VALUE);
                                }
                            }}
                        />
                        <span className="text-[#ce9178]">{'"'}</span>
                        <span>{');'}</span>
                    </form>
                    {showTip && <span className="text-[#6a9955] font-fira">// Check the console!</span>}
                    </div>

                </VSCodeWindow>
            </div>

            {/* Course topics */}
            <h2 className="text-white text-4xl font-libre">Course Topics</h2>
            <p className="text-gray text-2xl font-normal font-fira mx-auto">The included exercises will teach you some of the following Skills.</p>
            <ul className="text-gray w-full gap-x-10.5 gap-y-5.5 text-2xl font-normal font-fira mx-auto grid grid-cols-2">
                {["Variables and Data Types", "Functions", "Problem Solving", "Unit Testing", "Modern JavaScript"].map((topic) => (
                    <li className="w-full bg-black-900 rounded-4xl px-6 py-8 space-x-6" key={topic}>
                        <img src={getAsset('tick.svg')} className="inline-block h-12" />
                        <span>{topic}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}