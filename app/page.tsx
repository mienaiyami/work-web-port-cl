"use client";
import Image from "next/image";
import {
    AnimatePresence,
    motion,
    motionValue,
    useMotionTemplate,
    useMotionValue,
    useMotionValueEvent,
    useTransform,
    wrap,
} from "framer-motion";
import { cn } from "./utils";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { ArrowDown, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import ButtonDouble from "./components/ButtonDouble";
import Questions from "./components/Questions";
import SlideInLetters from "./components/SlideInLetters";
import FloatingCard from "./components/FloatingCard";

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

const carouselData: {
    name: string;
    review: string;
    avatar: string;
    project: string;
    img: string;
}[] = [
    {
        name: "Name",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        avatar: "/placeholder.svg",
        project: "Project Name",
        img: "/placeholder.svg",
    },
    {
        name: "Name",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        avatar: "/placeholder.svg",
        project: "Project Name",
        img: "/placeholder.svg",
    },
    {
        name: "Name",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        avatar: "/placeholder.svg",
        project: "Project Name",
        img: "/placeholder.svg",
    },
    {
        name: "Name",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        avatar: "/placeholder.svg",
        project: "Project Name",
        img: "/placeholder.svg",
    },
    {
        name: "Name",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        avatar: "/placeholder.svg",
        project: "Project Name",
        img: "/placeholder.svg",
    },
];

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <section className="grid place-items-center w-full h-[60vh] md:h-[95vh] relative">
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
                    <FloatingCard img="placeholder.svg" />
                </motion.div>
            </section>
            <section className="w-auto mx-2 md:mx-5 rounded-xl flex flex-col items-center gap-10 bg-white text-black relative">
                <div className="relative -translate-y-[50%] mx-auto h-18 md:h-20">
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
                    className="text-3xl md:text-5xl max-w-3xl text-center mx-auto scroll-mt-20"
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
                    <span className="-translate-y-[2vw] w-full h-[10vw] bg-white shadow-[0_-1px_0_0] shadow-black/10"></span>
                </div>
            </section>
            <section className="flex flex-col items-center gap-10 px-4 md:px-10 py-20">
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

            <section className="w-auto mx-2 md:mx-5 rounded-xl flex flex-col items-center gap-10 bg-white text-black relative">
                <div className="relative -translate-y-[50%] mx-auto h-18 md:h-20">
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
                    <div className="bg-white pt-10 -translate-y-[2vw] shadow-[0_-1px_0_0] shadow-black/10 w-full flex flex-col md:flex-row">
                        {servicesData.map((service, i) => (
                            <div
                                className="flex flex-col items-start py-10 md:py-0 md:px-10 border-b-[1px] md:border-b-0 md:border-r-[1px] border-black/10 border-dotted last:border-0"
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
                <Carousel />
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
            className="relative group py-6 md:py-16 flex flex-col md:flex-row gap-4 md:gap-0 w-full shadow-[0_-1px_0_0] last:shadow-[0_1px_0_0_#fff3,0_-1px_0_0_#fff3] shadow-white/20 items-center uppercase "
        >
            <img
                src={img}
                alt="project"
                className="rounded-xl block md:hidden w-full aspect-square"
            />
            <span className="font-bold text-2xl md:text-4xl w-full">
                {text1}
            </span>
            <span className="text-xs font-helvetica w-full h-full flex flex-col justify-center tracking-widest">
                <div className="overflow-clip h-[1.2rem]">
                    <span className="flex flex-col gap-2 duration-200 translate-y-0 group-hover:-translate-y-1/2 transition-transform">
                        <span className="leading-none">{text2}</span>
                        <span className="leading-none">{text2}</span>
                    </span>
                </div>
            </span>
            <motion.div
                className="hidden md:grid h-full w-80 z-10 right-0 absolute origin-left pointer-events-none"
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

const Carousel = () => {
    const [index, setIndex] = useState(0);

    // const x = useMotionTemplate`translateX(-${
    //     index * (100 / carouselData.length)
    // }%)`;
    const x = useTransform(() => index * 100);

    return (
        <div className="w-[96%] rounded-xl bg-black/20 h-[80vh] grid justify-center justify-items-center items-center relative overflow-clip">
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence>
                    <motion.img
                        draggable={false}
                        className="w-full h-full absolute inset-0 object-cover z-0"
                        src={carouselData[index].img}
                        alt="img"
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                    />
                </AnimatePresence>
            </div>
            <div className="w-[100%] max-w-[88vw] md:max-w-md flex flex-col items-stretch bg-white rounded-lg overflow-clip select-none z-10">
                <div className="">
                    <motion.div
                        className="flex flex-row cursor-grab max-w-full"
                        animate={{
                            x: `-${x.get()}%`,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: [0, 0, 0.6, 0.8],
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = Math.abs(offset.x) * velocity.x;
                            const threshold = 10000;
                            if (swipe > threshold) {
                                setIndex((init) =>
                                    wrap(0, carouselData.length, init - 1)
                                );
                            }
                            if (swipe < -threshold) {
                                setIndex((init) =>
                                    wrap(0, carouselData.length, init + 1)
                                );
                            }
                        }}
                    >
                        {carouselData.map((data, i) => (
                            <div
                                className="flex flex-col items-center gap-4 justify-center w-full shrink-0 p-4 md:p-10"
                                key={i}
                            >
                                <span className="text-center text-xl leading-snug">
                                    {data.review}
                                </span>
                                <div className="flex flex-row gap-3 items-center">
                                    <img
                                        src={data.avatar}
                                        alt="ava"
                                        className="w-10 aspect-square rounded"
                                    />
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm">
                                            {data.name}
                                        </span>
                                        <span className="text-sm opacity-70">
                                            {data.project}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="flex flex-row">
                    <button
                        className="group w-full h-16 flex flex-row gap-2 items-center justify-center text-sm shadow-[inset_-1px_1px_0_0] shadow-black/10"
                        onClick={() => {
                            setIndex((init) =>
                                wrap(0, carouselData.length, init - 1)
                            );
                        }}
                    >
                        <div className="overflow-clip w-[1rem]">
                            <span className="flex flex-row duration-200 group-hover:-translate-x-full translate-x-0 transition-transform text-sm ease-out">
                                <span className="leading-none">
                                    <ChevronLeft size={"1em"} />
                                </span>
                                <span className="leading-none">
                                    <ChevronLeft size={"1em"} />
                                </span>
                            </span>
                        </div>
                        prev
                    </button>
                    <button
                        className="group w-full h-16 flex flex-row gap-2 items-center justify-center text-sm shadow-[inset_0_1px_0_0] shadow-black/10"
                        onClick={() => {
                            setIndex((init) =>
                                wrap(0, carouselData.length, init + 1)
                            );
                        }}
                    >
                        next
                        <div className="overflow-clip w-[1rem]">
                            <span className="flex flex-row duration-200 -translate-x-full group-hover:translate-x-0 transition-transform text-sm ease-out">
                                <span className="leading-none">
                                    <ChevronRight size={"1em"} />
                                </span>
                                <span className="leading-none">
                                    <ChevronRight size={"1em"} />
                                </span>
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
