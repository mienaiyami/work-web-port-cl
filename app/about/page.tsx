"use client";
import { ArrowDown } from "lucide-react";
import ButtonDouble from "../components/ButtonDouble";
import LoopStripe from "../components/LoopStripe";
import Link from "next/link";
import SlideInLetters from "../components/SlideInLetters";
import { motion } from "framer-motion";
import FloatingCard from "../components/FloatingCard";

const timeline = [
    {
        title: "Lorem ipsum",
        date: "2014-2016",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo, incidunt fugiat labore voluptates quasi, obcaecati quis perspiciatis repellendus, asperiores deserunt id commodi. Corrupti, blanditiis architecto eum a doloremque debitis.",
    },
    {
        title: "Lorem ipsum",
        date: "2016-2017",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo, incidunt fugiat labore voluptates quasi, obcaecati quis perspiciatis repellendus, asperiores deserunt id commodi. Corrupti, blanditiis architecto eum a doloremque debitis.",
    },
    {
        title: "Lorem ipsum",
        date: "2017-2018",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo, incidunt fugiat labore voluptates quasi, obcaecati quis perspiciatis repellendus, asperiores deserunt id commodi. Corrupti, blanditiis architecto eum a doloremque debitis.",
    },
    {
        title: "Lorem ipsum",
        date: "2018-2020",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo, incidunt fugiat labore voluptates quasi, obcaecati quis perspiciatis repellendus, asperiores deserunt id commodi. Corrupti, blanditiis architecto eum a doloremque debitis.",
    },
    {
        title: "Lorem ipsum",
        date: "2020-2023",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo, incidunt fugiat labore voluptates quasi, obcaecati quis perspiciatis repellendus, asperiores deserunt id commodi. Corrupti, blanditiis architecto eum a doloremque debitis.",
    },
];

export default function About() {
    return (
        <main className="flex flex-col min-h-screen">
            <section className="grid w-full h-[50vh] md:h-[95vh] justify-start mb-10 md:pb-0">
                <div className="absolute w-full inset-0 top-[40vh] -translate-y-1/2 text-[20vw] uppercase font-bigRiver z-0">
                    <LoopStripe>About Me</LoopStripe>
                </div>
                <div className="flex flex-col gap-5 items-start max-w-80 place-self-end m-10">
                    <span className="text-xl">
                        With years of experience in the industry, I have worked
                        with businesses of all sizes.
                    </span>
                    <Link href="/work">
                        <ButtonDouble className="uppercase">
                            View My Projects
                        </ButtonDouble>
                    </Link>
                </div>

                <motion.div
                    className="hidden md:grid place-items-center absolute top-0 right-20 w-[50vh] min-w-96 h-full pointer-events-none"
                    initial={{
                        translateY: "100%",
                        rotateY: "-180deg",
                        rotateZ: "35deg",
                        scale: 0.7,
                        opacity: 0,
                    }}
                    animate={{
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
                    <FloatingCard img="/placeholder.svg" width="w-full" />
                </motion.div>
            </section>
            <section className="w-auto mx-2 md:mx-5 rounded-xl flex flex-col items-center gap-5 md:gap-10 bg-white text-black relative">
                <div className="relative -translate-y-[50%] mx-auto h-18 md:h-20 md:mr-48">
                    <img className="" src="/curve.svg" />
                    <Link href="#about">
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
                    className="text-2xl max-w-lg text-center mx-auto scroll-mt-20"
                    id="about"
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
                <div className="mt-4 flex flex-col w-full px-10">
                    <div className="overflow-clip h-fit">
                        <SlideInLetters
                            str={`MY STORY`}
                            className="text-[12vw] font-bigRiver"
                        />
                    </div>
                    <span className="-translate-y-[2vw] w-full h-20 bg-white shadow-[0_-1px_0_0] shadow-black/10"></span>
                </div>
                <div className="-translate-y-8 flex flex-col px-6 md:px-10 items-stretch gap-5 w-full">
                    <motion.div
                        className="flex flex-col md:flex-row items-stretch"
                        initial="hidden"
                        animate="hidden"
                        whileInView="view"
                        viewport={{
                            once: true,
                            amount: 0.5,
                        }}
                    >
                        <div className="bg-bg w-full aspect-square md:aspect-auto md:w-1/2 h-auto rounded-xl relative overflow-clip">
                            <motion.div
                                className="grid place-items-center absolute inset-0 pointer-events-none"
                                variants={{
                                    view: {
                                        translateY: 0,
                                        rotateY: 0,
                                        rotateZ: 0,
                                        scale: 1,
                                        opacity: 1,
                                    },
                                    hidden: {
                                        translateY: "100%",
                                        rotateY: "-180deg",
                                        rotateZ: "35deg",
                                        scale: 0.7,
                                        opacity: 0,
                                    },
                                }}
                                transition={{
                                    duration: 0.7,
                                    ease: "easeInOut",
                                }}
                            >
                                <FloatingCard
                                    img="/placeholder.svg"
                                    width="w-[40%] md:w-full"
                                    followMouse={false}
                                />
                            </motion.div>
                        </div>
                        <div className=" w-full md:w-1/2 flex flex-col py-10 px-0 md:px-20 gap-4 md:gap-10 max-w-xl">
                            <div className="flex flex-row items-center justify-start gap-5">
                                <span className="w-2 h-2 rounded-full border border-[#c3dde0]"></span>
                                <div className="font-helvetica text-xs uppercase">
                                    ABOUT ME
                                </div>
                            </div>
                            <div className="text-3xl md:text-6xl md:leading-snug">
                                Lorem ipsum dolor sit amet, consectetur
                            </div>
                            <div className="text-base md:text-xl md:pb-10">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fugit illo, incidunt fugiat
                                labore voluptates quasi, obcaecati quis
                                perspiciatis repellendus, asperiores deserunt id
                                commodi. Corrupti, blanditiis architecto eum a
                                doloremque debitis.
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Fugit illo, incidunt fugiat
                                labore voluptates quasi, obcaecati quis
                                perspiciatis repellendus, asperiores deserunt id
                                commodi. Corrupti, blanditiis architecto eum a
                                doloremque debitis.
                            </div>
                        </div>
                    </motion.div>
                    <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-0 md:mb-20">
                        <div className="bg-bg rounded-xl aspect-square md:aspect-auto md:h-[calc(100vh_-_1rem)] relative md:sticky top-10 overflow-clip w-full md:w-1/2">
                            <motion.div
                                className="grid place-items-center absolute inset-0 h-full pointer-events-none"
                                initial={{
                                    translateY: 0,
                                    rotateY: 0,
                                    rotateZ: 0,
                                    scale: 1,
                                    opacity: 1,
                                }}
                            >
                                <FloatingCard
                                    img="/placeholder.svg"
                                    width="w-[40%] md:w-full"
                                    followMouse={false}
                                />
                            </motion.div>
                        </div>
                        <div className="flex flex-col md:pl-20 md:pr-10 w-full md:w-1/2">
                            <div className="flex flex-col py-10 md:pb-20 gap-6 max-w-xl">
                                <div className="flex flex-row items-center justify-start gap-5">
                                    <span className="w-2 h-2 rounded-full border border-[#c3dde0]"></span>
                                    <div className="font-helvetica text-xs uppercase">
                                        MY TIMELINE
                                    </div>
                                </div>
                                <div className="text-3xl md:text-6xl md:leading-snug">
                                    Lorem ipsum dolor sit amet
                                </div>
                            </div>
                            {timeline.map((item, i) => (
                                <TimelineItem
                                    title={item.title}
                                    date={item.date}
                                    description={item.description}
                                    key={i}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center gap-10 px-10 py-24">
                <div className="max-w-md text-2xl text-center">
                    Whether you need design or tweak some code, I have the
                    skills and creativity needed to take your project to the
                    next level.
                </div>

                <Link href={"/contact"} className="mb-10">
                    <ButtonDouble className="uppercase">
                        SCHEDULE A CALL
                    </ButtonDouble>
                </Link>
            </section>
        </main>
    );
}

const TimelineItem = ({
    title,
    date,
    description,
}: {
    title: string;
    date: string;
    description: string;
}) => {
    return (
        <div className="w-full shadow-black/10 shadow-[inset_0_1px_0_0] sticky top-20 bg-white">
            <div className="max-w-xl flex flex-col py-14 gap-2 md:py-24 md:gap-6">
                <div className="flex flex-row items-center justify-start gap-5">
                    <span className="w-2 h-2 rounded-full border border-[#c3dde0]"></span>
                    <div className="font-helvetica text-xs uppercase">
                        {date}
                    </div>
                </div>
                <div className="text-3xl md:text-6xl font-bigRiver">
                    {title}
                </div>
                <div className="text-base md:text-xl md:pb-10">
                    {description}
                </div>
            </div>
        </div>
    );
};
