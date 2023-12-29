"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "./utils";
import Link from "next/link";
import { useState } from "react";
import { ArrowDown, Plus } from "lucide-react";
import ButtonDouble from "./components/ButtonDouble";

const servicesData = [
    {
        title: "Web Design",
        desc: "This includes creating unique designs that reflect a company's identity and goals, while also taking into account various aspects of page design such as user experience, usability, navigation, content organization and presentation.",
        img: "/placeholder.svg",
    },
    {
        title: "Web Design",
        desc: "This includes creating unique designs that reflect a company's identity and goals, while also taking into account various aspects of page design such as user experience, usability, navigation, content organization and presentation.",
        img: "/placeholder.svg",
    },
    {
        title: "Web Design",
        desc: "This includes creating unique designs that reflect a company's identity and goals, while also taking into account various aspects of page design such as user experience, usability, navigation, content organization and presentation.",
        img: "/placeholder.svg",
    },
];

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

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <section className="grid place-items-center w-full h-[95vh]">
                <div className="flex items-stretch">
                    <SlideInLetters
                        str={`Placeholder\nname`}
                        className="text-[12vw] font-bigRiver"
                    />
                </div>
            </section>
            <section className="w-auto mx-5 rounded-xl flex flex-col items-center gap-10 bg-white text-black relative">
                <div className="relative -translate-y-10 mx-auto h-20">
                    <img className="" src="/curve.svg" />
                    <ButtonDouble
                        className="mx-auto -translate-y-8"
                        variant="light"
                        asIcon
                    >
                        <ArrowDown size={"1rem"} />
                    </ButtonDouble>
                </div>
                <div className="text-5xl max-w-3xl font-light text-center mx-auto">
                    With years of experience in the industry, I have worked with
                    businesses of all sizes.
                </div>
                <ButtonDouble className="uppercase" variant="light">
                    explore my story
                </ButtonDouble>
                <div className="my-4 flex flex-col w-full px-10">
                    <div className="overflow-clip h-fit">
                        <SlideInLetters
                            str={`SINCE 2014`}
                            className="text-[12vw] font-bigRiver"
                        />
                    </div>
                    <span className="-translate-y-8 w-full h-20 bg-white shadow-[0_-1px_0_0] shadow-black/10"></span>
                </div>
            </section>
            <section className="flex flex-col items-center gap-10 px-10 py-20">
                <div className="max-w-sm text-xl text-center">
                    I have worked with businesses of all sizes to create
                    stunning websites and designs that capture their
                    brand&apos;s identity.
                </div>
                <ButtonDouble className="uppercase">view my portfolio</ButtonDouble>
                <div className="flex flex-col w-full">
                    {[
                        {
                            text1: "text a",
                            text2: "text A",
                            url: "",
                            img: "",
                        },
                        {
                            text1: "text b",
                            text2: "text B",
                            url: "",
                            img: "",
                        },
                        {
                            text1: "text c",
                            text2: "text C",
                            url: "",
                            img: "",
                        },
                        {
                            text1: "text d",
                            text2: "text D",
                            url: "",
                            img: "",
                        },
                    ].map((exp, i) => (
                        <ExpLinks key={i} {...exp} />
                    ))}
                </div>
            </section>

            <section className="w-auto mx-5 rounded-xl flex flex-col items-center gap-10 bg-white text-black relative">
                <div className="relative -translate-y-10 mx-auto h-20">
                    <img className="" src="/curve.svg" />

                    <ButtonDouble
                        className="mx-auto -translate-y-8"
                        variant="light"
                        asIcon
                    >
                        <ArrowDown size={"1rem"} />
                    </ButtonDouble>
                </div>
                <div className="max-w-sm text-xl text-center">
                    I have worked with businesses of all sizes to create
                    stunning websites and designs that capture their
                    brand&apos;s identity.
                </div>
                <ButtonDouble className="uppercase" variant="light">
                    SCHEDULE A CALL
                </ButtonDouble>
                <div className="my-4 flex flex-col w-full px-10">
                    <div className="overflow-clip h-fit">
                        <SlideInLetters
                            str={`MY SERVICE`}
                            className="text-[12vw] font-bigRiver"
                        />
                    </div>
                    <div className="bg-white pt-10 -translate-y-8 shadow-[0_-1px_0_0] shadow-black/10 w-full flex flex-col md:flex-row">
                        {servicesData.map((service, i) => (
                            <div
                                className="flex flex-col items-start px-10 border-r-[1px] border-black/10 border-dotted last:border-0"
                                key={i}
                            >
                                <div className="text-xs mb-10 opacity-80">
                                    00{i + 1}
                                </div>
                                <div className="text-xl">{service.title}</div>
                                <div className="text-lg opacity-80 line-clamp-2">
                                    {service.desc}
                                </div>
                                <span
                                    className="h-52 w-full rounded-lg mt-5"
                                    style={{
                                        backgroundImage: `url(${service.img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-[98%] rounded-xl bg-black/20 h-[80vh] mx-auto"></div>
                <div className="my-4 flex flex-col w-full px-10">
                    <div className="overflow-clip h-fit">
                        <SlideInLetters
                            str={`QUESTIONS`}
                            className="text-[12vw] font-bigRiver"
                        />
                    </div>
                    <div className="bg-white -translate-y-8 shadow-[0_0_0_1px] rounded-lg shadow-black/10 w-full flex flex-col px-10 py-1">
                        {accordionData.map((acc, i) => (
                            <Accordion key={i} {...acc} idx={i} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-center gap-10 px-10 py-20">
                <div className="max-w-sm text-xl text-center">
                    Whether you need design or tweak some code, I have the
                    skills and creativity needed to take your project to the
                    next level.
                </div>
                <ButtonDouble className="uppercase">SCHEDULE A CALL</ButtonDouble>
            </section>
        </main>
    );
}
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
const ExpLinks = ({
    text1,
    text2,
    url,
    img,
}: {
    text1: string;
    text2: string;
    url: string;
    img: string;
}) => {
    return (
        <Link
            href={url}
            className="group grid grid-cols-2 w-full shadow-[0_-1px_0_0] last:shadow-[0_1px_0_0_#fff3,0_-1px_0_0_#fff3] shadow-white/20 items-center uppercase "
        >
            <span className="py-14 font-bold text-4xl">{text1}</span>
            <span className="py-14 text-xs font-serif h-full flex flex-col justify-center">
                <div className="overflow-clip h-[1em]">
                    <span className="flex flex-col duration-300 translate-y-0 group-hover:-translate-y-1/2 transition-transform">
                        <span className="leading-none">{text2}</span>
                        <span className="leading-none">{text2}</span>
                    </span>
                </div>
            </span>
        </Link>
    );
};

const Accordion = ({
    title,
    details,
    idx,
}: {
    title: string;
    details: string;
    idx: number;
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className="flex flex-col items-stretch shadow-[0_1px_0_0] shadow-black/10 last:shadow-none cursor-pointer"
            onClick={() => setOpen((init) => !init)}
        >
            <div className="group grid grid-cols-[5rem_1fr_auto] gap-4 py-14 justify-start items-center ">
                <div className="overflow-clip h-[1em] opacity-80 text-sm">
                    <span className="flex flex-col duration-300 translate-y-0 group-hover:-translate-y-1/2 transition-transform">
                        <span className="leading-none">
                            {(idx + 1).toString().padStart(3, "0")}
                        </span>
                        <span className="leading-none">
                            {(idx + 1).toString().padStart(3, "0")}
                        </span>
                    </span>
                </div>
                <div className="text-xl">{title}</div>
                <div
                    className={cn(
                        " w-10 aspect-square flex items-center justify-center transition-transform duration-300 rotate-0 group-hover:rotate-90"
                    )}
                >
                    <motion.span
                        variants={{
                            open: {
                                rotate: 135,
                            },
                            closed: {
                                rotate: 0,
                            },
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                        }}
                        initial="closed"
                        animate={open ? "open" : "closed"}
                    >
                        <Plus size={"1rem"} />
                    </motion.span>
                </div>
            </div>
            <motion.div
                className="overflow-hidden"
                variants={{
                    open: {
                        height: "auto",
                    },
                    closed: {
                        height: 0,
                    },
                }}
                initial="closed"
                transition={{
                    ease: [0, 0, 0, 1],
                    duration: 0.6,
                }}
                animate={open ? "open" : "closed"}
            >
                <div className="bg-black  text-white rounded-lg p-10 mb-10">
                    {details}
                </div>
            </motion.div>
        </div>
    );
};
