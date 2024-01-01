"use client";
import Link from "next/link";
import ButtonDouble from "../components/ButtonDouble";
import LoopStripe from "../components/LoopStripe";
import { cn } from "../utils";
import { ArrowDown } from "lucide-react";
import Questions from "../components/Questions";
import { useState } from "react";

const inputStyle =
    "rounded-lg border border-[#e7eeee] focus:border-[#3898ec] focus:outline-none p-3 px-5 bg-white w-full";
const Work = () => {
    const [submitStatus, setSubmitStatus] = useState(
        "idle" as "idle" | "submitting" | "submitted"
    );
    return (
        <main className="flex flex-col min-h-screen">
            <section className="grid place-items-center w-full min-h-[95vh] md:py-28">
                <div className="absolute w-full inset-0 top-[40vh] -translate-y-1/2 text-[20vw] uppercase font-bigRiver z-0">
                    <LoopStripe>Contact Me</LoopStripe>
                </div>
                <div className="relative mt-[30vh] md:mt-0 mx-2 rounded-lg p-10 flex flex-col justify-between items-center bg-white text-black z-10 my-20">
                    {submitStatus != "submitted" ? (
                        <>
                            <span className="py-6 md:py-16 text-xl w-full max-w-[25rem] text-center">
                                Please fill out the form below and I will be in
                                touch within 24 hours.
                            </span>
                            <form
                                className="flex flex-col gap-4 text-sm w-full"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    setSubmitStatus("submitting");
                                    setTimeout(() => {
                                        setSubmitStatus("submitted");
                                    }, 2000);
                                }}
                            >
                                <label className="flex flex-col gap-1">
                                    Your Name
                                    <div className="flex flex-col md:flex-row gap-2 w-full">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className={inputStyle}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className={inputStyle}
                                        />
                                    </div>
                                </label>
                                <label className="flex flex-col gap-1">
                                    Your Email
                                    <input
                                        type="email"
                                        placeholder="email@email.com"
                                        className={inputStyle}
                                    />
                                </label>
                                <label className="flex flex-col gap-1">
                                    Message
                                    <textarea
                                        className={cn(
                                            inputStyle,
                                            "w-full h-40"
                                        )}
                                        placeholder="Message"
                                    />
                                </label>
                                <input
                                    type="submit"
                                    disabled={submitStatus !== "idle"}
                                    value={
                                        submitStatus === "submitting"
                                            ? "Submitting..."
                                            : "Send Message"
                                    }
                                    className="bg-black text-white p-4 mt-2 rounded-full uppercase cursor-pointer"
                                />
                            </form>
                        </>
                    ) : (
                        <div className="p-6 text-center text-xl my-32">
                            Thank you! Your submission has been received!
                        </div>
                    )}
                </div>
            </section>
            <section className="w-auto mx-2 md:mx-5 rounded-xl flex flex-col items-center gap-0 md:gap-10 bg-white text-black relative">
                <div className="relative -translate-y-[50%] mx-auto h-18 md:h-20">
                    <img className="" src="/curve.svg" />
                    <ButtonDouble
                        className="mx-auto -translate-y-8"
                        variant="light"
                        asIcon
                    >
                        <Link href="#questions">
                            <ArrowDown size={"0.9rem"} />
                        </Link>
                    </ButtonDouble>
                </div>
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
};

export default Work;
