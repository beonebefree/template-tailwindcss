import React from 'react';

const TestimonialCard = ({ id, name, avatar, text }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-12 w-12 rounded-full" src={avatar} alt="" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{name}</h3>
            <p className="text-sm leading-5 text-gray-500">{`#${id}`}</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-base leading-6 text-gray-700">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;