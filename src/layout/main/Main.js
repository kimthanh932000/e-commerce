import React from 'react'

const Main = ({children}) => {
  return (
    <main className='l-main'>
      <div className="container">
        {children}
      </div>
    </main>
  )
}

export default Main