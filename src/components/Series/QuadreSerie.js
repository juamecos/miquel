import React from "react"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const QuadreSerie = ({ serie }) => {
    const { image, slug, titol } = serie

    return (
        <article className="quadre-serie">
            <div className="quadre-serie__container">
                <Image fluid={image.fluid} className="quadre-serie__img" />
                <AniLink
                    fade
                    to={`/series/${slug}`}
                    className="quadre-serie__link"
                    alt={`quadre de ${titol}`}
                >
                    Amplia
                </AniLink>
            </div>
        </article>
    )
}

export default QuadreSerie
