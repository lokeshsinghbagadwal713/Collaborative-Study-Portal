import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaChevronDown, FaUserAlt } from 'react-icons/fa';
import axios from 'axios';
import { useAuth } from '../authContest/AuthContext.jsx'; // Import useAuth

function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { logout } = useAuth();  // Destructure logout from useAuth

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      try {
        const token = localStorage.getItem('accessToken');
        //console.log('token for logout', token); // for debugging

        const response = await axios.post('http://localhost:2000/api/user/logout', {}, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          withCredentials: true
        });

        // console.log('Logout response:', response.data);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        logout();  // Use logout function from AuthContext
      } catch (error) {
        console.error("Error during logout:", error);
      }
    }
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);


  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="flex items-center text-gray-800">
        <FaUserAlt className="w-12 h-12 bg-gray-200 rounded-full p-2" />
        {/* <FaChevronDown className="ml-2" /> */}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
          <Link
  to="/profile"
  className="flex items-center px-4 py-2 text-sm text-gray-700 font-semibold hover:text-orange-700 hover:bg-gray-100"
  onClick={() => setIsOpen(false)}
>
  <FaUser className="mr-2 bg-gray-200 p-2 text-2xl rounded-full" />
  My Profile
</Link>

          <button
            onClick={onLogout}
            className="flex items-center w-full text-left px-4 py-2 text-sm font-semibold hover:text-orange-700 text-gray-700 hover:bg-gray-100"
          >
            <FaSignOutAlt className="mr-2 p-2 text-2xl" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
