/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          {/* Brand */}
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Innovative IT Solutions for
              <br />
              a Smarter Future
            </p>
          </div>

          {/* Office */}
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Office
            </h1>
            <p className="text-lg text-gray-400 font-light">
              Jl. Raya Permata, Suci, Manyar District, Gresik Regency, East Java 61124
            </p>
          </div>

          {/* Social Media */}
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Social Media
            </h1>
            <Button
              href="https://www.instagram.com/situdio.id/"
              type="link"
              target="_blank"
              className="flex items-center gap-2 text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              <FaInstagram /> Instagram
            </Button>

            <Button
              href="mailto:situdio@outlook.com"
              type="link"
              target="_blank"
              className="flex items-center gap-2 text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              <FaEnvelope /> E-Mail
            </Button>

            <Button
              href="https://www.linkedin.com/in/aminiqbaal/"
              type="link"
              target="_blank"
              className="flex items-center gap-2 text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              <FaLinkedin /> LinkedIn
            </Button>

            <Button
              href="https://github.com/Aminiqbaal"
              type="link"
              target="_blank"
              className="flex items-center gap-2 text-lg text-gray-400 font-light hover:underline"
              isExternal
            >
              <FaGithub /> Github
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright {new Date().getFullYear()} - All rights reserved - SItudio
          </p>

          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made by&nbsp;
            </p>
            <Button
              href="https://www.linkedin.com/in/aminiqbaal/"
              type="link"
              target="_blank"
              className="text-lg text-theme-purple font-light"
              isExternal
            >
              Muhammad Amin Iqbaal Alam, S.Kom
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}