// src/pages/About.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Alemayehu Bekele',
      position: 'Chief Medical Officer',
      specialty: 'Internal Medicine',
      experience: '15+ years'
    },
    {
      name: 'Dr. Selamawit Mohammed',
      position: 'Head of Pediatrics',
      specialty: 'Pediatrics',
      experience: '12+ years'
    },
    {
      name: 'Dr. Teshome Girma',
      position: 'Senior Cardiologist',
      specialty: 'Cardiology',
      experience: '18+ years'
    },
    {
      name: 'Dr. Eden Tadesse',
      position: 'Dental Surgeon',
      specialty: 'Dentistry',
      experience: '10+ years'
    }
  ];

  const milestones = [
    { year: '2010', event: 'Clinic Foundation Established' },
    { year: '2012', event: 'Expanded to Full Medical Services' },
    { year: '2015', event: '24/7 Emergency Department Opened' },
    { year: '2018', event: 'Modern Laboratory Facility Added' },
    { year: '2020', event: 'Digital Health Records Implemented' },
    { year: '2023', event: 'Community Outreach Program Launched' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bethel Medium Clinic</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Serving the Nekemte community with excellence in healthcare since 2010
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission & Vision</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide exceptional, accessible, and affordable healthcare services that improve 
                      the quality of life for the people of Nekemte and surrounding communities, delivered 
                      with compassion, dignity, and respect.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-semibold text-blue-600 mb-3">Our Vision</h3>
                    <p className="text-gray-600">
                      To be the leading healthcare provider in East Wellega Zone, recognized for clinical 
                      excellence, innovative treatments, and unwavering commitment to community health 
                      and wellbeing.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-blue-600 rounded-lg h-96 w-full"></div>
                <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-lg shadow-lg w-5/6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                      Compassionate Patient Care
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                      Medical Excellence
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                      Community Focus
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                      Integrity & Ethics
                    </li>
                    <li className="flex items-center">
                      <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                      Continuous Improvement
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Medical Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced healthcare professionals dedicated to your wellbeing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.position}</p>
                  <p className="text-gray-600">{member.specialty}</p>
                  <p className="text-sm text-gray-500">Experience: {member.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</h3>
                        <p className="text-gray-600">{milestone.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;