import React from 'react'
import './style.scss'
import { AddressForm, PaymentForm, Stepper, Step } from '../../../components'

const Checkout = () => {
    return (
        <div className='p-checkout'>
            <h4 className='p-checkout__ttl'>Checkout</h4>
            {/* <div className='c-stepper u-mb-md'>
                <div className='c-step'>
                    <div className="c-step__num c-step__num--active">
                        <span>1</span>
                    </div>
                    <span className='c-step__label'>Shipping address</span>
                </div>
                <div className='c-step__connector'>
                    <span className='c-step__connector-line'></span>
                </div>
                <div className='c-step'>
                    <div className="c-step__num">
                        <span>2</span>
                    </div>
                    <span className='c-step__label'>Payment details</span>
                </div>
                <div className='c-step__connector'>
                    <span className='c-step__connector-line'></span>
                </div>                
                <div className='c-step'>
                    <div className="c-step__num">
                        <span>&#10003;</span>
                    </div>
                    <span className='c-step__label'>Confirmation</span>
                </div>
            </div> */}
            <Stepper>
                <Step text={'Shipping address'} label={'1'} />
                <Step text={'Payment details'} label={'2'} isLast={true}/>
            </Stepper>
            <AddressForm />
        </div>
    )
}

export default Checkout