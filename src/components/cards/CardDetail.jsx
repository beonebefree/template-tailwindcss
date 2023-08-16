import React from 'react';

const CardDetail = ({ id, description, img, offer, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg z-100">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Detalle del objeto {id}</div>
        <img src={img} alt="" className='object-cover h-48 w-full' />
        <p className=' text-xl text-green-700'>-{offer}%</p>
        <p className=' text-xl text-red-700'>{price}</p>
        <p className="text-gray-700 text-base">{description}.</p>
      </div>
    </div>
  );
};

export default CardDetail;