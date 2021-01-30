import React, { Fragment } from 'react';
import styled from 'styled-components';
import { DatosName } from './Discografia';

const TabaFooter = styled.footer`
  padding: 0 10%;
  height: max-content;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  font-family: 'Cosmic-blaster';
`;

const FooterContacto = styled.div``;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterButtons = styled.div`
  display: flex;
  width: 50%;
`;

export const Copyright = styled.p`
  font-size: 2.5rem;
  text-align: center;
  @media (max-width: 790px) {
    font-size: 1.5rem;
  }
  @media (max-width: 650px) {
    font-size: 1rem;
  }
`;

const DatosContacto = styled.div`
  font-family: 'Stay-home';

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &:a {
    width: 20px;
  }
`;

const FooterI = styled.i`
  /* padding: 5px; */
  color: orange;
  border-radius: 50%;
  transform: scale(0.7);
  &:hover {
    color: blue;
    transition-property: transform;
    transition-duration: 0.2s;
    transform: scale(1.3);
  }
`;

export const ContactoH2 = styled.h2`
  font-size: 1.5rem;
  @media (max-width: 790px) {
    font-size: 1rem;
  }
  @media (max-width: 650px) {
    font-size: 0.85rem;
  }
`;

const FooterContrataciones = styled.p`
  font-size: 1.2rem;
  @media (max-width: 790px) {
    font-size: 0.9rem;
  }
  @media (max-width: 650px) {
    font-size: 0.7rem;
  }
`;

const Footer = () => {
  //Obtener año actual
  const fecha = new Date();
  const anio = fecha.getFullYear();

  return (
    <Fragment>
      <TabaFooter>
        <FooterDiv>
          <DatosName>Seguinos Conan</DatosName>
          <FooterButtons>
            <a href="https://www.instagram.com/lostabaleros/">
              <FooterI className="fab fa-instagram fa-2x"></FooterI>
            </a>

            <a href="https://it-it.facebook.com/los.tabaleros/">
              <FooterI className="fab fa-facebook fa-2x"></FooterI>
            </a>
            <a href="https://twitter.com/lostabaleros?lang=es">
              <FooterI className="fab fa-twitter fa-2x"></FooterI>
            </a>
            <a href="https://www.youtube.com/channel/UC4ObLsacieLRUJtCXMSlKjA">
              <FooterI className="fab fa-youtube fa-2x"></FooterI>
            </a>
          </FooterButtons>
        </FooterDiv>
        <FooterContacto>
          <DatosName>CONTACTO</DatosName>
          <DatosContacto>
            <div>
              <ContactoH2>Contrataciones aca Conan</ContactoH2>

              <FooterContrataciones>
                Melisa​ ​Lima​{' '}
                <a href="mailto:contrataciones@lostabaleros.com">
                  <FooterI className="fas fa-envelope-square fa-2x" />
                </a>
              </FooterContrataciones>
            </div>
            <FooterContrataciones>
              Por otras consultas escribinos aca
              <a href="mailto:lostabaleros@gmail.com">
                <FooterI className="fas fa-envelope-square fa-2x" />
              </a>
            </FooterContrataciones>
            ​
          </DatosContacto>
        </FooterContacto>
      </TabaFooter>
      <Copyright>
        ©<span>{anio}</span> Tabaleros – by Michi
      </Copyright>
    </Fragment>
  );
};

export default Footer;
