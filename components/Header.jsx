import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

export default function Header() {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href={'/'}>
                    <h1 className="text-4xl font-semibold">
                        Seanghai
                        <span className="text-accent">.</span>
                        h
                    </h1>
                </Link>
                {/* desktop nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <Nav />
                    <Link href={"/contact"}>
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                {/* mobile nav */} 
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}
