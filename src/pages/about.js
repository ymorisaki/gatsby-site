import React from 'react'
import Layout from '../components/layout'
import '../components/layout.css'
import { graphql } from 'gatsby'

const App = ({ data }) => {
  return (
    <Layout>
      <h1>about {data.site.siteMetadata.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default App