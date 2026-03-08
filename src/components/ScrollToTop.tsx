import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Wrap in setTimeout to ensure it runs after render/paint cycle
        // Using 0ms timeout pushes it to the end of the event loop
        const timeoutId = setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
