// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">StartSphere</span>
        </Link>

        {/* Rectangular shape Search Bar Button */}
        <div className="relative w-full max-w-md focus-within:text-gray-600">
          <span className="absolute inset-y-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">

              <path fillRule="evenodd" clipRule="evenodd" d="M14.293 15.707a1 1 0 001.414-1.414l-2.5-2.5a1 1 0 00-1.414 0 1 1 0 000 1.414l2.5 2.5zM9 16a7 7 0 110-14 7 7 0 010 14z" />
            </svg>
          </span>
          <input type="text" className="block w-full py-2 pl-10 pr-3 text-base text-white placeholder-gray-400 bg-gray-700 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Search" />
        </div>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Dropdown
            label={
              <button
                type="button"
                className="flex text-sm bg-gray-700 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
              </button>
            }
            arrowIcon={false}
            inline={true}
          >
            <Dropdown.Header>
              <span className="block text-sm text-white">Bonnie Green</span>
              <span className="block text-sm text-gray-400">name@gmail.com</span>
            </Dropdown.Header>
            <Dropdown.Item className="text-white hover:bg-gray-600">
              Profile
            </Dropdown.Item>
            <Dropdown.Item className="text-white hover:bg-gray-600">
              Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="text-white hover:bg-gray-600">
              Sign out
            </Dropdown.Item>
          </Dropdown>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-800">
            <li>
              <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/mynetwork" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">My Network</Link>
            </li>
            <li>
              <Link to="/startup" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">StartUp</Link>
            </li>
            <li>
              <Link to="/events" className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">Events</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;