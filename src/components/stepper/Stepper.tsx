import React from 'react'
import './style.scss'

type Props = {
    children: React.ReactNode
}

const Stepper = ({children}: Props) => {
    return (
        <div className='c-stepper'>
            {children}
        </div>)
}

export default Stepper