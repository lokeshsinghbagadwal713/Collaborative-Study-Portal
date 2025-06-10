import React from 'react'
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { FaRegStickyNote, FaYoutube, FaBook, FaCalculator, FaTasks, FaHome ,FaBookOpen, FaSearch} from 'react-icons/fa'; // Icons for each service

const services = [
  { title: "Notes Making", icon: <FaRegStickyNote size={50} />, link: "/services/notes" },
  { title: "YouTube Search", icon: <FaYoutube size={50} />, link: "/services/youtube" },
  { title: "Dictionary", icon: <FaBook size={50} />, link: "/services/dict" },
  { title: "Calculators", icon: <FaCalculator size={50} />, link: "/services/calculator" },
  { title: "To-Do List", icon: <FaTasks size={50} />, link: "/services/todo" },
  { title: "Homework", icon: <FaHome size={50} />, link: "/services/homework" },
  { title: "Book Search", icon:<FaBookOpen size={50} />, link:"/services/book"},
  { title: "Web Search", icon: <FaSearch size={50} />, link: "/services/web-search" },
];

function Services() {
  return (
    <div className="min-h-screen bg-customGray py-12">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Services</h1>
    
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
      {services.map((service, index) => (
        <Link to={service.link} key={index}>
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center justify-center">
              <div className="text-indigo-600 mb-4">
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Services