import React from 'react';
import Homepage from './Homepage';
import EditTask from './EditTask';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Account from './Account';
import Footer from './Footer';
const Pages = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/editUser/:id' element={<EditTask/>}></Route>
            <Route path='/account' element={<Account/>}></Route>
            </Routes>
            <Footer/>
        </div>
    );
};

export default Pages;