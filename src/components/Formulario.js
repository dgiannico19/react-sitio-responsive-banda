import React from 'react';
import styled from 'styled-components';
import img from '../assets/conan1.png';

const Todo = styled.div`
  margin-top: 100px;
`;

const Formu = styled.div`
  background-image: url(${img});
  width: 100%;
  background-size: cover;
  padding: 10px;
  font-family: 'Daily-hours';
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contacto = styled.form`
  background-color: rgb(128, 128, 128, 0.7);

  /* width: 100%; */
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  color: black;
  font-family: 'Sugare';
  font-size: 2em;
  margin-top: 15px;
`;

const FormInput = styled.input`
  background-color: rgb(200, 200, 200, 0.7);

  width: 100%;
  height: 2em;
  font-size: 1em;
  border-radius: 8px;
  box-shadow: 5px 5px;
`;
const FormTextArea = styled.textarea`
  background-color: rgb(200, 200, 200, 0.7);
  height: 8em;
  font-size: 2em;
  border-radius: 8px;
  box-shadow: 5px 5px;
`;

const CustomButton = styled.button`
  font-family: 'Montserrat', cursive;
  font-weight: 900;
  z-index: 999;
  border: none;
  color: white;
  height: 20px;
  border-radius: 8px;
  margin-top: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: blue;
`;

const Formulario = () => {
  return (
    <Todo>
      <Formu>
        <Contacto>
          <FormLabel htmlFor="nombre">NOMBRE</FormLabel>
          <FormInput type="text" id="nombre" name="nombre" />
          <FormLabel htmlFor="apellido">APELLIDO</FormLabel>
          <FormInput type="text" id="apellido" name="apellido" />
          <FormLabel htmlFor="email">EMAIL</FormLabel>
          <FormInput type="email" id="email" name="email" />

          <FormLabel htmlFor="mensaje">MENSAJE</FormLabel>
          <FormTextArea name="mensaje" id="mensaje"></FormTextArea>
          <CustomButton type="submit">MANDALE BOTON CONAN!</CustomButton>
        </Contacto>
      </Formu>
    </Todo>
  );
};

export default Formulario;
