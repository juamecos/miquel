import React from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"



const exposicions = ({data}) => {
    return (
        <Layout>
            <StyledHero home="true" img={data.enconstrucio.childImageSharp.fluid}>
            <Banner
          title="t'has confós"
          info="Esta página no existeix"
        >
          <AniLink fade to="/contacte" className="btn-white">
            contacta amb mi
          </AniLink>
        </Banner>
            </StyledHero>
        </Layout>
    )
}

export default exposicions

export const query = graphql`
query {
  enconstrucio: file(relativePath: { eq: "pintura.jpg" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
