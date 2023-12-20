import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from '../../../pages/PageNotFound/PageNotFound';
import RegistrationMenu from '../../../pages/Registration/RegistrationMenu';
import RegistrationDealer from '../../../pages/Registration/RegistrationDealer';
import DealerThankyou from '../../../pages/Registration/DealerThankyou';
import RegistrationSeller from '../../../pages/Registration/RegistrationSeller';

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<RegistrationMenu />} />
                <Route path='/car-dealer' element={<RegistrationDealer />} />
                <Route path='/car-seller' element={<RegistrationSeller />} />
                <Route path='/thankyou-dealer' element={<DealerThankyou />} />
                {/* <Route path='/car-seller' element={<CarSeller />} /> */}
                {/* <Route path='/car-dealer' element={<CarDealer />} /> */}
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </main>
    )
}

export default Main