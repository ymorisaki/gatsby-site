import React from "react"
import Header from "./header"
import styled from 'styled-components'

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

const LayoutWrap = styled.div`
  max-width: 1000px;
  margin: 20px auto 0;
  padding: 0 15px;
`

export default Layout
