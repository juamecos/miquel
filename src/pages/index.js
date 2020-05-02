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

export default ({ data }) => (
    <Layout>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="Benvinguts al meu art"
          info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum dolorum perferendis libero."
        >
          <AniLink fade to="/series" className="btn-white">
            Visita les sèries
          </AniLink>
        </Banner>
      </StyledHero>
      <About />
      <Series />
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
