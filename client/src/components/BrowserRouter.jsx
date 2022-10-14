import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../views/Layout';
import Login from '../views/Login';

const BrowserRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/settings' />
        <Route path='/profile' /> */}
    </Routes>
  )
}


export default BrowserRouter