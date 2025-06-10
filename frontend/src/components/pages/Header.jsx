import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // For the arrow icons
import logo_Image from "../../assets/logo_Image.png";
import ProfileDropdown from "../ProfileDropdown.jsx";
import { useAuth } from "../../authContest/AuthContext.jsx";

function Header() {
    const { isLoggedIn, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false); // State to toggle the dropdown menu

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-customGray border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo_Image}
                            className="mr-3 h-16 rounded-xl"
                            alt="Logo"
                        />
                    </Link>

                    {/* Menu Button with Dropdown (visible on smaller screens) */}
                    <div
                        className="relative flex items-center md:hidden" // Hide the menu button on larger screens (md and above)
                        onMouseEnter={() => setMenuOpen(true)} // Open menu on hover
                        onMouseLeave={() => setMenuOpen(false)} // Close menu on mouse leave
                    >
                        {/* Button */}
                        <button className="flex items-center text-gray-700 hover:text-orange-700 font-medium text-lg">
                            Menu{" "}
                            {menuOpen ? (
                                <FaChevronUp className="ml-2 text-lg" />
                            ) : (
                                <FaChevronDown className="ml-2 text-lg" />
                            )}
                        </button>

                        {/* Dropdown Menu */}
                        {menuOpen && (
                            <div className="absolute top-7 left-0 bg-white shadow-lg border rounded-lg w-48 py-2 z-10">
                                <ul className="text-gray-700">
                                    <li>
                                        <NavLink
                                            to="/"
                                            onClick={() => setMenuOpen(false)}
                                            className="block px-4 py-2  hover:text-orange-700 font-semibold hover:bg-gray-100"
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/about"
                                            onClick={() => setMenuOpen(false)}
                                            className="block px-4 py-2  hover:text-orange-700 font-semibold hover:bg-gray-100"
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/services"
                                            onClick={() => setMenuOpen(false)}
                                            className="block px-4 py-2  hover:text-orange-700 font-semibold hover:bg-gray-100"
                                        >
                                            Services
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/contact"
                                            onClick={() => setMenuOpen(false)}  
                                            className="block px-4 py-2  hover:text-orange-700 font-semibold hover:bg-gray-100"
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Navigation Links (visible on larger screens) */}
                    <div
                        className="hidden md:flex md:items-center md:w-auto"
                    >
                        <ul className="flex flex-row space-x-8 font-medium">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                         ${isActive ? "text-orange-700" : "text-gray-700"}
                                         border-gray-100 hover:bg-gray-50 
                                         md:hover:bg-transparent md:border-0
                                          hover:text-orange-700 md:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                         ${isActive ? "text-orange-700" : "text-gray-700"}
                                         border-gray-100 hover:bg-gray-50 
                                         md:hover:bg-transparent md:border-0
                                          hover:text-orange-700 md:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                         ${isActive ? "text-orange-700" : "text-gray-700"}
                                         border-gray-100 hover:bg-gray-50 
                                         md:hover:bg-transparent md:border-0
                                          hover:text-orange-700 md:p-0`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b
                                         ${isActive ? "text-orange-700" : "text-gray-700"}
                                         border-gray-100 hover:bg-gray-50 
                                         md:hover:bg-transparent md:border-0
                                          hover:text-orange-700 md:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Login/Logout Buttons */}
                    <div className="flex items-center">
                        {isLoggedIn ? (
                            <ProfileDropdown handleLogout={logout} />
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-gray-800 hover:bg-gray-50 focus:ring-4
                                     focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5
                                      py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Log in
                                </Link>
                                <Link
                                    to="/register"
                                    className="text-white bg-orange-700 hover:bg-orange-800 
                                    focus:ring-4 focus:ring-orange-300 font-medium rounded-lg
                                     text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Get started
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
