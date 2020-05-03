import React from "react"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import InstaPost from "./InstaPost"
import links from "../../constants/social-icons"

console.log(links);

const InstaPosts = () => {
    const response = useStaticQuery(getPosts)
    const posts = response.instaPosts.edges
        return (
            <section className="instaPosts">
              <Title title="Insta" subtitle="Gram" />
              <div className="instaPosts__center">
                  {posts.map(({ node }) => {
                  return <InstaPost key={node.id} post={node} />
                  })}
              </div>
            </section>
        )
}

export default InstaPosts

export const getPosts = graphql`
  query {
    instaPosts: allInstaNode {
    edges {
      node {
        id
        localFile {
          childImageSharp {
            fixed(width: 400, height: 400) {
                ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
  }
`
