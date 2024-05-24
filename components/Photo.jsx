"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Photo() {
    return (
        <div className="relative h-full w-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.5, duration: 0.3, ease: "easeIn" }
                }}>
                <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.2, duration: 0.3, ease: "easeInOut" }
                }}
                className="h-[298px] w-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten">
                    <Image
                        src="/assets/photo.png"
                        alt="photo"
                        fill
                        priority
                        quality={100}
                        className="object-contain" />
                </motion.div>
            </motion.div>
        </div>
    )
}
