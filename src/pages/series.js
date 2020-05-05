import React from "react"
import Layout from "../components/Layout"
import Series from "../components/Series/Series"
import StyledHero from "../components/StyledHero"

const contacte = ({ data }) => {
    console.log(data)

    return (
        <Layout>
            <StyledHero
                home={false}
                img={data.gallery.childImageSharp.fluid}
            ></StyledHero>
            <Series />
        </Layout>
    )
}

export default contacte

export const gallery = graphql`
    query {
        gallery: file(relativePath: { eq: "gallery.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
