import React from 'react';

const Header = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1657539810416-ee7a3063ff45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEo5eXJQYUhYUlFZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60';

  return (
    <header className="relative h-64 sm:h-72 md:h-80 lg:h-96">
      <img
        src={imageUrl}
        alt="Header"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-80"
      />
    </header>
  );
};

export default Header;