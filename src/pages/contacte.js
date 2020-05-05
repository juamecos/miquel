import React from "react"
import Layout from "../components/Layout"
import Contact from "../components/Contact/Contact"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const contacte = ({ data }) => {
    return (
        <Layout>
            <StyledHero
                home={false}
                img={data.contact.childImageSharp.fluid}
            ></StyledHero>
            <Contact />
        </Layout>
    )
}

export default contacte

export const query = graphql`
    query {
        contact: file(relativePath: { eq: "contact.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
