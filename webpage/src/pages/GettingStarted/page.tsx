import { Accordion } from "@src/ui/Accordion";
import { Heading } from "@src/ui/Heading";
import { Text } from "@src/ui/Text";

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
            <Heading variant="xxl" text="Getting Started" highlight />
            <Text text="This is the guide to setting up your environment and getting started!" />
            <Text text="Below are buttons so you can skip to the necessary sections." />
            <div className="grid grid-flow-col auto-cols-fr gap-2 w-full">
                {Object.values(sections).map(({ title, id }, idx) => {
                    const background = idx % 2 === 0 ? "bg-blue" : "bg-blue-accent";
                    const hoverBackground = idx % 2 === 0 ? "hover:bg-blue-hover" : "hover:bg-blue-accent-hover";
                    return (
                        <a key={id} href={`#${id}`} className={`${background} ${hoverBackground} px-8 py-2 rounded-full w-full`}>
                            <button className="text-black-700 cursor-pointer font-bold font-fira text-3xl w-full">
                                {title}
                            </button>
                        </a>
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
                                className="flex relative items-center justify-center w-full text-4xl font-fira mb-4"
                            >
                                <span className="text-4xl text-orange absolute left-0 translate-x-1/2">{idx + 1}.</span>{' '}
                                <span className="text-2xl">{title}</span>
                            </Heading>
                            <Text variant="sm" text={info} />
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

        </div>
    );
}