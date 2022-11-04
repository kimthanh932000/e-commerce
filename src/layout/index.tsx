import React from 'react'
import Header from './header/Header'
import Main from './main/Main'

type Props = {
    children: React.ReactNode,
    totalItems: number
}

const Layout = ({children, totalItems}: Props) => {
  return (
    <>
      <Header totalItems={totalItems}/>
      <Main>{children}</Main>
    </>
  )
}

export default Layout