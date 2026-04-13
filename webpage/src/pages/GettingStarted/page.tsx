import { Accordion } from "@src/ui/Accordion";
import { Heading } from "@src/ui/Heading";
import { Text } from "@src/ui/Text";

const sections = {
    installation: {
        title: "Installation",
        id: "installation",
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
            <Heading text="Getting Started" highlight />
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
                <Heading text={sections.installation.title} />
                {[
                    { title: "Installing NPM" },
                    { title: "Installing VS Code" },
                    { title: "Cloning the repository" },
                    { title: "Installing dependencies" },
                ].map(({ title }, idx) => {
                    return (
                        <section key={title} className="bg-black-800 rounded-lg w-full text-white justify-center items-center flex flex-col py-4">
                            <h2 className="flex relative items-center justify-center w-full text-4xl font-fira mb-4">
                                <span className="text-4xl text-orange absolute left-0 translate-x-1/2">{idx + 1}.</span>{' '}
                                <span className="text-2xl">{title}</span>
                            </h2>
                            <Text variant="small" text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesentium laudantium nisi, quam, vero officiis eveniet minima harum deserunt illum, labore vitae. Aut vero, autem aliquid obcaecati quia dolorum nesciunt recusandae." />
                            <div className="px-8 w-full">
                                <Accordion title="More info" titleClass="ml-auto">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste tempora accusantium provident placeat harum, eveniet nam in! Cupiditate natus sequi, temporibus, maxime ea ipsa repellendus suscipit aperiam quas, sapiente quis?
                                </Accordion>
                            </div>
                        </section>
                    )
                })}
            </div>

        </div>
    );
}