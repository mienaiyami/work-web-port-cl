import { useMotionValue, motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { cn } from "../utils";

const FloatingCard = ({
    img,
    width = "w-[22%]",
    followMouse = true,
}: {
    img: string;
    width?: string;
    followMouse?: boolean;
}) => {
    const rotateY = useMotionValue(0);
    const rotateX = useMotionValue(0);
    const translateY = useMotionValue(0);

    useLayoutEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (window.innerWidth < 768) return;
            const ry = (e.clientX - window.innerWidth / 2) / 30;
            const rx = -(e.clientY - window.innerHeight / 2) / 50;
            const ty = (e.clientY - window.innerHeight / 2) / 5;
            rotateY.set(ry);
            rotateX.set(rx);
            translateY.set(ty);
        };
        if (followMouse) window.addEventListener("mousemove", handleMouseMove);
        return () => {
            if (followMouse)
                window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            className={cn("max-w-[40vh] absolute", width)}
            style={{
                perspective: "200vw",
                transformStyle: "preserve-3d",
            }}
            animate={{
                y: ["-2%", "2%", "-2%"],
                scale: [1.02, 1, 1.02],
            }}
            transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <motion.div
                style={{
                    rotateY,
                    perspective: "200vw",
                    transformStyle: "preserve-3d",
                }}
            >
                <motion.div
                    style={{
                        translateZ: "250px",
                        rotateX,
                        translateY,
                        scale: 0.9,
                    }}
                >
                    <img
                        src={img}
                        className="rounded md:rounded-xl w-full h-full"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
export default FloatingCard;
