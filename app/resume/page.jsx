"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa"
import { SiTailwindcss,SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import {motion} from "framer-motion"

// skill data
const skills = {
  title: "My Skill",
  desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam facilis rem ut animi eum aspernatur sequi id quaerat',
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
      icon: <FaReact />,
      name: "React JS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next JS",
    },

  ]
}

// about data
const about = [
  {
    title: "About me",
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam facilis rem ut animi eum aspernatur sequi id quaerat',
    info: [
      {
        fieldName: "Name",
        fieldValue: "Btongheng",
      },
      {
        fieldName: "Phone",
        fieldValue: "+855 999 888 777",
      },
      {
        fieldName: "Exprience",
        fieldValue: "4+ years",
      },
      {
        fieldName: "Github",
        fieldValue: "Btongheng",
      },
      {
        fieldName: "Nataionality",
        fieldValue: "Cambodian",
      },
      {
        fieldName: "Email",
        fieldValue: "Btongheng@gmail.com",
      },
      {
        fieldName: "Freelancer",
        fieldValue: "Available",
      },
    
    ]
  }
]

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: "My experience",
  desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam facilis rem ut animi eum aspernatur sequi id quaerat',
  items: [
    {
      company: 'Google',
      position: 'Software Engineer',
      duration: '2022 - Present',
    },
    {
      company: 'Google 2',
      position: 'Software Engineer',
      duration: '2021 - Present',
    },
    {
      company: 'Google 3',
      position: 'Software Engineer',
      duration: '2021 - Present',
    },
    {
      company: 'Google 3',
      position: 'Software Engineer',
      duration: '2021 - Present',
    },
    {
      company: 'Google 3',
      position: 'Software Engineer',
      duration: '2021 - Present',
    },
  ]
}

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: "My Education",
  desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam facilis rem ut animi eum aspernatur sequi id quaerat',
  items: [
    {
      institution: 'NIB',
      degree: 'IT',
      duration: '2018 - 2024',
    },
    {
      institution: 'PPT',
      degree: 'High School',
      duration: '2015 - 2018',
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
        defaultValue="skills"
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
                      <h3 className="text-xl max-w-[260px] min-h-[42px] text-center lg:text-left">{item.position}</h3>
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
                      <h3 className="text-xl max-w-[260px] min-h-[42px] text-center lg:text-left">{item.degree}</h3>
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
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-[30px]">
                  {skills.skillList.map(skill => 
                    <li key={skill.name}>
                      <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                        {skill.icon}
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
          <TabsContent value="about" className="w-full">
            About me
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
}
