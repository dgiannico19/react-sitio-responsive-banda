import React, { Fragment } from 'react';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Discos from '../components/Discografia';
import Footer from '../components/Footer';

const Musica = () => {
  return (
    <Fragment>
      <Nav />
      <Header titulo="DISCOS" />
      <Discos />
      <Footer />
    </Fragment>
  );
};

export default Musica;
