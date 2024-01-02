import ButtonDouble from "@/app/components/ButtonDouble";
import { ArrowDown, ChevronRight } from "lucide-react";
import Link from "next/link";

const projectData: {
    [key: string]: {
        name: string;
        description: string;
        type: string;
        date: string;
        images: string[];
        link: string;
    };
} = {
    abc: {
        name: "abc",
        type: "web",
        date: "OCTOBER 13, 2022",
        description:
            "Whether you need design or tweak some code, I have the skills and creativity needed to take your project to the next level.",
        images: [
            "/placeholder.svg",
            "/placeholder.svg",
            "/placeholder.svg",
            "/placeholder.svg",
            "/placeholder.svg",
        ],
        link: "/",
    },
};

const projects = Object.keys(projectData);
export default function Project({
    params,
}: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    if (!projects.includes(params.slug)) {
        return (
            <main className="grid place-items-center min-h-screen">
                <h1 className="p-20 text-5xl text-center">Project not found</h1>
            </main>
        );
    }
    return (
        <main className="flex flex-col min-h-screen">
            <section className="p-20 flex flex-col items-center gap-6 mt-10">
                <h1 className="text-8xl font-bigRiver uppercase">
                    {projectData[params.slug].name}
                </h1>
                <span className="text-xl opacity-80 text-center max-w-sm">
                    {projectData[params.slug].description}
                </span>
            </section>

            <section className="w-auto mx-2 md:mx-5 rounded-xl flex flex-col items-center bg-white text-black relative">
                <div className="relative -translate-y-[50%] mx-auto h-18 md:h-20">
                    <img className="" src="/curve.svg" />
                    <Link href="#main">
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
                    className="px-4 pb-4 md:p-14 flex flex-col gap-4 md:gap-10 items-start w-full"
                    id="main"
                >
                    <div className="w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-between tracking-widest uppercase items-start md:items-center font-helvetica text-xs pb-6 md:py-10 shadow-[0_1px_0_0] shadow-black/10">
                        <span>{projectData[params.slug].name}</span>
                        <span>{projectData[params.slug].date}</span>
                        <Link
                            href={projectData[params.slug].link}
                            className="group flex flex-row gap-4 items-center"
                        >
                            View Live
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
                        </Link>
                    </div>
                    {projectData[params.slug].images.map((image, i) => (
                        <div
                            className="w-full md:h-[80vh] bg-black rounded-xl p-10 grid place-items-center"
                            key={i}
                        >
                            <img
                                className="h-full rounded-xl"
                                src={image}
                                alt="project image"
                            />
                        </div>
                    ))}
                </div>
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
