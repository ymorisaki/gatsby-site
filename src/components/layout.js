/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "./header"
import styled from 'styled-components'

const LayoutWrap = styled.div`
  max-width: 1000px;
  margin: 20px auto 0;
  padding: 0 15px;
`

const Layout = ({children}) => {
  return (
    <>
    <Header />
    <LayoutWrap>
      <div>
        {children}
      </div>
    </LayoutWrap>
    </>
  )
}

export default Layout
