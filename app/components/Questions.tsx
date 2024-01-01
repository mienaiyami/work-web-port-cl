"use client";
import { cn } from "../utils";
import Accordion from "./Accordian";
import SlideInLetters from "./SlideInLetters";

const accordionData = [
    {
        title: "How long do projects typically take?",
        details:
            "This involves creating a custom solution for clients who want an online presence tailored to their specific needs. The process involves understanding the client's requirements, analyzing existing solutions, and then designing, coding, and testing the web application.",
    },
    {
        title: "How long do projects typically take?",
        details:
            "This involves creating a custom solution for clients who want an online presence tailored to their specific needs. The process involves understanding the client's requirements, analyzing existing solutions, and then designing, coding, and testing the web application.",
    },
    {
        title: "How long do projects typically take?",
        details:
            "This involves creating a custom solution for clients who want an online presence tailored to their specific needs. The process involves understanding the client's requirements, analyzing existing solutions, and then designing, coding, and testing the web application.",
    },
    {
        title: "How long do projects typically take?",
        details:
            "This involves creating a custom solution for clients who want an online presence tailored to their specific needs. The process involves understanding the client's requirements, analyzing existing solutions, and then designing, coding, and testing the web application.",
    },
    {
        title: "How long do projects typically take?",
        details:
            "This involves creating a custom solution for clients who want an online presence tailored to their specific needs. The process involves understanding the client's requirements, analyzing existing solutions, and then designing, coding, and testing the web application.",
    },
];

const Questions = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "my-4 flex flex-col w-full px-4 md:px-14 ",
                className
            )}
        >
            <div className="overflow-clip h-fit">
                <SlideInLetters
                    str={`QUESTIONS`}
                    className="text-[12vw] font-bigRiver"
                />
            </div>
            <div className="bg-white -translate-y-[2vw] shadow-[0_0_0_1px] rounded-lg shadow-black/10 w-full flex flex-col px-4 md:px-10 py-1">
                {accordionData.map((acc, i) => (
                    <Accordion key={i} {...acc} idx={i} />
                ))}
            </div>
        </div>
    );
};

export default Questions;
