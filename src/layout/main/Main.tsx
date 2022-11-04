import React from 'react'

type Props = {
    children: React.ReactNode
}

const Main = ({children}: Props) => {
  return (
    <main className='l-main'>
      <div className="container">
        {children}
      </div>
    </main>
  )
}

export default Main