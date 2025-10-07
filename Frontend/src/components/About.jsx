// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Bethel Medium Clinic</h2>
            <p className="text-lg text-gray-600 mb-6">
              Located in the heart of Nekemte, East Wellega, Bethel Medium Clinic has been serving 
              the community with dedication and excellence for years. We are committed to providing 
              accessible, high-quality healthcare services to all members of our community.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experienced healthcare professionals includes doctors, nurses, and 
              specialists who are passionate about delivering compassionate care using the 
              latest medical technologies and treatments.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">24/7 Emergency Services</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Modern Medical Equipment</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Multilingual Staff</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Affordable Healthcare</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-blue-600 rounded-lg h-80 w-full"></div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg w-3/4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional healthcare services that improve the quality of life 
                for the people of Nekemte and surrounding communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;