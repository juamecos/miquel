import React from "react"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import QuadreSerie from "./QuadreSerie"

const Series = () => {
    const response = useStaticQuery(getSeries)
    const series = response.series.edges
    console.log(series)

    return (
        <section className="series">
            <Title title="Sèr" subtitle="ies" />
            <div className="series__center">
                {series.map(({ node }) => {
                    return <QuadreSerie key={node.contentful_id} serie={node} />
                })}
            </div>
        </section>
    )
}

export default Series

export const getSeries = graphql`
    query {
        series: allContentfulSeries(filter: { esQuadre: { eq: true } }) {
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
                    slug
                    esQuadre
                }
            }
        }
    }
`
