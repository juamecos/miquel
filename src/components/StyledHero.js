import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
    query {
        defaultBcg: file(relativePath: { eq: "hero.jpeg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
`

const StyledHero = ({ img, className, children, home }) => {
    const data = useStaticQuery(getImage)
    return (
        <BackgroundImage
            className={className}
            fluid={img || data.defaultBcg.childImageSharp.fluid} // if we do not receive image from Contentful
            home={home}
        >
            {children}
        </BackgroundImage>
    )
}

export default styled(StyledHero)`
    min-height: ${(props) => (props.home ? "calc(100vh - 62px)" : "50vh")};
    background: ${(props) =>
        props.home
            ? "linear-gradient(180deg, rgba(69,49,93,0.70) 0%, rgba(255,36,0,0.70) 82%, rgba(255,146,128,0.700717787114846) 92%)"
            : "none"};
    background-position: center;
    background-size: cover;
    opacity: 1 !important; /* default 0.99 so filter won't work*/
    display: flex;
    justify-content: center;
    align-items: center;
`
