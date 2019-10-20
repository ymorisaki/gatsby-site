import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header style={headerStyle}>
      <div style={innerStyle}>
        <h1 style={hdgStyle}>
          <Link to="/" style={linkStyle}>{ data.site.siteMetadata.title }</Link>
        </h1>
        <ul style={listStyle}>
          <li style={list}><Link to="/" style={listLink}>Home</Link></li>
          <li style={list}><Link to="/about/" style={listLink}>About</Link></li>
          <li style={list}><Link to="/contact/" style={listLink}>Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}

const headerStyle = {
  width: `100%`,
  backgroundColor: `#ccc`,
}

const innerStyle = {
  display: `flex`,
  alignItems: `center`,
  justifyContent: `space-between`,
  maxWidth: `1000px`,
  margin: `auto`,
  padding: `30px 15px`
}

const hdgStyle = {
  margin: `0`
}

const linkStyle = {
  textDecoration: `none`,
  color: `#000`
}

const listStyle = {
  display: `flex`,
  margin: `0`
}

const list = {
  listStyle: `none`,
}

const listLink = {
  color: `#000`,
  marginRight: `10px`,
  marginBottom: `0`
}

export default Header
