import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/AuthContext';
import { logOut } from 'auth/Firebase';
import IconsMapping from './IconsMapping';

const UpIcon = IconsMapping["FaChevronUp"]
const DownIcon = IconsMapping["FaChevronDown"]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutDropdown, setisLogoutDropdown] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext)
  
  const handleDropdownToggle = () => {
    setisLogoutDropdown(!isLogoutDropdown);
  };

  
  const handleLogout = () => {
    logOut();
    navigate("/")
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-500 to-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="text-white text-2xl font-bold">
          <Link to="/"> Climate Dashboard</Link>
        </div>

        
        <div className="hidden md:flex items-center relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-300 hover:text-white focus:outline-none flex items-center"
          >
            Data Sections
            <span className='ml-3'>
            {isDropdownOpen ? <DownIcon /> : <UpIcon />}
            </span>
          </button>

          <div className="relative">
            
            
            <div className='flex items-center'>
              <p
                className="text-white font-semibold ml-8 cursor-pointer"
                onClick={handleDropdownToggle}
              >
                Welcome {currentUser?.displayName}
              </p>

             <span className='ml-3 text-white'>{isLogoutDropdown ? <DownIcon /> : <UpIcon />}</span>
            </div>

            
            {isLogoutDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <div className="py-2">
                  
                  <p className="block px-4 py-2 text-sm text-gray-700">Username: {currentUser?.displayName}</p>

                  
                  <p className="block px-4 py-2 text-sm text-gray-700">Email: {currentUser?.email}</p>

                  
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          
          {isDropdownOpen && (
            <div className="absolute top-12 bg-gray-800 rounded shadow-lg py-2 w-48">
              <Link
                to="/co2"
                className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                CO2 Data
              </Link>
              <Link
                to="/methane"
                className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Methane Data
              </Link>
              <Link
                to="/no2"
                className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                NO2 Data
              </Link>
              <Link
                to="/ghiaccio-polare"
                className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Polar Ice Data
              </Link>
              <Link
                to="/temperature"
                className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Temperature Data
              </Link>
            </div>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 rounded mt-2 shadow-lg">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/co2"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            CO2 Data
          </Link>
          <Link
            to="/methane"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Methane Data
          </Link>
          <Link
            to="/no2"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            NO2 Data
          </Link>
          <Link
            to="/ghiaccio-polare"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Polar Ice Data
          </Link>
          <Link
            to="/temperature"
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Temperature Data
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
