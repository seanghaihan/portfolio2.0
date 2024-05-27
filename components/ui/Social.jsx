import Link from "next/link"
import { FiFacebook, FiInstagram, FiGithub } from "react-icons/fi"
import { FaBehance } from "react-icons/fa";

const socials = [
    {
        icon: <FiFacebook />,
        path: "https://www.facebook.com/buntongheng76"
    },
    {
        icon: <FiInstagram />,
        path: "https://www.instagram.com/bun_tongheng?r=nametag"
    },
    {
        icon: <FiGithub />,
        path: "https://github.com/btongheng"
    },
    {
        icon: <FaBehance />,
        path: "https://www.behance.net/btongheng"
    },
]

export default function Social({ containerStyles, iconStyles }) {
    return <div className={containerStyles}>
        {socials.map(item =>
            <Link key={item.icon} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>

        )}
    </div>
}
