"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "./utils";
import Link from "next/link";
import { useState } from "react";
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
            </section>
            <section className="w-auto mx-5 rounded-xl flex flex-col items-center gap-10 bg-white text-black relative">
                <div className="relative -translate-y-10 mx-auto h-20">
                    <img className="" src="/curve.svg" />
                    <ButtonDouble
                        className="mx-auto -translate-y-8"
                        variant="light"
                        asIcon
                    >
                        <Link href="#intro">
                            <ArrowDown size={"0.9rem"} />
                        </Link>
                    </ButtonDouble>
                </div>
                <div
                    className="text-5xl max-w-3xl font-light text-center mx-auto scroll-mt-20"
                    id="intro"
                >
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
                <ButtonDouble className="uppercase">
                    view my portfolio
                </ButtonDouble>
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
                        <Link href={"#services"}>
                            <ArrowDown size={"0.9rem"} />
                        </Link>
                    </ButtonDouble>
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
            <span className="py-14 text-xs font-helvetica h-full flex flex-col justify-center">
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
