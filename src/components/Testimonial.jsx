import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
  {
    id: 1,
    name: 'Juan Pérez',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'Estoy muy contento con el servicio que me han brindado. Han sido muy profesionales y atentos en todo momento.',
  },
  {
    id: 2,
    name: 'María Rodríguez',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    text: '¡Increíble! Nunca había visto algo así. Realmente han superado mis expectativas.',
  },
  {
    id: 3,
    name: 'Pedro González',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    text: '¡Altamente recomendado! No tengo nada más que buenas palabras para esta empresa.',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Testimonios
          </p>
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Lo que nuestros clientes dicen</h2>
         
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
