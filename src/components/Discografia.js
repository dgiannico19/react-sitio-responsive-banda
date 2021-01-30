import React from 'react';
import { TabaCd } from '../data/Data';

import styled from 'styled-components';

import fondoCard from '../assets/fondo.jpg';

const Cds = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10%;
`;

const Discos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 8em;
  grid-row-gap: 1em;
  @media (max-width: 790px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Cards = styled.div`
  box-shadow: 1px 0px 15px 0 white;
  width: 120%;
  background-image: url(${fondoCard});
  background-size: cover;
  background-position: center center;
  align-content: center;
  color: black;
  font-family: 'Daily-hours';
  height: min-content;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  @media (max-width: 790px) {
    width: 90%;
  }
  @media (max-width: 650px) {
    width: 70%;
  }
`;

const DatosCds = styled.div`
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DatosName = styled.h3`
  font-size: 2.5rem;
  font-family: 'Good-moods';
  @media (max-width: 790px) {
    font-size: 1.5rem;
  }
`;

const DatosSpoti = styled.div`
  color: red;
`;

const SpanYear = styled.span`
  font-family: 'Cosmic-blaster';
`;

const Discografia = () => {
  return (
    <Cds>
      <Discos>
        {TabaCd.map((cd) => (
          <Cards key={cd.id}>
            <DatosCds>
              <DatosName>{cd.name.toUpperCase()}</DatosName>

              <DatosSpoti>{cd.spotify}</DatosSpoti>
              <SpanYear>{cd.year}</SpanYear>
            </DatosCds>
          </Cards>
        ))}
      </Discos>
    </Cds>
  );
};

export default Discografia;
