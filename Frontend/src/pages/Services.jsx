// src/pages/Services.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      icon: '🏥',
      title: 'General Medicine',
      description: 'Comprehensive medical care for all ages with experienced physicians.',
      details: ['Routine check-ups', 'Chronic disease management', 'Preventive care', 'Health screenings']
    },
    {
      icon: '👶',
      title: 'Pediatrics',
      description: 'Specialized care for children from infancy through adolescence.',
      details: ['Well-child visits', 'Vaccinations', 'Growth monitoring', 'Childhood illness treatment']
    },
    {
      icon: '❤️',
      title: 'Cardiology',
      description: 'Heart health services including diagnostics and treatment.',
      details: ['ECG monitoring', 'Blood pressure management', 'Heart disease prevention', 'Cardiac consultations']
    },
    {
      icon: '🦷',
      title: 'Dental Care',
      description: 'Complete dental services for maintaining oral health.',
      details: ['Dental check-ups', 'Teeth cleaning', 'Fillings', 'Oral surgery']
    },
    {
      icon: '🔬',
      title: 'Laboratory Services',
      description: 'Advanced diagnostic testing and analysis.',
      details: ['Blood tests', 'Urine analysis', 'Microbiology', 'Pathology']
    },
    {
      icon: '💊',
      title: 'Pharmacy',
      description: 'Well-stocked pharmacy with qualified pharmacists.',
      details: ['Prescription dispensing', 'Medication counseling', 'Generic medicines', 'Emergency drugs']
    },
    {
      icon: '👁️',
      title: 'Optometry',
      description: 'Eye care and vision services.',
      details: ['Eye examinations', 'Vision testing', 'Prescription glasses', 'Eye disease treatment']
    },
    {
      icon: '🩺',
      title: 'Emergency Care',
      description: '24/7 emergency medical services.',
      details: ['Trauma care', 'Emergency treatments', 'Ambulance service', 'Critical care']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Medical Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive healthcare services designed to meet the diverse needs of our community 
              in Nekemte and surrounding areas.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 px-6 py-4">
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-red-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">24/7 Emergency Services</h2>
            <p className="text-xl mb-6">Immediate medical attention when you need it most</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-2xl font-bold">📞 +251 XXX XXX XXX</div>
              <div className="text-lg">|</div>
              <div className="text-lg">📍 Emergency Department, Main Building</div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;