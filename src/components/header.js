import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styled from 'styled-components'

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
    <StyledHeader className="header">
      <div className="header__inner">
        <Hdg>
          <Link to="/">{ data.site.siteMetadata.title }</Link>
        </Hdg>
        <List>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
        </List>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  background-color: #ccc;

  .header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1000px;
    margin: auto;
    padding: 30px 15px;
  }
`

const Hdg = styled.h1`
  margin: 0;

  > a {
    color: #000;
    text-decoration: none;
  }
`

const List = styled.ul`
  display: flex;
  margin: 0;

  > li {
    list-style: none;

    &:nth-child(n + 2) {
      margin-left: 10px;
    }

    > a {
      text-decoration: none;
      color: #000;
    }
  }
`

export default Header
