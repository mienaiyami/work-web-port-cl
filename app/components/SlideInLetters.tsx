import { motion } from "framer-motion";
import { cn } from "../utils";

const SlideInLetters = ({
    str,
    className,
}: {
    str: string;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col items-center uppercase font-bold",
                className
            )}
        >
            {str.split("\n").map((line, i) => (
                <span className="flex flex-row flex-wrap overflow-clip" key={i}>
                    {line.split("").map((letter, index) => (
                        // <div className="overflow-hidden" key={index}>
                        <motion.span
                            initial={{ y: "100%" }}
                            key={index}
                            className="leading-none"
                            whileInView={{
                                y: 0,
                                transition: {
                                    delay: index * 0.05 + (i * 0.5 + 0.1),
                                    duration: 0.5,
                                    ease: [0, 0, 0, 1],
                                },
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            {letter === " " ? <>&nbsp;</> : letter}
                        </motion.span>
                        // </div>
                    ))}
                </span>
            ))}
        </div>
    );
};
export default SlideInLetters;
