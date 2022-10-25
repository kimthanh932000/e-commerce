import React from 'react'
import Header from './header/Header'
import Main from './main/Main'

const Layout = ({children, totalItems}) => {
  return (
    <>
      <Header totalItems={totalItems}/>
      <Main>{children}</Main>
    </>
  )
}

export default Layout