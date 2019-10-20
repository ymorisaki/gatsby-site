import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import '../components/layout.css'

const App = ({ data }) => {
  return (
    <Layout>
      <h2>{data.allMarkdownRemark.totalCount}posts</h2>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___date],
        order: DESC
      }) {
      totalCount
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
          excerpt
        }
      }
    }
  }
`

export default App