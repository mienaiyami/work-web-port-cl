import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="px-14">
            <div className="grid grid-cols-[.5fr_1fr_.5fr] uppercase font-serif items-center place-items-center w-full shadow-[0_-1px_0_0] shadow-white/20 text-xs py-10 ">
                <span className="justify-self-start">© 2023 placeholder</span>
                <span className="flex flex-row gap-10 items-center">
                    <Link href="/">Home</Link>
                    <Link href="about">about</Link>
                    <Link href="projects">projects</Link>
                    <Link href="contact">contact</Link>
                </span>
                <span className="justify-self-end">CREATED BY ...</span>
            </div>
        </div>
    );
};

export default Footer;
