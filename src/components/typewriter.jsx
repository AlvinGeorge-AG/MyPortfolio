const Typewriter = () => {
    const [text, setText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopNum, setLoopNum] = React.useState(0);
    const [typingSpeed, setTypingSpeed] = React.useState(150);

    const words = ["Hello World!", "I'm Alvin George", "Full Stack Developer"];

    React.useEffect(() => {
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
        <div className="h-10 flex items-center mt-4">
            <span className="text-blue-500 mr-2 text-xl md:text-3xl font-mono font-bold">{">"}</span>
            <span className="text-xl md:text-3xl font-mono font-bold text-gray-200">
                {text}
                <span className="animate-pulse text-blue-500 ml-1">|</span>
            </span>
        </div>
    );
};