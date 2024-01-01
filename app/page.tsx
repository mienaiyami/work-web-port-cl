"use client";
import Image from "next/image";
import { motion, motionValue, useMotionValue } from "framer-motion";
import { cn } from "./utils";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { ArrowDown, Plus } from "lucide-react";
import ButtonDouble from "./components/ButtonDouble";
import Questions from "./components/Questions";
import SlideInLetters from "./components/SlideInLetters";

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
                <motion.div
                    className="grid place-items-center absolute inset-0 h-full pointer-events-none"
                    initial={{
                        translateY: "100%",
                        rotateY: "-180deg",
                        rotateZ: "35deg",
                        scale: 0.7,
                        opacity: 0,
                    }}
                    whileInView={{
                        translateY: 0,
                        rotateY: 0,
                        rotateZ: 0,
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeInOut",
                    }}
                >
                    <FloatingCard img="placeholder.svg" />
                </motion.div>
            </section>
            <section className="w-auto mx-5 rounded-xl flex flex-col items-center gap-10 bg-white text-black relative">
                <div className="relative -translate-y-10 mx-auto h-20">
                    <img className="" src="/curve.svg" />
                    <Link href="#intro">
                        <ButtonDouble
                            className="mx-auto -translate-y-8"
                            variant="light"
                            asIcon
                        >
                            <ArrowDown size={"0.9rem"} />
                        </ButtonDouble>
                    </Link>
                </div>
                <div
                    className="text-5xl max-w-3xl text-center mx-auto scroll-mt-20"
                    id="intro"
                >
                    With years of experience in the industry, I have worked with
                    businesses of all sizes.
                </div>
                <Link href={"/about"}>
                    <ButtonDouble
                        className="uppercase font-semibold "
                        variant="light"
                    >
                        explore my story
                    </ButtonDouble>
                </Link>
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
                <Link href="/work">
                    <ButtonDouble className="uppercase font-semibold">
                        view my portfolio
                    </ButtonDouble>
                </Link>
                <div className="flex flex-col w-full">
                    {[
                        {
                            text1: "text a",
                            text2: "text A",
                            url: "",
                            img: "placeholder.svg",
                        },
                        {
                            text1: "text b",
                            text2: "text B",
                            url: "",
                            img: "placeholder.svg",
                        },
                        {
                            text1: "text c",
                            text2: "text C",
                            url: "",
                            img: "placeholder.svg",
                        },
                        {
                            text1: "text d",
                            text2: "text D",
                            url: "",
                            img: "placeholder.svg",
                        },
                    ].map((exp, i) => (
                        <ExpLinks key={i} {...exp} />
                    ))}
                </div>
            </section>

            <section className="w-auto mx-5 rounded-xl flex flex-col items-center gap-10 bg-white text-black relative">
                <div className="relative -translate-y-10 mx-auto h-20">
                    <img className="" src="/curve.svg" />

                    <Link href={"#services"}>
                        <ButtonDouble
                            className="mx-auto -translate-y-8"
                            variant="light"
                            asIcon
                        >
                            <ArrowDown size={"0.9rem"} />
                        </ButtonDouble>
                    </Link>
                </div>
                <div
                    className="max-w-sm text-xl text-center scroll-mt-20"
                    id="services"
                >
                    I have worked with businesses of all sizes to create
                    stunning websites and designs that capture their
                    brand&apos;s identity.
                </div>

                <Link href={"/contact"}>
                    <ButtonDouble className="uppercase" variant="light">
                        SCHEDULE A CALL
                    </ButtonDouble>
                </Link>
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
                <Questions />
            </section>
            <section className="flex flex-col items-center gap-10 px-10 py-20">
                <div className="max-w-sm text-xl text-center">
                    Whether you need design or tweak some code, I have the
                    skills and creativity needed to take your project to the
                    next level.
                </div>

                <Link href={"/contact"}>
                    <ButtonDouble className="uppercase">
                        SCHEDULE A CALL
                    </ButtonDouble>
                </Link>
            </section>
        </main>
    );
}

const expLinkCardVariants = {
    rest: {
        rotateY: "-200deg",
        scale: 0.7,
        opacity: 0,
        translateY: 0,
    },
    hover: {
        rotateY: 0,
        scale: 1,
        opacity: 1,
        translateY: 0,
    },
};
const MotionLink = motion(Link);
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
        <MotionLink
            initial={"rest"}
            whileHover={"hover"}
            animate={"rest"}
            href={url}
            className="relative group py-16 grid grid-cols-2 w-full shadow-[0_-1px_0_0] last:shadow-[0_1px_0_0_#fff3,0_-1px_0_0_#fff3] shadow-white/20 items-center uppercase "
        >
            <span className="font-bold text-4xl">{text1}</span>
            <span className="text-xs font-helvetica h-full flex flex-col justify-center">
                <div className="overflow-clip h-[1.2rem]">
                    <span className="flex flex-col gap-2 duration-200 translate-y-0 group-hover:-translate-y-1/2 transition-transform">
                        <span className="leading-none">{text2}</span>
                        <span className="leading-none">{text2}</span>
                    </span>
                </div>
            </span>
            <motion.div
                className="grid h-full w-80 z-10 right-0 absolute origin-left pointer-events-none"
                style={{
                    rotateZ: "-10deg",
                    // translateY: "50%",
                }}
                variants={expLinkCardVariants}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
            >
                <FloatingCard img={img} width="w-[70%]" />
            </motion.div>
        </MotionLink>
    );
};

const FloatingCard = ({
    img,
    width = "w-[22%]",
}: {
    img: string;
    width?: string;
}) => {
    const rotateY = useMotionValue(0);
    const rotateX = useMotionValue(0);
    const translateY = useMotionValue(0);

    useLayoutEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const ry = (e.clientX - window.innerWidth / 2) / 30;
            const rx = -(e.clientY - window.innerHeight / 2) / 50;
            const ty = (e.clientY - window.innerHeight / 2) / 5;
            rotateY.set(ry);
            rotateX.set(rx);
            translateY.set(ty);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            className={cn("max-w-[40vh] absolute", width)}
            style={{
                perspective: "200vw",
                transformStyle: "preserve-3d",
            }}
            animate={{
                y: ["-2%", "2%", "-2%"],
                scale: [1.02, 1, 1.02],
            }}
            transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <motion.div
                style={{
                    rotateY,
                    perspective: "200vw",
                    transformStyle: "preserve-3d",
                }}
            >
                <motion.div
                    style={{
                        translateZ: "250px",
                        rotateX,
                        translateY,
                        scale: 0.9,
                    }}
                >
                    <img
                        src={img}
                        className="rounded-xl w-full h-full object-cover"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
