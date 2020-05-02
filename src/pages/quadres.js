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
          title="ja queda poc"
          info="Estem traballant per a tu"
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
  enconstrucio: file(relativePath: { eq: "enconstruccio.jpg" }) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

