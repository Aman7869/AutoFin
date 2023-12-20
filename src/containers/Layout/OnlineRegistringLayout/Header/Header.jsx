import React from 'react'
import { HeaderStyle } from './style'

const Header = () => {
    return (
        <div className='container'>
            <HeaderStyle>
                <div className='d-flex justify-content-around'>
                    <div>
                        <h2>AutoFin</h2>
                    </div>
                    <div className=''>
                        <p className='registration-text'>Online registration of car dealership</p>
                    </div>
                </div>
            </HeaderStyle>

        </div>
    )
}

export default Header