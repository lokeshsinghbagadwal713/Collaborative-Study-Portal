import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import logo_Image from '../../assets/logo_Image.png';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side - Logo and Text */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img
            src={logo_Image}
            alt="Logo"
            className="mr-3 h-16 rounded-xl"
          />
          <p className="text-sm">© 2024 Lokesh Singh Bagadwal. All Rights Reserved.</p>
        </div>

        {/* Right side - Social icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://github.com/lokeshsinghbagadwal713"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/lokesh-singh-bagadwal-059421263"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
