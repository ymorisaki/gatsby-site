import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

const App = ({ data }) => {
  const post = data.markdownRemark
  console.log(post.html)
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  } 
`

export default App