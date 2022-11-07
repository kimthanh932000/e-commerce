import React from 'react'
import './style.scss'

type Props = {
    text: string,
    label: string,
    isLast?: boolean
}

const Step = ({ text, label, isLast }: Props) => (
    <>
        <div className='c-step'>
            <div className="c-step__label c-step__label--active">
                <span>{label}</span>
            </div>
            <span className='c-step__text'>{text}</span>
        </div>
        {
            !isLast && (<div className='c-step__connector'>
                <span className='c-step__connector-line'></span>
            </div>)
        }
    </>
)

export default Step