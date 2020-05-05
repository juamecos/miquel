import React from "react"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
            <Title title="Quí" subtitle="sóc" />
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
                    <h4>m'encanta la pintura</h4>
                    <p>
                        M’agrada la pintura com a expresió del meu interior on
                        puc desemvolupar la meua creativitat sense llimits
                    </p>
                    <p>
                        Aci espose tota la meua colecció de quadres, espere q us
                        agraden
                    </p>
                    <button type="button" className="btn-primary">
                        Sèries
                    </button>
                </article>
            </div>
        </section>
    )
}

export default About
