import React from 'react';
import './Assets/Scss/Style.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Outlet, } from "react-router-dom";

import SmoothScroll from './Component/SmoothScroll';
import Footer from './Component/Footer';
import MainTrading from './Component/MainTrading';




function App() {

  function Headeronly() {
    return (
      <>
        <Outlet />
        <Footer />
        


      </>
    );
  }

  return (
    <>
      <Router>
        <SmoothScroll />
        <Routes>
          <Route element={<Headeronly />}>
          <Route path='/' element={<MainTrading />} />
            <Route path='*' element={<MainTrading />} />
            <Route path='/main-trade' element={<MainTrading />} />
            <Route path='/main-trade' element={<MainTrading />} /> 
          </Route>

        </Routes>
      </Router>
      <ToastContainer />
    </>


  );
}
export default App;
