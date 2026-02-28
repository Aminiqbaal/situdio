/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Fade } from 'react-awesome-reveal';
import { Transition } from '@headlessui/react';
import { useLocation } from 'react-router-dom';

import Button from '../elements/Button';
import BrandIcon from './BrandIcon';

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header">
      <div className="flex justify-between px-4 lg:px-0">
        <BrandIcon />

        <button className="block text-theme-blue lg:hidden focus:outline-none" onClick={() => setIsCollapse(!isCollapse)}>
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0">
        <li>
          <Button
            className={`${path === '/' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/"
          >
            Home
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/team' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/team"
          >
            About
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/project' ? 'active-link' : ''} font-medium text-lg px-5 no-underline hover:underline`}
            type="link"
            href="/project"
          >
            Project
          </Button>
        </li>
        <li 
          className="relative py-2 lg:py-0"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          {/* Tombol Utama Product */}
          <button className="font-medium text-lg px-5 no-underline hover:underline text-theme-blue flex items-center outline-none">
            Product
            <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* List Dropdown */}
          <Transition
            show={isDropdownOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden z-50">
              {/* <li>
                <a href="https://situdio-wedding.vercel.app/" target="_blank" rel="noopener noreferrer" className="block px-5 py-3 text-sm text-theme-blue hover:bg-gray-50 hover:text-theme-purple transition-colors">
                  E-Wedding
                </a>
              </li> */}
              {/* <li>
                <a href="/link-b" className="block px-5 py-3 text-sm text-theme-blue hover:bg-gray-50 hover:text-theme-purple transition-colors">
                  B (Link Internal)
                </a>
              </li>
              <li>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="block px-5 py-3 text-sm text-theme-blue hover:bg-gray-50 hover:text-theme-purple transition-colors">
                  C (Link Eksternal)
                </a>
              </li> */}
            </ul>
          </Transition>
        </li>
        <li>
          <Button
            className="font-medium text-lg mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
            type="link"
            href="/discuss-project"
          >
            Discuss Project
          </Button>
        </li>
      </ul>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="transition duration-300 ease-in data-[closed]:opacity-0">

          {/* <Fade> */}
          <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/"
              >
                Home
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/team' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/team"
              >
                Team
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/project' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/project"
              >
                Project
              </Button>
            </li>
            <li className="mx-auto my-9 bg-white">
              <Button
                className="font-bold mx-auto px-5 py-2 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple border-purple-800 transition duration-200"
                type="link"
                href="/discuss-project"
              >
                Discuss Project
              </Button>
            </li>
          </ul>
          {/* </Fade> */}
        </div>
      </Transition>
    </header>
  );
}
