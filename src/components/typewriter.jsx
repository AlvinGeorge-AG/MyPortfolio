import React, { useState, useEffect } from "react";

const Typewriter = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["Hello World!", "sudo whoami", "I'm Alvin George", "Full Stack Developer"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <div className="h-16 flex items-center mt-6 p-4 bg-black/30 border-l-4 border-blue-500 rounded backdrop-blur-sm w-fit">
            <span className="text-blue-500 mr-3 text-xl md:text-2xl font-mono font-bold">{">"}</span>
            <span className="text-xl md:text-2xl font-mono font-bold text-gray-200 tracking-wide">
                {text}
                <span className="animate-pulse text-blue-500 ml-1 font-bold">|</span>
            </span>
        </div>
    );
};

export default Typewriter;