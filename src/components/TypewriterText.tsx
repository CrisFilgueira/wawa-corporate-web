import { useState, useEffect } from 'react';

interface TypewriterTextProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number;
}

export const TypewriterText = ({ text, className = "", delay = 0, speed = 50 }: TypewriterTextProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setIsStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText((prev) => prev + text.charAt(currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [isStarted, text, speed]);

    return (
        <span className={className}>
            {displayedText}
            {/* Optional cursor if desired, but user asked for "se va escribiendo" sensation, maybe clear is enough */}
        </span>
    );
};
