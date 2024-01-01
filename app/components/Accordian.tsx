"use client";
import { useState } from "react";
import { cn } from "../utils";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

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
            <div className="group flex flex-col md:flex-row gap-4 py-4 md:py-14 justify-start items-start md:items-center ">
                <div className="overflow-clip h-[1em] opacity-80 text-sm w-[5rem]">
                    <span className="flex flex-col duration-300 translate-y-0 group-hover:-translate-y-1/2 transition-transform">
                        <span className="leading-none">
                            {(idx + 1).toString().padStart(3, "0")}
                        </span>
                        <span className="leading-none">
                            {(idx + 1).toString().padStart(3, "0")}
                        </span>
                    </span>
                </div>
                <div className="grid grid-cols-[1fr_auto] items-center w-full">
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
export default Accordion;
