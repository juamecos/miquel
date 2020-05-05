import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import "normalize.css"
import "../styles/main.scss"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Series from "../components/Home/Series"
import SeriesList from "../components/Series/SeriesList"

export default ({ data }) => (
    <Layout>
        <StyledHero home={true} img={data.defaultBcg.childImageSharp.fluid}>
            <Banner
                title="Benvinguts al meu art"
                info="Distopia, historia,imaginacio i políticament incorrecte"
            >
                <AniLink fade to="/series" className="btn-white">
                    Visita les sèries
                </AniLink>
            </Banner>
        </StyledHero>
        <About />
        {/* <Series />
        {/* <InstaPosts /> 
        <SeriesList /> */}
    </Layout>
)

export const query = graphql`
    query {
        defaultBcg: file(relativePath: { eq: "hero.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
