import React, { useState } from 'react';
import CardDetail from './CardDetail';

const Card = ({ id, imageUrl, description, price, offer }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleViewObject = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
      <img src={imageUrl} alt="Imagen" className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Objeto {id}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleViewObject}
        >
          Ver objeto
        </button>
      </div>

      {showDetail && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="bg-white rounded-lg p-8 relative z-10">
            <CardDetail  id={id} description={description} img={imageUrl} offer={offer} price={price} />
            <button
              className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleCloseDetail}
            >
              Cerrar
            </button>
            
            <button
              className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleCloseDetail}
            >
              Comprar
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Card;