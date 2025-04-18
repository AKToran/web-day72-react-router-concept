import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  console.log(navigation.state);

  return (
    <div>
      <Header></Header>
      <div className='min-h-[400px]'>
        <Sidebar></Sidebar>
        <div className='text-center'>
          {isNavigating && <h1>Loading..........</h1>}
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;