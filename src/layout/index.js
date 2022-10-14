import React from 'react'
import Header from './header/Header'
import Main from './main/Main'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  )
}

export default Layout