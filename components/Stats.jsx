"use client"

import CountUp from "react-countup"

const stats = [
    {
        num: 12,
        text: "Years of Experience"
    },
    {
        num: 26,
        text: "Projects Completed"
    },
    {
        num: 8,
        text: "Technologies Used"
    },
    {
        num: 500,
        text: "Code Commits"
    },
]

export default function Stats() {
  return <section className="pt-4 pb-12 lg:pt-0 lg:pb-0">
    <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[60vw] mx-auto lg:max-w-none">
            {stats.map(item => 
                <div key={item.num} className="flex-1 flex gap-4 items-center justify-center lg:justify-start">
                    <CountUp
                    end={item.num}
                    duration={3}
                    delay={1}
                    className="text-4xl lg:text-6xl font-extrabold text-accent" />
                    <p
                    className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                </div>
            )}
        </div>
    </div>
  </section>
}
