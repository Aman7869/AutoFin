import React from 'react'
import Main from "./Main";
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
const DefaultLayout = (props) => {
    console.log('Default component called');
  return (
    <div>
        <Header  {...props} />
        <Navbar  {...props} />
        <Main  {...props} />
        <Footer  {...props} />
    </div>
  )
}

export default DefaultLayout