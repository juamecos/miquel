import React from "react"
import QuadreSerie from "./QuadreSerie"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getSeries = graphql`
    query {
        seriesQuadres: allContentfulSeries(filter: { esQuadre: { eq: true } }) {
            edges {
                node {
                    titol
                    contentful_id
                    descripcio {
                        descripcio
                    }
                    diaAcabat
                    venut
                    image {
                        fluid {
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                    nomDeLaSerie
                    esQuadre
                }
            }
        }
    }
`

const SeriesList = () => {
    const response = useStaticQuery(getSeries)
    const series = response.seriesQuadres.edges

    return (
        <section className="series">
            <Title title="darrers" subtitle="quadres" />
            <div className="series__center">
                {series.map(({ node }) => {
                    return <QuadreSerie key={node.contentful_id} serie={node} />
                })}
            </div>

            <AniLink fade to="/series" className="btn-primary">
                Anar a Series
            </AniLink>
        </section>
    )
}

export default SeriesList
