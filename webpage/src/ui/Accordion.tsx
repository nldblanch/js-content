import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
    title: string;
    children: React.ReactNode;
    titleClass?: string;
    contentClass?: string;
}
export const Accordion = ({ title, children, titleClass, contentClass }: Props) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="text-gray font-fira w-full flex flex-col grow">
            <button
                onClick={() => setOpen(!open)}
                className={`flex items-center gap-2 cursor-pointer hover:bg-black-900 px-4 py-2 text-center ${titleClass}`}
            >
                {title}
                <ChevronDown className={`inline-block transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && (
                <div className={`mt-2 ${contentClass}`}>
                    {children}
                </div>
            )}
        </div>
    );
};