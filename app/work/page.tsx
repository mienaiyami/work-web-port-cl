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
            <section className="grid grid-cols-2 w-full h-screen gap-10">
                <div className="flex p-10 z-0">
                    <div className="fixed w-screen inset-0 text-[20vw] uppercase font-bigRiver">
                        <LoopStripe>Projects</LoopStripe>
                    </div>
                    <div className="flex flex-col gap-5 items-start fixed bottom-6">
                        <span className="text-2xl max-w-sm">
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
                <div className="flex flex-col p-10 pt-0 text-black z-10">
                    <span className="sticky top-0 h-28 w-full bg-bg"></span>
                    <div className="sticky top-28 rounded-t-xl font-helvetica py-5 bg-white  text-xs shadow-[inset_0_-1px_0_0] shadow-black/10">
                        <span className="ml-10">ALL PROJECTS</span>
                    </div>
                    <div className="p-10 grid text-2xl  place-items-center text-center bg-white ">
                        <div className="max-w-80 py-6">
                            My aim is to help my clients maximize their
                            potential.
                        </div>
                    </div>
                    <div className="bg-bg">
                        <div className="flex flex-col gap-6 items-stretch px-10 w-full bg-white rounded-b-xl py-5">
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
                    <span className="h-8 w-full top-auto bottom-0 sticky bg-bg z-20"></span>
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
