import React, { Fragment } from 'react';
import Routers from '../../Routers/Routers';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const Layout = () => {
    return (
        <Fragment>
            <Header/>
            <Routers/>
            <Footer/>
        </Fragment>
        
    );
}

export default Layout;
