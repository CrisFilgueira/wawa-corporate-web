import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = (animationClass = '') => {
    const [isVisible, setIsVisible] = useState(false);
    // Using HTMLHeadingElement as default but casting might be needed if used on divs
    const ref = useRef<any>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return { ref, isVisible };
};
