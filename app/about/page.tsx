"use client";
import { ArrowDown } from "lucide-react";
import ButtonDouble from "../components/ButtonDouble";
import LoopStripe from "../components/LoopStripe";
import Link from "next/link";
import SlideInLetters from "../components/SlideInLetters";

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
            <section className="grid w-full h-[95vh] justify-start">
                <div className="absolute w-full inset-0 top-[40vh] -translate-y-1/2 text-[20vw] uppercase font-bigRiver z-0">
                    <LoopStripe>About Me</LoopStripe>
                </div>
                <div className="flex flex-col gap-5 items-start max-w-80 place-self-end m-10">
                    <span className="text-xl">
                        With years of experience in the industry, I have worked
                        with businesses of all sizes.
                    </span>
                    <ButtonDouble className="uppercase">
                        <Link href="/work">View My Projects</Link>
                    </ButtonDouble>
                </div>
            </section>
            <section className="w-auto mx-5 rounded-xl flex flex-col items-center gap-10 bg-white text-black relative">
                <div className="relative -translate-y-10 mx-auto mr-48 h-20">
                    <img className="" src="/curve.svg" />
                    <ButtonDouble
                        className="mx-auto -translate-y-8"
                        variant="light"
                        asIcon
                    >
                        <Link href="#about">
                            <ArrowDown size={"0.9rem"} />
                        </Link>
                    </ButtonDouble>
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
                    <span className="-translate-y-8 w-full h-20 bg-white shadow-[0_-1px_0_0] shadow-black/10"></span>
                </div>
                <div className="-translate-y-8 flex flex-col px-10 items-stretch gap-5 w-full">
                    <div className="grid grid-cols-2 w-full items-stretch">
                        <div className="bg-bg w-full rounded-xl"></div>
                        <div className="flex flex-col py-10 px-20 gap-10 max-w-xl">
                            <div className="flex flex-row items-center justify-start gap-5">
                                <span className="w-2 h-2 rounded-full border border-[#c3dde0]"></span>
                                <div className="font-helvetica text-xs uppercase">
                                    ABOUT ME
                                </div>
                            </div>
                            <div className="text-6xl leading-snug">
                                Lorem ipsum dolor sit amet, consectetur
                            </div>
                            <div className="text-xl pb-10">
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
                    </div>
                    <div className="grid grid-cols-2 items-stretch mb-20">
                        <div className="bg-bg w-full rounded-xl h-[calc(100vh_-_1rem)] sticky top-10"></div>
                        <div className="flex flex-col pl-20 pr-10">
                            <div className="flex flex-col py-10 pb-20 gap-6 max-w-xl">
                                <div className="flex flex-row items-center justify-start gap-5">
                                    <span className="w-2 h-2 rounded-full border border-[#c3dde0]"></span>
                                    <div className="font-helvetica text-xs uppercase">
                                        MY TIMELINE
                                    </div>
                                </div>
                                <div className="text-6xl leading-snug">
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
            <div className="max-w-xl flex flex-col py-24 gap-6">
                <div className="flex flex-row items-center justify-start gap-5">
                    <span className="w-2 h-2 rounded-full border border-[#c3dde0]"></span>
                    <div className="font-helvetica text-xs uppercase">
                        {date}
                    </div>
                </div>
                <div className="text-6xl font-bigRiver">{title}</div>
                <div className="text-xl pb-10">{description}</div>
            </div>
        </div>
    );
};
