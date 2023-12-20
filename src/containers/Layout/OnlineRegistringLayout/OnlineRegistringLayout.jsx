import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const OnlineRegistringLayout = (props) => {
    return (
        <div>
            <Header  {...props} />
            <Main  {...props} />
            <Footer  {...props} />
        </div>
    )
}

export default OnlineRegistringLayout;