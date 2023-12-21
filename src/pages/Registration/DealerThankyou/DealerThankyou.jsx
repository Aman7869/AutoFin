import React from 'react'
import RegisterSideComponent from '../../../Components/RegisterSideComponent'
import { DealerThankyouStyled } from "./style"

const DealerThankyou = () => {
    const sidebarContent = {
        autofin: " Collaborate with AUTOFIN in just a few steps",
        contact: "We are here for you!"
    }
    console.log("Aman");
    console.log("second feature.");
    return (
        <>
            <DealerThankyouStyled>
                <div className='container'>
                    <div className='row registration-section'>
                        <div className='col-md-9 registration-option'>
                            <button className='btn thanks-btn'>Thank you for your registration</button>
                            <p className='pt-4'>Thank you for your registration, "CUSTOMER NAME"</p>
                            <p>What are the next steps?</p>
                            <ol style={{paddingLeft: "1rem",textAlign: "justify"}}>
                                <li>
                                    After checking your registration, we will send you our cooperation agreement by email.</li>
                                <li>
                                    Sign the cooperation agreement digitally.</li>
                                <li>If you would like to have access to the AUTOFIN portal, register here.</li>
                                <li>
                                    Send the portal registration link to your employees.
                                </li>
                            </ol>
                            <p>
                                If you have any questions, please call me. You can reach me Monday to Friday from 9:00 a.m. to 6:00 p.m.
                                I wish you continued good business and good cooperation!
                                Gregor Hoffmann
                            </p>
                        </div>
                        <div className='col-md-3 side-component'>
                            <RegisterSideComponent content={sidebarContent} />
                        </div>
                    </div>
                </div>
            </DealerThankyouStyled>
        </>
    )
}

export default DealerThankyou
