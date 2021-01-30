import React, { Fragment } from 'react';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Biografia from '../components/Biografia';

const Home = () => {
  return (
    <Fragment>
      <Nav />
      <Header titulo="LOS TABALEROS" />
      <Biografia />
      <Footer />
    </Fragment>
  );
};

export default Home;
