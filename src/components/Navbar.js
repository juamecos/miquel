import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"

const Navbar = () => {
    const [isOpen, setNav] = useState(false)
    const toggleNav = () => {
        setNav((isOpen) => !isOpen)
    }

    const navLinksClass = isOpen ? `navbar__links show-nav` : `navbar__links`

    return (
        <nav className="navbar">
            <div className="navbar__center">
                <div className="navbar__header">
                    <div className="navbar__logo">MMMart</div>
                    <button
                        type="button"
                        className="navbar__mobilmenu"
                        onClick={toggleNav}
                        alt="menu button"
                    >
                        <FaAlignRight className="navbar__mobilmenu--icon" />
                    </button>
                </div>
                <ul className={navLinksClass}>
                    {links.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="navbar__link"
                                alt={`Link to ${item.path}`}
                            >
                                <AniLink fade to={item.path}>
                                    {item.text}
                                </AniLink>
                            </li>
                        )
                    })}
                </ul>
                <div className="navbar__social-links">
                    {socialIcons.map((item, index) => {
                        return (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                alt={`Link to ${item.url}`}
                            >
                                {item.icon}
                            </a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
