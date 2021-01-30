import React from 'react';
import styled from 'styled-components';
import foto from '../assets/recital1.png';

import { ContactoH2 } from './Footer';

const Biogra = styled.div`
  /* width: 50%; */
  margin: 20px auto;
  background-color: rgb(68, 68, 153, 0.5);
  color: #fff;
  padding: 15px;
`;

const CuadroImagen = styled.img`
  padding: 1rem;
  float: left;
  margin-right: 15px;
  height: 200px;
`;

const CuadroTexto = styled.div`
  /* width: 50%; */
  padding: 5%;
`;

const ParrafoBio = styled.p`
  font-family: 'Stay-home';
  font-size: 1.6rem;
  @media (max-width: 790px) {
    font-size: 0.8rem;
  }
  @media (max-width: 650px) {
    font-size: 0.6rem;
  }
`;

const Biografia = () => {
  return (
    <Biogra>
      <CuadroImagen src={foto} alt="jose"></CuadroImagen>
      <CuadroTexto>
        <ContactoH2>
          Grupo porteño folclorico con influencias rock punk
        </ContactoH2>
        <ParrafoBio>
          Los Tabaleros emergen del folklore con la potencia del punk y del
          rock. La banda logró reinventar el género con una propuesta potente y
          desbordante. Sus shows funcionan como una experiencia 360, donde el
          espectador es atravesado por un sinfín de sensaciones. Con verdaderas
          puestas fantasiosas, una lírica poderosa, 4 discos de Estudio y 1 en
          vivo, han participado en grillas populares y eclécticas.
        </ParrafoBio>
        <ParrafoBio>
          En 2019 presentaron en todo el país su cuarto disco Chuy, coproducido
          por Martín “Moska” Lorenzo y Mariano Francescheli (de Los Auténticos
          Decadentes), contó además con la participación especial de Diego Tuñon
          (Babasónicos). Grabado y masterizado por Álvaro Villagra.
        </ParrafoBio>
        <ParrafoBio>
          En el 2020, se presentaron en el Festival Internacional de Buenos
          Aires (FIBA) luego dieron un show vibrante en el Teatro Vorterix y
          continuaron lanzando las canciones de su disco en vivo en el Konex; en
          Marzo publicaron la canción “Niebla Rosada” junto a la banda Pop:
          Miranda, un original crossover con gran recepción por parte del
          público. En Abril presentaron “Demonio Paraguayo” junto a Los
          Auténticos Decadentes, un verdadero himno a la fiesta, en Julio
          lanzaron “El amor no existe” con la participación de el Mono de
          Kapanga.
        </ParrafoBio>
      </CuadroTexto>
    </Biogra>
  );
};

export default Biografia;
