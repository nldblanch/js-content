import { Accordion } from "@src/ui/Accordion";
import { Heading } from "@src/ui/Heading";
import { Text } from "@src/ui/Text";
import { getAsset } from "@src/utils/getAsset";

const checklist = [
    {
        title: "Software:",
        items: [
            "Node.js (package manager)",
            "Visual Studio Code (code editor)",
            "Git (version control system)",
        ]
    },
    {
        title: "Tools",
        items: [
            "JavaScript (programming language)",
            "GitHub (online code repository)",
            "Terminal (command line interface)",
        ]
    }
]

const sections = {
    installation: {
        title: "Installation",
        id: "installation",
        content: [
            {
                title: "Installing NPM",
                info: "Install Node.js from the Company Portal. Node.js includes NPM (Node Package Manager), which we use to download and run everything this project needs.",
                moreInfo: "In Company Portal, install the approved Node.js package. After it installs, open a Command Terminal (NOT a Powershell) and run: node -v and npm -v to check that it has installed. If you get an error or it says the commands aren’t recognized, try restarting your terminal.",
                instructions: [
                    "- Go to the Company Portal app on your computer.",
                    "- Search for Node.js in the available software and click Install.",
                    "- After installation, open a Command Terminal and run node -v and npm -v to verify the installation."
                ]
            },
            {
                title: "Installing VS Code",
                info: "Install Visual Studio Code from the Company Portal. VS Code is the editor you’ll use to open the project folder, follow instructions, and make changes.",
                moreInfo: "After installing, open VS Code and use File → Open Folder… to open the project. You won't have the project yet if you haven't completed the next step (cloning the repo).",
                instructions: [
                    "- Go to the Company Portal app on your computer.",
                    "- Search for Visual Studio Code in the available software and click Install.",
                    "- After installation, open VS Code and use File → Open Folder… to open the project folder (after you’ve cloned the repo in the next step)."
                ]
            },
            {
                title: "Cloning the repository",
                info: "Download Git from the Company Portal if you don’t have it. Then clone the project repository from GitHub. This creates a local copy of the project on your machine that you can work with.",
                moreInfo: "In the GitHub repository, click the green Code button and copy the URL. In your Command Terminal, navigate to the folder where you want to put the project (e.g. Documents) and run: git clone [paste URL here]. This will create a new folder with the project files.",
                instructions: [
                    "- Go to the GitHub repository page.",
                    "- Click the green Code button and copy the URL.",
                    "- Open a Command Terminal and navigate to the folder where you want to put the project (e.g. Documents) using the cd command.",
                    "- Run git clone [paste URL here] to clone the repository to your local machine."
                ]
            },
            {
                title: "Installing dependencies",
                info: "Install the project’s required packages (dependencies). This is a one-time setup step for each project copy.",
                moreInfo: "In your terminal, change into the project folder (the one that contains package.json) and run: npm install. The first install can take a few minutes. You can use the terminal in VS Code (Terminal → New Terminal) or your Command Terminal for this step. There are a few subdirectories in the project, but for now you only need to run npm install in the main project folder (not in any of the subdirectories).",
                instructions: [
                    "- Open a terminal (either Command Terminal or the terminal in VS Code).",
                    "- Change into the project folder using cd [project folder name]. This is the folder that contains package.json.",
                    "- Run npm install to install the required dependencies. This may take a few minutes."
                ]
            },
        ]
    },
    commonErrors: {
        title: "Common Errors",
        id: "common-errors",
        content: [
            {
                title: "Node/npm not recognized",
                info: "Consult Chester on the error",
                moreInfo: "Try restarting your terminal or computer first. If that doesn’t work, you may need to add Node.js to your system PATH manually. You can search online for instructions on how to do this for your operating system.",
            },
            {
                title: "Jest not found",
                info: "Have you run npm install?",
                moreInfo: "Make sure you have changed directory into the same level that the package.json file is in before running npm install. If you have and it’s still not working, try deleting node_modules and package-lock.json and running npm install again.",
            },
            {
                title: "Can't find script",
                info: "Make sure you are running the command in the correct directory",
                moreInfo: "Some commands need to be run in specific subdirectories. Check the instructions for the command you’re trying to run and make sure you’ve changed into the correct directory using cd [directory name]."
            }
        ]
    },
    commands: {
        title: "Commands",
        id: "commands",
    }
}

export default function GettingStarted() {

    return (
        <div className="page-container">
            {/* Getting Started */}
            <Heading variant="xl" text="Getting Started" highlight />
            <Text text="This is the guide to setting up your environment and getting started!" />
            <Text text="Below are buttons so you can skip to the necessary sections." />
            <ul className="grid grid-flow-col auto-cols-fr gap-2 w-full max-md:grid-flow-row">
                {Object.values(sections).map(({ title, id }, idx) => {
                    const background = idx % 2 === 0 ? "bg-blue" : "bg-blue-accent";
                    const hoverBackground = idx % 2 === 0 ? "hover:bg-blue-hover" : "hover:bg-blue-accent-hover";
                    return (
                        <li className={`${background} ${hoverBackground} px-8 py-2 rounded-full w-full`}>
                            <a key={id} href={`#${id}`}>
                                <button className="cursor-pointer font-fira text-3xl w-full">
                                    <Text text={title} className="text-black-800 font-bold" />
                                </button>
                            </a>
                        </li>
                    )
                })}
            </ul>

            {/* Checklist */}
            <div className="grid max-md:grid-cols-1 grid-cols-2 rounded-4xl bg-black-800 w-full gap-4">
                {checklist.map(({ title, items }) => {
                    return (
                        <div key={title} className="p-6 space-y-2">
                            <Heading variant="md" font="fira" className="font-medium" text={title} highlight />
                            <ul className="space-y-2">
                                {items.map(item => (
                                    <li key={item} className="flex items-center justify-start space-x-2">
                                        <img className="h-8.5 block" src={getAsset('bluetick.svg')} />
                                        <Text text={item} className="text-left ml-2" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>

            {/* Installation */}
            <div id={sections.installation.id} className="mt-16 justify-items-center space-y-6 w-full">
                <Heading variant="xl" text={sections.installation.title} />
                {sections.installation.content.map(({ title, info, moreInfo, instructions }, idx) => {
                    return (
                        <section key={title} className="bg-black-800 rounded-lg w-full text-white justify-center items-center flex flex-col py-4">
                            <Heading
                                as="h2"
                                noWrapper
                                font="fira"
                                variant='md'
                                className="flex relative items-center justify-center w-full font-fira mb-4"
                            >
                                <span className="text-3xl text-orange absolute left-0 translate-x-1/2">{idx + 1}.</span>{' '}
                                <span>{title}</span>
                            </Heading>
                            <Text variant="sm" text={info} className="px-8" />
                            <div className="px-8 w-full">
                                <Accordion title="More info" titleClass="ml-auto" contentClass=" text-center">
                                    <Text variant="sm" text={moreInfo} className="text-left mb-4" />
                                    <ul>
                                        {instructions?.map((instruction, idx) => (
                                            <li key={idx}>
                                                <Text variant="sm" text={instruction} className="text-left" />
                                            </li>
                                        ))}
                                    </ul>
                                </Accordion>
                            </div>
                        </section>
                    )
                })}
            </div>

            {/* Common Errors */}
            <div id={sections.commonErrors.id} className="mt-16 p-6 space-y-6 border-orange border-2 justify-items-center w-full bg-black-800 rounded-4xl">
                <Heading variant="md" noWrapper font="fira" className="font-normal text-center relative w-full max-w-none">
                    <img className="max-h-8.5 text-orange absolute left-0 " src={getAsset('warning.svg')} alt="!" />{' '}
                    <span>{sections.commonErrors.title}</span>
                </Heading>
                <ul className="w-full space-y-6">
                    {sections.commonErrors.content.map(({ title, info, moreInfo }) => {
                        return (
                            <li key={title} className="border-l-3 px-4 border-orange flex flex-col">
                                <Heading as='h3' className="font-normal" variant="md" font='fira' text={title} />
                                <Text variant="sm" text={info} className="ml-0 text-left" />
                                <Accordion title="More info" titleClass="ml-auto" contentClass="">
                                    <Text variant="sm" text={moreInfo} className="text-left" />
                                </Accordion>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}