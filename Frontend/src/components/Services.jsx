// src/components/Services.jsx
import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '🏥',
      title: 'General Medicine',
      description: 'Comprehensive medical care for all ages with experienced physicians.'
    },
    {
      icon: '👶',
      title: 'Pediatrics',
      description: 'Specialized care for children from infancy through adolescence.'
    },
    {
      icon: '❤️',
      title: 'Cardiology',
      description: 'Heart health services including diagnostics and treatment.'
    },
    {
      icon: '🦷',
      title: 'Dental Care',
      description: 'Complete dental services for maintaining oral health.'
    },
    {
      icon: '🔬',
      title: 'Laboratory Services',
      description: 'Advanced diagnostic testing and analysis.'
    },
    {
      icon: '💊',
      title: 'Pharmacy',
      description: 'Well-stocked pharmacy with qualified pharmacists.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet the diverse needs of our community 
            in Nekemte and surrounding areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;