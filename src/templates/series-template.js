import React from "react"
import { graphql } from "gatsby"
// import Title from "../../scr/components/Title"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../../src/components/Layout"
import Image from "gatsby-image"

const Template = ({ data }) => {
    const { titol, image, descripcio, nomDeLaSerie } = data.quadre
    return (
        <Layout>
            <div className="quadre">
                <div className="quadre__center">
                    <div className="quadre__nom-serie">{nomDeLaSerie}</div>
                    <h1 className="quadre__title">{titol}</h1>
                    <p className="quadre__description">
                        {descripcio.descripcio}
                    </p>
                    <div className="quadre__img">
                        <Image fluid={image.fluid} />
                    </div>

                    <AniLink
                        fade
                        to="/series"
                        alt="torna a sèries"
                        className="btn-primary"
                    >
                        Torna a sèries
                    </AniLink>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        quadre: contentfulSeries(slug: { eq: $slug }) {
            titol
            descripcio {
                descripcio
            }
            image {
                fluid(maxWidth: 1000) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
            createdAt
            nomDeLaSerie
        }
    }
`

export default Template
