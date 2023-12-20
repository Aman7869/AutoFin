import React from 'react';
import { HeaderStyled } from "./style"

const Header = () => {
    return (
        <div>
            <HeaderStyled>
                
                <ul className='d-flex p-2 list-group-flush '>
                    <li className='list-group-item pe-2'>kontakt@auto-fin.de</li>
                    <li className='list-group-item pe-2'>0221-29 24 15 00</li>
                    <li className='list-group-item ms-auto'>Folgen</li>
                </ul>

            </HeaderStyled>
        </div>
    )
}

export default Header