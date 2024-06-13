"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Photo() {
    return (
        <div className="h-full w-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.3, ease: "easeIn" }
                }}>
                {/* image */}
                <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.6, duration: 0.3, ease: "easeInOut" }
                }}
                className="h-[298px] w-[298px] lg:w-[380px] lg:h-[380px] mix-blend-lighten
                absolute">
                    <Image
                        src="/assets/profile.jpg"
                        priority
                        quality={100}
                        fill
                        alt="hi"
                        className="object-contain rounded-full" />
                </motion.div>

                {/* circle */}
                <motion.svg
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.9, duration: 0.3, ease: "easeInOut" }
                }}
                 className="w-[300px] lg:w-[380px] h-[300px] lg:h-[380px]"
                 fill="transparent"
                 viewBox="0 0 506 506"
                 xmls="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00fe87"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",}}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}
