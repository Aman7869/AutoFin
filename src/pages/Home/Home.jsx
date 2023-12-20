import React from 'react'
import DashBoardBanner from '../../Components/DashBoardBanner'

const Home = () => {
  return (
    <>
    <DashBoardBanner />
    <div className='container pt-4'>
    <div>
        <h5 style={{lineHeight: 0, color: "#F9592C"}}>Unsere Losung</h5>
        <h2 className='theme-color'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, iure!
        </h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, pariatur beatae sapiente delectus vero, dicta unde minima perspiciatis molestias placeat cumque ab, sunt provident blanditiis.
        </p>
    </div>
    </div>
    </>
  )
}

export default Home