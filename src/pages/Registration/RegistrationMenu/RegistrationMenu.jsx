import React from 'react'
import { RegistrationStyle } from './style'
import DealerImg from '../../../assets/images/carsharing-car-rental-icon-class.png'
import SellerImg from '../../../assets/images/images.png'
import RegisterSideComponent from '../../../Components/RegisterSideComponent'
import { Link } from 'react-router-dom'

const RegistrationMenu = () => {
    const sidebarContent = {
        autofin: " Collaborate with AUTOFIN in just a few steps",
        contact: "We are here for you!"
    }
    return ( 
        <>
            <RegistrationStyle>
                <div className='container'>
                    <div className='row registration-section'>
                        <div className='col-md-9 registration-option'>
                            <p className='text-center'>Thank you very much for your interest.They are? </p>
                            <div className='d-flex justify-content-around pt-5'>
                                <div>
                                    <img src={SellerImg} className='img-car' alt="seller car" />
                                    <p className='pt-4 text-center'>Car seller</p>
                                    <Link to={"car-seller"} className='btn btn-registration'>Register</Link>
                                </div>
                                <div>
                                    <img src={SellerImg} className='img-car' alt="dealer car" />
                                    <p className='pt-4 text-center'>Car dealer</p>
                                    <Link to ={"car-dealer"} className='btn btn-registration'>Register</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 side-component'>
                            <RegisterSideComponent content ={sidebarContent} />
                        </div>
                    </div>
                </div>
            </RegistrationStyle>
        </>
    )
}

export default RegistrationMenu