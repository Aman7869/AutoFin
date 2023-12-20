import React from "react";
import { Route, Routes } from 'react-router-dom';
import PageNotFound from '../../../pages/PageNotFound/PageNotFound';
import Home from '../../../pages/Home';
import Login from "../../../pages/Login/Login";

const Main = (props) => {
  return (
    <main>
    <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/login' element = {<Login />} />
        {/* <Route path='/date-reservation' element = {<YourItinerary />} /> */}
        {/* <Route path='/date-info' element = {<SelectVehicle />} /> */}
        <Route path='*' element = {<PageNotFound />} />
    </Routes>
</main>
  );
};

export default Main;
