// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background image */}
      <div className="hero-background"></div>

      {/* Blue overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Quality Healthcare in{" "}
            <span className="text-amber-300 font-serif text-5xl">Nekemte</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Bethel Medium Clinic - Your trusted healthcare partner in East
            Wellega, Oromia
          </p>
          <p className="text-lg mb-8 opacity-90">
            Providing comprehensive medical services with compassion and
            excellence. Serving the community with state-of-the-art facilities
            and experienced healthcare professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
