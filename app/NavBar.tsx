"use client";
import Link from "next/link";
import ButtonDouble from "./components/ButtonDouble";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
    {
        href: "/",
        text: "home",
    },
    {
        href: "/about",
        text: "about",
    },
    {
        href: "/work",
        text: "work",
    },
    {
        href: "/contact",
        text: "contact",
    },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    return (
        <nav
            className={`flex flex-row w-full items-center uppercase p-10 z-50 ${
                pathname === "/work" ? "absolute md:fixed" : "absolute"
            }`}
        >
            <Link href="/">Portfolio</Link>
            <div className="flex flex-row gap-4 ml-auto text-[0.7rem]">
                <Link href={"/contact"} className="hidden md:flex">
                    <ButtonDouble className="uppercase">
                        SCHEDULE A CALL
                    </ButtonDouble>
                </Link>
                <motion.div
                    className="cursor-pointer ring-1 ring-[#2e313a] flex flex-col items-center justify-center h-[3em] aspect-square rounded-full"
                    variants={{
                        open: { gap: "1px" },
                        closed: { gap: "5px" },
                    }}
                    transition={{ duration: 0.1 }}
                    initial="closed"
                    animate={open ? "open" : "closed"}
                    onClick={() => setOpen((init) => !init)}
                >
                    <span className="w-[40%] h-px bg-white rounded-full"></span>
                    <span className="w-[40%] h-px bg-white rounded-full"></span>
                </motion.div>
            </div>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key={"nav"}
                        className="absolute w-full h-full inset-0"
                        variants={{
                            visible: { opacity: 1, pointerEvents: "auto" },
                            hidden: { opacity: 0, pointerEvents: "none" },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={() => setOpen(false)}
                    >
                        <div className="fixed w-full h-full inset-0 bg-black/20 cursor-pointer"></div>
                        <motion.div
                            className="overflow-clip flex flex-col md:flex-row items-stretch justify-stretch h-60 rounded-lg bg-white w-[90%] md:w-[96%] mx-auto top-24 relative text-black md:text-2xl md:py-4 font-bigRiver"
                            variants={{
                                visible: {
                                    height: "15rem",
                                    y: 0,
                                    opacity: 1,
                                },
                                hidden: {
                                    height: "4rem",
                                    y: -10,
                                    opacity: 0,
                                },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: [0, 0, 0, 1],
                            }}
                        >
                            {links.map(({ href, text }, i) => (
                                <LinkItem
                                    href={href}
                                    text={text}
                                    key={i}
                                    idx={i}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

const LinkItem = ({
    href,
    text,
    idx,
}: {
    href: string;
    text: string;
    idx: number;
}) => {
    return (
        <Link
            href={href}
            className="overflow-clip md:overflow-visible group grid grid-cols-[1fr_auto] py-4 md:py-0 px-8 w-full items-end shadow-[0_2px_0_0] md:shadow-[2px_0_0_0] shadow-black/5 md:shadow-black/5 last:shadow-none"
        >
            <motion.span
                variants={{
                    visible: {
                        y: 0,
                        opacity: 1,
                    },
                    hidden: {
                        y: 50,
                        opacity: 0,
                    },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                    duration: 0.6,
                    ease: [0, 0, 0, 1],
                    delay: 0.2 + idx * 0.1,
                }}
            >
                {text}
            </motion.span>
            <motion.div
                className="overflow-clip w-[1rem]"
                variants={{
                    visible: {
                        y: 0,
                        opacity: 1,
                    },
                    hidden: {
                        y: 50,
                        opacity: 0,
                    },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                    duration: 0.5,
                    ease: [0, 0, 0, 1],
                    delay: 0.21 + idx * 0.1,
                }}
            >
                <span className="flex flex-row duration-200 -translate-x-full group-hover:translate-x-0 transition-transform text-sm ease-out">
                    <span className="leading-none">
                        <ChevronRight size={"1em"} />
                    </span>
                    <span className="leading-none">
                        <ChevronRight size={"1em"} />
                    </span>
                </span>
            </motion.div>
        </Link>
    );
};
