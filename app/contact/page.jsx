"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

import { FaPhoneAlt , FaEnvelope, FaMapMarkedAlt} from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt />,
    name: "Phone",
    value: "+852 9123 4567",
  },
  {
    icon: <FaEnvelope />,
    name: "Email",
    value: "Btongheng@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    name: "Address",
    value: "123456,Cambodia",
  },
]

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { delay: 0.9, duration: 0.3, ease: "easeIn" } }}
  className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-[30px]">
        {/* form */}
        <div className="lg:w-[54%] order-2 lg:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-lg">
            <h3 className="text-4xl text-accent">Let's Talk</h3>
            <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis voluptatum minima.</p>
            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="Firstname"/>
              <Input type="firstname" placeholder="Lastname"/>
              <Input type="firstname" placeholder="Email Address"/>
              <Input type="firstname" placeholder="Phone Number"/>
            </div>
            {/* select */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service"/>
              </SelectTrigger>
              <SelectContent>
                <selectLabel>Select a service</selectLabel>
                <SelectItem value="est">Front-end</SelectItem>
                <SelectItem value="cst">UX/UI</SelectItem>
                <SelectItem value="mst">Graphic Design</SelectItem>
              </SelectContent>
            </Select>
            {/* Textarea */}
            <Textarea className="h-[200px]" placeholder="Type your message here." />
            {/* button */}
            <Button className="max-w-40" size="md">
              Send Message
            </Button>
          </form>
        </div>
        {/* info */}
        <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] lh:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div>{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.name}</p>
                  <h3 className="text-xl">{item.value}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
}
