import { useEffect } from "react";

export function usePreloadClass() {
    useEffect(() => {
        document.body.classList.add("is-preload");

        const clearPreload = () => {
            document.body.classList.remove("is-preload");
        };

        if (document.readyState === "complete") {
            window.setTimeout(clearPreload, 0);
        } else {
            window.addEventListener("load", clearPreload, { once: true });
        }

        return () => {
            window.removeEventListener("load", clearPreload);
            clearPreload();
        };
    }, []);
}
