import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className='min-h-[400px]'>
        <Sidebar></Sidebar>
        <div className='text-center'>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;