// src/components/Services.jsx
import React from "react";

const Services = () => {
  const services = [
    {
      image: "/General-Medicine.png",
      title: "General Medicine",
      description:
        "Comprehensive medical care for all ages with experienced physicians.",
    },
    {
      image: "/pediatrics.jpg",
      title: "Pediatrics",
      description:
        "Specialized care for children from infancy through adolescence.",
    },
    {
      image: "/Cardiology1.jpg",
      title: "Cardiology",
      description: "Heart health services including diagnostics and treatment.",
    },
    {
      image: "/dentalCare.jpg",
      title: "Dental Care",
      description: "Complete dental services for maintaining oral health.",
    },
    {
      image: "/laboratory.jpg",
      title: "Laboratory Services",
      description: "Advanced diagnostic testing and analysis.",
    },
    {
      image: "/pharmacy.jpg",
      title: "Pharmacy",
      description: "Well-stocked pharmacy with qualified pharmacists.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services designed to meet the diverse needs
            of our community in Nekemte and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-400 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 text-amber-50"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-70 object-cover rounded-2xl mb-4"
              />

              <h3 className="text-xl font-semibold text-amber-50 mb-3">
                {service.title}
              </h3>
              <p className="text-shadow-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
