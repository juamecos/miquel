import React from 'react'
import Image from "gatsby-image"

const InstaPost = ({post}) => {
    return (
        <article className="instaPost">
            <div className="instaPost__container">
                <Image 
                fixed={post.localFile.childImageSharp.fixed} 
                className="instaPost__img"
                />
                <a href={`https://www.instagram.com/p/${post.id}`} 
                className="instaPost__link"
                target="_blank"
                rel="noopener noreferrer"
                alt="Obri">Obri a Instagram</a>
            </div>
        </article>
    )
}

export default InstaPost
