import { cn } from "../utils";

const ButtonDouble = ({
    children,
    variant = "dark",
    asIcon = false,
    className,
}: {
    children: React.ReactNode;
    className?: string;
    variant?: "dark" | "light";
    asIcon?: boolean;
}) => {
    return (
        <button
            className={cn(
                "grid h-[3em] place-items-center rounded-full ring-1 group text-xs font-semibold",
                className,
                variant === "dark" ? "ring-[#2e313a]" : "ring-[#e7eeee]",
                asIcon ? "aspect-square" : "px-5"
            )}
        >
            <div className="overflow-clip h-[1em]">
                <span className="flex flex-col duration-300 translate-y-0 group-hover:-translate-y-1/2 transition-transform">
                    <span className="leading-none">{children}</span>
                    <span className="leading-none">{children}</span>
                </span>
            </div>
        </button>
    );
};

export default ButtonDouble;
