"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathName = usePathname();
    const noFooter = ["/work"].includes(pathName);
    if (noFooter) return null;
    return (
        <div className="px-14">
            <div className="grid grid-cols-[.5fr_1fr_.5fr] uppercase font-helvetica items-center place-items-center w-full shadow-[0_-1px_0_0] shadow-white/20 text-xs py-10 ">
                <span className="justify-self-start">© 2023 placeholder</span>
                <span className="flex flex-row gap-10 items-center">
                    <Link href="/">Home</Link>
                    <Link href="/about">about</Link>
                    <Link href="/work">projects</Link>
                    <Link href="/contact">contact</Link>
                </span>
                <span className="justify-self-end">CREATED BY ...</span>
            </div>
        </div>
    );
};

export default Footer;
