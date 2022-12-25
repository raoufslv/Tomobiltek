import React from 'react';
import Home from '../pages/Home.jsx'
import Compte from '../pages/Compte.jsx'
import Achat from '../pages/Achat.jsx'
import Vendre from '../pages/Vendre.jsx'
import Annonce from '../pages/Annonce.jsx'
import { Routes, Route } from 'react-router-dom'
import { MyProvider } from '../utils/MyContext.jsx'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import AboutUs from '../pages/AboutUs'

const Routers = () => {
    return (
    <MyProvider>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Achat' element={<Achat/>}></Route>
          <Route path='/Vendre' element={<Vendre/>}></Route>
          <Route path='/Compte' element={<Compte/>}></Route>
          <Route path='/Annonce' element={<Annonce/>}></Route>
          <Route path='/SignIn' element={<SignIn/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
          <Route path='/AboutUs' element={<AboutUs/>}></Route>
        </Routes>
    </MyProvider>
    );
}

export default Routers;
