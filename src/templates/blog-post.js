import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div
        css={css`
          margin-bottom: ${rhythm(2)};
        `}
      >
        <h1
          css={css`
            color: #6decc9;
          `}
        >
          {post.frontmatter.title}
        </h1>
        <Img
          css={css`
            height: 350px;
            margin: ${rhythm(2)} 0;
            @media (max-width: 480px) {
              height: 200px;
            }
          `}
          fluid={post.frontmatter.cover_image.childImageSharp.fluid}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Link
          css={css`
            color: skyblue;
          `}
          to="/"
        >
          Back
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover_image {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
