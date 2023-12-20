import React from 'react'
import { SideStyle } from "./style"

const RegisterSideComponent = (prop) => {
    return (
        <SideStyle>
            <div className='autofin'>
                <p className='fs-20 lh-1'>
                    {prop.content.autofin}
                </p>

                <p style = {{fontSize: "13px"}}>Lorem ipsum dolor sit amet ass</p>
            </div>

            <div className='contact-section'>
                <p className='mb-0 question'>Any question?</p>
                <p className='mb-0 question'>{prop.content.contact}</p>
                <p className='mb-0'>0157-35454365</p>
                <p className='mb-0'>demo@gmail.com</p>
            </div>
        </SideStyle>
    )
}

export default RegisterSideComponent