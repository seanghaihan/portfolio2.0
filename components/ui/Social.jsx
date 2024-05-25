import Link from "next/link"
import { FiFacebook, FiInstagram, FiGithub } from "react-icons/fi"

const socials = [
    {
        icon: <FiFacebook />,
        path: ""
    },
    {
        icon: <FiInstagram />,
        path: ""
    },
    {
        icon: <FiGithub />,
        path: ""
    },
    {
        icon: <FiFacebook />,
        path: ""
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
