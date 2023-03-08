import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="w-full px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link to='/' className='text-2xl italic'>ABSBD</Link>
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <a className="hover:text-[#102ce3c9] cursor-pointer w-6 h-6" href target="_blank" rel="noreferrer">

                <BsFacebook className='w-full h-full' />
              </a>
              <a className="hover:text-[#e22c2cc9] cursor-pointer w-6 h-6" href target="_blank" rel="noreferrer">
                <FaInstagram className='w-full h-full' />
              </a>
              <a className="hover:text-[#2b2ed7f4] cursor-pointer w-6 h-6" href target="_blank" rel="noreferrer">
                <BsTwitter className='w-full h-full' />
              </a>
              <a className="hover:text-gray-900 cursor-pointer w-6 h-6" href target="_blank" rel="noreferrer">
                <BsGithub className='w-full h-full' />
              </a>
              <a className="hover:text-[#e22c4ac9] cursor-pointer w-6 h-6" href target="_blank" rel="noreferrer">
                <BsDribbble className='w-full h-full' />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">
                Company
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href> About </a>
                <a className="hover:opacity-75" href> Meet the Team </a>
                <a className="hover:opacity-75" href> History </a>
                <a className="hover:opacity-75" href> Careers </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">
                Services
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href> 1on1 Coaching </a>
                <a className="hover:opacity-75" href> Company Review </a>
                <a className="hover:opacity-75" href> Accounts Review </a>
                <a className="hover:opacity-75" href> HR Consulting </a>
                <a className="hover:opacity-75" href> SEO Optimisation </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">
                Helpful Links
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href> Contact </a>
                <a className="hover:opacity-75" href> FAQs </a>
                <a className="hover:opacity-75" href> Live Chat </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">
                Legal
              </p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a className="hover:opacity-75" href> Privacy Policy </a>
                <a className="hover:opacity-75" href> Terms &amp; Conditions </a>
                <a className="hover:opacity-75" href> Returns Policy </a>
                <a className="hover:opacity-75" href> Accessibility </a>
              </nav>
            </div>
          </div>
        </div>
        <p className="text-xs pt-2 text-center text-gray-800">
          © 2022 ABSBD
        </p>
      </div>
    </footer>
  );
};

export default Footer;