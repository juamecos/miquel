import React from "react"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
    return (
        (
            <footer className="footer">
              <div className="footer__links">
                {links.map((item, index) => {
                  return (
                    <AniLink fade key={index} to={item.path}>
                      {item.text}
                    </AniLink>
                  )
                })}
              </div>
              <div className="footer__icons">
                {socialIcons.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                    </a>
                  )
                })}
              </div>
              <div className="footer__copyright">
                copyright &copy; Miquel {new Date().getFullYear()} tots els drets reservats
              </div>
            </footer>
          )
    )
}

export default Footer
