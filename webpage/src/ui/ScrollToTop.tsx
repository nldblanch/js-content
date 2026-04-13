import { ArrowUp } from "lucide-react";
import { useLayoutEffect, useState } from "react";

const SCROLL_THRESHOLD = 300;
const visibleClasses = "opacity-100 cursor-pointer";
const hiddenClasses = "opacity-0 pointer-events-none";

export const ScrollToTop = () => {
    const [show, setShow] = useState(false);
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useLayoutEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > SCROLL_THRESHOLD);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`transition-all duration-500 fixed bottom-4 right-4 bg-blue text-black-700 font-bold rounded-full p-3 shadow-lg hover:bg-blue-hover ${show ? visibleClasses : hiddenClasses}`}
            aria-label="Scroll to top"
        >
            <ArrowUp />
        </button>
    );
}