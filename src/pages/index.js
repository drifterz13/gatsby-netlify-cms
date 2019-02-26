import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <React.Fragment key={node.id}>
        <h1>{node.frontmatter.title}</h1>
        <p>{node.frontmatter.description}</p>
        <i>{node.frontmatter.date}</i>
        <hr />
        <div dangerouslySetInnerHTML={{__html: node.html}} />
      </React.Fragment>
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
          html
          frontmatter {
            title
            date
            layout
            description
          }
        }
      }
    }
  }
`
