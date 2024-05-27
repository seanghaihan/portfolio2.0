"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa"
import { SiTailwindcss,SiNextdotjs, SiAdobephotoshop,SiAdobeillustrator,SiAdobeaftereffects } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import {motion} from "framer-motion"

// skill data
const skills = {
  title: "My Skill",
  desc: `There are the tools that I used`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Adobephotoshop",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Adobeillustrator",
    },
    {
      icon: <SiAdobeaftereffects />,
      name: "Adobeaftereffects",
    },

  ]
}

// about data
const about = {
    title: "About me",
    desc: `I'm a graphic design that I can do many thing such as "Graphic Design, Motion Graphic, UX/UI and Front-end as my hobbies"`,
    info: [
      {
        fieldName: "Name",
        fieldValue: "Btongheng",
      },
      {
        fieldName: "Phone",
        fieldValue: "+855 966 636 776",
      },
      {
        fieldName: "Exprience",
        fieldValue: "4+ years",
      },
      {
        fieldName: "Nataionality",
        fieldValue: "Cambodian",
      },
      {
        fieldName: "Freelancer",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "Khmer, English",
      },
      {
        fieldName: "Email",
        fieldValue: "Btongheng@gmail.com",
      },
    ]
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My Experience",
  desc: `I'm working as a graphic designer since I am Year 2 in University`,
  items: [
    {
      company: 'Privata Company',
      position: 'UX/UI',
      duration: '2023 - Present',
    },
    {
      company: 'Privata Company',
      position: 'Motion Graphic',
      duration: '2022 - Present',
    },
    {
      company: 'Privata Company',
      position: 'Graphic Design',
      duration: '2020 - Present',
    },
  ]
}

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  desc: 'These are my education',
  items: [
    {
      institution: 'National Institute Of Business',
      degree: 'Information Technology',
      duration: '2018 - 2024',
    },
    {
      institution: 'Hunsen Phnom Penh Thmey High school',
      degree: 'High School',
      duration: '2015 - 2018',
    },
    {
      institution: 'Hunsen Phnom Penh Thmey High school',
      degree: 'Secondary School',
      duration: '2012 - 2015',
    },
    {
      institution: 'Phnom Penh Thmey Primary School',
      degree: 'Primary School',
      duration: '2006 - 2012',
    },
  ]
}

export default function Resume() {
  return <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: {
        delay: 0.9,
        duration: 0.3,
        ease: "easeIn"
      }
    }}
    className="min-h-[80vh] flex flex-col items-center justify-center py-12 lg:py-0"
  >
    <div className="container mx-auto">
      <Tabs
        defaultValue="experience"
        className="flex flex-col lg:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col gap-6 w-full max-w-[380px] mx-auto lg:mx-0">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        
        {/* content */}
        <div className="min-h-[70vh] w-full">

          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col text-center lg:text-left gap-[30px]">
              <h3 className="text-4xl font-bold">
              {experience.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                {experience.desc}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols lg:grid-cols-2 gap-[30px]">
                  {experience.items.map(item => 
                    <li key={item.company} className="bg-[#232329] h-[184px] py-6 px-10 rouned-lg flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl min-h-[42px] text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] bg-accent rotate-45"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  )}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>

          {/* education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col text-center lg:text-left gap-[30px]">
              <h3 className="text-4xl font-bold">
              {education.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                {education.desc}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols lg:grid-cols-2 gap-[30px]">
                  {education.items.map(item => 
                    <li key={item.institution} className="bg-[#232329] h-[184px] py-6 px-10 rouned-lg flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl min-h-[42px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] bg-accent rotate-45"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                  )}
                </ul>
              </ScrollArea>
          </div>
          </TabsContent>

          {/* skills */}
          <TabsContent value="skills" className="w-full">
          <div className="flex flex-col text-center lg:text-left gap-[30px]">
              <h3 className="text-4xl font-bold">
              {skills.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                {skills.desc}
              </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-[30px] gap-4">
                  {skills.skillList.map(skill => 
                    <li key={skill.name}>
                      <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-lg flex justify-center items-center group">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                        {skill.name}
                        </TooltipContent>
                      </Tooltip>
                      </TooltipProvider>
                    </li>
                  )}
              </ul>
            </div>
          </TabsContent>
          
          {/* About me */}
          <TabsContent value="about" className="w-full text-center lg:text-left">
            <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold">
              {about.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
                {about.desc}
              </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto lg:mx-0">
                  {about.info.map((item, index) =>
                    <li
                    key={index}
                    className="flex items-start justify-start lg:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>:
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  )}
                </ul>
              </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
}
