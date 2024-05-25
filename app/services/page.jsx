"use client"

import Link from 'next/link'
import { BsArrowDown, BsArrowDownRight } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function Services() {

  const services = [
    {
      num: "01",
      title: "UX/UI Design",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.",
      href: "",
    },
    {
      num: "02",
      title: "Front-End",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.",
      href: "",
    },
    {
      num: "03",
      title: "Graphic Design",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.",
      href: "",
    },
    {
      num: "04",
      title: "Motion Design",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliqua.",
      href: "",
    },
  ]

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.9,
              duration: 0.3,
              ease: "easeIn"
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-start"
        >
          {services.map(service =>
            <Link key={service.num} href={service.href} className="flex flex-1 flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-300">{service.num}</div>

                <BsArrowDown
                  className="group-hover:text-accent transition-all duration-300" />

              </div>
              {/* title */}
              <h2 className="group-hover:text-accent transition-all duration-300">{service.title}</h2>
              {/* desc */}
              <p className='text-white/80'>{service.desc}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  )
}
