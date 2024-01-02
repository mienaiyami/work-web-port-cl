import Image from "next/image";
import ButtonDouble from "../components/ButtonDouble";
import LoopStripe from "../components/LoopStripe";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const cardData = [
    {
        text1: "Project Name",
        text2: "Project Type",
        img: "/placeholder.svg",
        url: "",
    },
    {
        text1: "Project Name",
        text2: "Project Type",
        img: "/placeholder.svg",
        url: "",
    },
    {
        text1: "Project Name",
        text2: "Project Type",
        img: "/placeholder.svg",
        url: "",
    },
    {
        text1: "Project Name",
        text2: "Project Type",
        img: "/placeholder.svg",
        url: "",
    },
    {
        text1: "Project Name",
        text2: "Project Type",
        img: "/placeholder.svg",
        url: "",
    },
    {
        text1: "Project Name",
        text2: "Project Type",
        img: "/placeholder.svg",
        url: "",
    },
];

export default function Work() {
    return (
        <main className="flex min-h-screen flex-col overflow-x-clip">
            <section className="flex flex-col md:flex-row w-full items-center min-h-[100vh] gap-10">
                <div className="grid w-full h-[50vh] md:p-10 z-0 md:h-auto justify-start relative">
                    <div className="absolute  -translate-y-1/2 md:translate-y-0 md:fixed md:w-screen inset-0 top-[25vh] text-[20vw] uppercase font-bigRiver">
                        <LoopStripe>Projects</LoopStripe>
                    </div>
                    <div className="flex flex-col max-w-80 gap-5 items-start place-self-end md:place-self-auto md:fixed md:bottom-6 m-10">
                        <span className="text-xl">
                            As a designer, I help companies to achieve their
                            desired goals.
                        </span>

                        <Link href={"/contact"}>
                            <ButtonDouble className="uppercase">
                                SCHEDULE A CALL
                            </ButtonDouble>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col px-2 md:p-10 py-0 text-black z-10 w-full">
                    <span className="sticky top-0 h-0 md:h-28 w-full bg-bg"></span>
                    <div className="sticky top-0 md:top-28 rounded-t-xl font-helvetica py-5 bg-white  text-xs shadow-[inset_0_-1px_0_0] shadow-black/10">
                        <span className="ml-10">ALL PROJECTS</span>
                    </div>
                    <div className="p-4 md:p-10 grid text-xl md:text-2xl  place-items-center text-center bg-white ">
                        <div className="max-w-80 py-6">
                            My aim is to help my clients maximize their
                            potential.
                        </div>
                    </div>
                    <div className="bg-bg">
                        <div className="flex flex-col gap-6 items-stretch px-4 md:px-10 w-full bg-white rounded-b-xl py-5 mb-2 md:mb-0">
                            {cardData.map((card, i) => (
                                <Card
                                    text1={card.text1}
                                    text2={card.text2}
                                    img={card.img}
                                    url={card.url}
                                    key={i}
                                />
                            ))}
                        </div>
                    </div>
                    <span className="h-0 md:h-8 w-full top-auto bottom-0 sticky bg-bg z-20"></span>
                </div>
            </section>
        </main>
    );
}
const Card = ({
    text1,
    text2,
    img,
    url,
}: {
    text1: string;
    text2: string;
    img: string;
    url: string;
}) => {
    return (
        <Link
            href={url}
            className="group flex flex-col gap-3 rounded-xl overflow-clip"
        >
            <Image
                src={img}
                alt="img"
                width={500}
                height={300}
                className="w-full aspect-[1_/_0.6] object-cover rounded-xl"
            />
            <div className="px-4 flex flex-row items-center justify-between w-full">
                <div className="flex flex-col gap-1 items-start">
                    <span className="text-xl ">{text1}</span>
                    <span className="font-helvetica text-xs">{text2}</span>
                </div>
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
            </div>
        </Link>
    );
};
