import React from "react"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getPropera = graphql`
    query serieImage {
        serieImage: file(relativePath: { eq: "serie-poster.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const Series = (data) => {
    const { serieImage } = useStaticQuery(getPropera)
    return (
        <div className="serie">
            <Title title="Propera" subtitle="sèrie" />
            <div className="serie__container">
                <article className="serie__info">
                    <h3>
                        Del Roig <span>Al Blau</span>
                    </h3>
                    <h4>Llançament 6 de maig</h4>
                </article>
                <article className="serie__img--wrapper">
                    <div className="serie__img">
                        <Img
                            fluid={serieImage.childImageSharp.fluid}
                            alt="Foto meua"
                        />
                    </div>

                    <AniLink
                        fade
                        to="/series"
                        type="button"
                        className="btn-primary"
                    >
                        Visita les sèries
                    </AniLink>
                </article>
            </div>
        </div>
    )
}

export default Series
