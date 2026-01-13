"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface RotateWordsProps {
    text?: string;
    words: string[];
    className?: string;
}

export function RotateWords({
    text = "Rotate",
    words = ["Word 1", "Word 2", "Word 3"],
    className = ""
}: RotateWordsProps) {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Changed to 3s for better pace, user example had 5000
        // Clean up interval on unmount
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <span className={className} style={{ display: 'inline-flex', gap: '0.375rem', alignItems: 'center' }}>
            {text && <span>{text}</span>}
            <span style={{ position: 'relative', display: 'inline-block', minWidth: '4ch' }}> {/* width to prevent heavy layout shift, though might vary */}
                <AnimatePresence mode="wait">
                    <motion.span
                        key={words[index]}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'inline-block' }}
                    >
                        {words[index]}
                    </motion.span>
                </AnimatePresence>
            </span>
        </span>
    );
}
