import React, { Fragment } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Formulario from '../components/Formulario';
import Footer from '../components/Footer';

const Contacto = () => {
  return (
    <Fragment>
      <Nav />
      <Header titulo="CONTACTO" />
      <Formulario />
      <Footer />
    </Fragment>
  );
};

export default Contacto;
