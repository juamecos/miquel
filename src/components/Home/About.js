import React from "react"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "keloco-dark.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className="about">
      <Title title="Quí" subtitle="sóc" />
      <div className="about__container">
        <article className="about__img--wrapper">
          <div className="about__img">
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="Foto meua"
            />
          </div>
        </article>
        <article className="about__info">
          <h4>m'encanta la cassalla</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            mollitia corrupti esse.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            mollitia corrupti esse.
          </p>
          <button type="button" className="btn-primary">
            Yo en aigua seltz
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
