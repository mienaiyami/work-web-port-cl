"use client";
import React, { useEffect, useState } from "react";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useTransform,
    wrap,
} from "framer-motion";

function LoopStripe({ children }: { children: React.ReactNode }) {
    const baseX = useMotionValue(0);
    const x = useTransform(baseX, (v) => `${wrap(0, -52, v)}%`);
    useAnimationFrame((t, delta) => {
        const baseVelocity = -4;
        let moveBy = baseVelocity * (delta / 1000);
        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
        <div className="overflow-hidden whitespace-nowrap flex-nowrap flex ">
            <motion.div className="flex flex-nowrap gap-40" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}

export default LoopStripe;
