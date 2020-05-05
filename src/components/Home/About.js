import React from "react"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getAbout = graphql`
    query aboutImage {
        aboutImage: file(relativePath: { eq: "keloco-dark.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const About = () => {
    const { aboutImage } = useStaticQuery(getAbout)

    return (
        <section className="about">
            <Title title="Qui" subtitle="sóc" />
            <div className="about__container">
                <article className="about__img--wrapper">
                    <div className="about__img">
                        <Img
                            fluid={aboutImage.childImageSharp.fluid}
                            alt="Foto de Miquel Mas Martinez"
                        />
                    </div>
                </article>
                <article className="about__info">
                    <h4>M'encanta la pintura</h4>
                    <p>Sóc Miquel Mas Martinez</p>
                    <p>
                        M'agrada la pintura com a expressió del meu interior on
                        puc desenvolupar la meua creativitat sense límits
                    </p>
                    <p>
                        Ací expose tota la meua col·lecció de quadres, espere
                        que us agraden
                    </p>
                    <AniLink
                        fade
                        to="/contacte"
                        type="button"
                        className="btn-primary"
                    >
                        Contacta amb mi
                    </AniLink>
                </article>
            </div>
        </section>
    )
}

export default About
