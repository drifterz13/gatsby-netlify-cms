import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Blog posts</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div
        css={css`
          padding: ${rhythm(1)};
          margin-bottom: ${rhythm(2)};
          border: 5px solid #6decc9;
        `}
        key={node.id}
      >
        <h1>{node.frontmatter.title}</h1>
        <p>{node.excerpt}</p>
        <hr
          css={css`
            background: #fafafa;
          `}
        />
        <i>{node.frontmatter.date}</i>
        <div
          css={css`
            margin-top: ${rhythm(0.5)};
            color: skyblue;
          `}
        >
          <Link to={node.fields.slug}>Read more</Link>
        </div>
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 150)
        }
      }
    }
  }
`
