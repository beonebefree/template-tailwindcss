import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
<footer className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-between m-6">
        <div className="flex flex-col m-6 ml-6">
          <Link to="/productos">Ofertas!</Link>
          <Link to="/about" className="mb-2">Nosotros</Link>
          <Link to="/contacto" className="mb-2">Contacto</Link>
          <Link to="/productos">Productos</Link>
        </div>
        <div className="flex flex-col m-6  mr-6">
          <Link to="home" className="mb-2">Inicio</Link>
          <Link to="login" className="mb-2">Ingresar</Link>
        </div>
      </div>
    </footer>
    <footer className='text-center bg-gray-800  text-white'>
        <p>web app creata por @beonebefree</p>
    </footer>
    </>
  );
};

export default Footer;