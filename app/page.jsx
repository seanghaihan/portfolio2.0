import Photo from "@/components/Photo"
import Social from "@/components/ui/Social"
import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"

export default function Home() {

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-24">
              {/* text */}
              <div className="text-center lg:text-left order-2 lg:order-none">
                <span className="text-xl">Graphic Designer</span>
                <h1 className="h1">
                  Hello I'm <br /><span className="text-accent">KonKhmer</span>
                </h1>
                <p className="max-w-[500px] mb-9 text-white/80">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora fugiat maxime repellat iste dignissimos maiores sapiente? Enim, ullam?</p>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2">
                    <span>Download CV</span>
                    <FiDownload className="text-xl"/>
                  </Button>
                  <div className="mb-8 lg:mb-0">
                    <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-lg flex items-center justify-center text-accent text-base hover:bg-accent hover:text-primary hover:transiton-all hover:duration-300" />
                  </div>
                </div>
              </div>
              {/* Photo */}
              <div className="order-1 lg:order-none mb-8 lg:mb-0">
                <Photo />
              </div>
        </div>
      </div>
    </section>
  )
}
