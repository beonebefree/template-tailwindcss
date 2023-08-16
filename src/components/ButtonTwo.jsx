import React from 'react';

import styles from '../styles/Global';

const ButtonTwo = ({ link }) => {
    return (
      <>
      <div className='w-[200px] mt-4 mr-6'>
        <a
        href="/form"
        className="github-star ml-1 w-[200px] text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-600 opacity-50 border-2 border-gray-500 border-opacity-60 active:bg-gray-300 active:border-opacity-20 uppercase text-sm shadow-md hover:shadow-lg hover:bg-gray-500 ease-linear transition-all duration-150"
        >
        Quick Start!
      </a>
          </div>  
        </>
    )
}

export default ButtonTwo