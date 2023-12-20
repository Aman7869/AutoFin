import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from './containers/Layout/DefaultLayout/DefaultLayout';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OnlineRegistringLayout from "./containers/Layout/OnlineRegistringLayout/OnlineRegistringLayout";

const App = () => {
  console.log('App component called');
  return (
  <>
   <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <Routes>
        <Route path="*" element={<DefaultLayout />} />
        <Route path="/registration/*" element={<OnlineRegistringLayout />} />
      </Routes>
  </>
  );
}

export default App;
