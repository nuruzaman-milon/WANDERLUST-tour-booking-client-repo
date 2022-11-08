import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../shared/Footer/Footers';
import Header from '../shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;