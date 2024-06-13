"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

import Image from "next/image"
import Link from "next/link"
import WorkSliderButton from "@/components/WorkSliderButton"

const projects = [
  {
    num: '01',
    category: 'UX/UI',
    title: 'UX/UI',
    desc: '99KBET is an online casino and sports betting platform.',
    stack: [{ name: 'Figma' },],
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b49e7198643749.66666baa15e94.png',
    live: 'https://www.behance.net/gallery/198643749/99kbet-UI-Design',
  },
  {
    num: '02',
    category: 'Graphic Design',
    title: 'Logos Design',
    desc: 'Logos Collection for Local Business and Online industry.',
    stack: [{ name: 'Photoshop' }, { name: 'Illustrator' }],
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b62b84196261207.6620a86a67e15.jpg',
    live: 'https://www.behance.net/gallery/196261207/Logos-Collection-Btongheng',
  },
  {
    num: '03',
    category: 'Graphic Design',
    title: 'Social Media Post',
    desc: 'Social Media poster.',
    stack: [
      { name: 'Photoshop' },
    ],
    image: 'https://i.pinimg.com/564x/29/1a/5d/291a5d17f6a2009f793c5c012f6daa6f.jpg',
    live: 'https://www.behance.net/gallery/200834151/Social-Media-Post',
  },
]


export default function Work() {

  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex
    // update projec state based on current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.9, duration: 0.3, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* ouline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize">{project.title}</h2>
              {/* project desc */}
              <p className="text-white/60">{project.desc}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-lg text-accent">
                    {item.name}
                    {/* remove the last cama */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="group-hover:text-accent transition-all duration-300 text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                {/* <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="group-hover:text-accent transition-all duration-300 text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
              {projects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center items-center bg-white/10">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image src={item.image} fill style={{
                        objectFit: 'cover', // cover, contain, none
                      }}
                      />

                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider button */}
              <WorkSliderButton containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent text-primary hover:bg-accent-hover text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
