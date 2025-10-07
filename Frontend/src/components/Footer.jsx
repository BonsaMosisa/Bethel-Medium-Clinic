// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  <img
                    src="/bethellogo.png"
                    alt="bethel logo"
                    className="rounded-full"
                  />
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Bethel Medium Clinic</h2>
                <p className="text-sm text-gray-400">
                  Nekemte, East Wellega, Oromia
                </p>
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Providing quality healthcare services to the community of Nekemte
              and surrounding areas. Our commitment is to deliver compassionate
              and excellent medical care.
            </p>
            <div className="flex space-x-4"></div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>📍Nekemte</li>
              <li>📞 +2519120386**</li>
              <li>✉️ info.bethelmediumclinic@gmail.com</li>
              <li>🕒 24/7 Emergency Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Bethel Medium Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
