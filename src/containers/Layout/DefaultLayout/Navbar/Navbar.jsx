import React from 'react'
import { Link } from "react-router-dom";
import { NavbarStyled, LoginButton } from "./style"
const Navbar = () => {
    return (
        <NavbarStyled>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand autofin-section" href="#">Autofin</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ margin: "0 auto" }}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>


                        </ul>
                        <div>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <a className='btn login-btn me-2'>Login</a>
                                    <a className='btn registration-btn'>Registration</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </NavbarStyled>
    )
}

export default Navbar