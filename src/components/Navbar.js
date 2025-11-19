"use client";
import Image from "next/image";
import { useState, useEffect } from "react"; 
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt, FaBars, FaTimes } from "react-icons/fa"; 
import { FiMail } from "react-icons/fi"; 

const NavLinks = ({ accentColor, trackingClass }) => (
  <>
    <a href="#" className={`block px-4 py-2 ${accentColor} transition duration-150 uppercase ${trackingClass} hover:bg-indigo-600 rounded-md`}>HOME</a>
    <a href="#" className={`block px-4 py-2 ${accentColor} transition duration-150 uppercase ${trackingClass} hover:bg-indigo-600 rounded-md`}>About</a>
    <a href="#" className={`block px-4 py-2 ${accentColor} transition duration-150 uppercase ${trackingClass} hover:bg-indigo-600 rounded-md`}>Facilities</a>
    <a href="#" className={`block px-4 py-2 ${accentColor} transition duration-150 uppercase ${trackingClass} hover:bg-indigo-600 rounded-md`}>Academics</a>
    <a href="#" className={`block px-4 py-2 ${accentColor} transition duration-150 uppercase ${trackingClass} hover:bg-indigo-600 rounded-md`}>Contact</a>
  </>
);

export default function Navbar() {
  
  const [activeLang, setActiveLang] = useState('EN'); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
  const [isScrolled, setIsScrolled] = useState(false);

  const primaryColor = "bg-indigo-700";
  const primaryTextColor = "text-indigo-700";
  const accentColor = "text-yellow-400";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getButtonClasses = (lang) => {
    const baseClasses = "px-3 py-1 text-sm font-semibold rounded-md transition duration-150";
    if (lang === activeLang) {
      return `${baseClasses} border border-indigo-700 ${primaryColor} text-white hover:bg-indigo-800`;
    } else {
      return `${baseClasses} border border-gray-300 text-gray-700 hover:bg-gray-100`;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        

        <div 
          className={`hidden md:block bg-gray-50 border-b border-gray-200 transition-all duration-500 ease-in-out overflow-hidden ${
            isScrolled ? "max-h-0 opacity-0" : "max-h-14 opacity-100"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-stretch justify-between px-6">
            <div className="flex items-center text-sm text-gray-600 space-x-4">
              <div className="flex items-center gap-2 py-2">
                <FiMail className={primaryTextColor} />
                <span>info@ria.edu.np</span>
              </div>
              <div className="h-5 w-px bg-gray-300"></div> 
              <div className="flex items-center gap-2">
                <FaPhone className={primaryTextColor} />
                <span>+977 7777777</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
               <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaMapMarkerAlt className={primaryTextColor} />
                <span>Saraswatinagar, Chabahil, Kathmandu, Nepal</span>
              </div>
              <div className="flex gap-3 text-lg items-center py-2 border-l border-gray-200 pl-6">
                <a href="#" aria-label="YouTube"><FaYoutube className="text-red-600 hover:text-red-700 transition duration-150" /></a>
                <a href="#" aria-label="Facebook"><FaFacebook className="text-blue-600 hover:text-blue-700 transition duration-150" /></a>
                <a href="#" aria-label="Instagram"><FaInstagram className="text-pink-600 hover:text-pink-700 transition duration-150" /></a>
                <a href="#" aria-label="Twitter"><FaTwitter className="text-blue-400 hover:text-blue-500 transition duration-150" /></a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md w-full">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3">
            
            <div className="flex items-center">
              <div className="p-1 rounded-full border border-gray-100 flex-shrink-0">
                <Image
                  src="/logo.png" 
                  alt="RIA School Logo"
                  width={40}
                  height={40}
                  className="object-contain md:w-[50px] md:h-[50px]" 
                />
              </div>
              <div className="ml-3 md:ml-4">
                <h1 className="text-lg md:text-xl font-extrabold text-gray-800 tracking-tight">RIA ACADEMY</h1>
                <p className="hidden md:block text-xs text-gray-500 italic -mt-1">Educating Future Leaders</p>
              </div>
            </div>
            
            <div className="flex items-center md:hidden">
              <div className="flex space-x-2 mr-4">
                <button 
                  className={getButtonClasses('EN')}
                  onClick={() => setActiveLang('EN')}
                >
                  EN
                </button>
                <button 
                  className={getButtonClasses('NP')}
                  onClick={() => setActiveLang('NP')}
                >
                  NP
                </button>
              </div>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`p-2 rounded-md text-xl text-gray-700 ${primaryColor} text-white`}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <div className="flex gap-6 text-base font-medium text-gray-700">
                <NavLinks accentColor={accentColor} trackingClass="tracking-wide" />
              </div>
              
              <a href="#" className={`ml-4 px-5 py-2 ${primaryColor} text-white font-bold rounded-lg shadow-lg hover:bg-indigo-800 transition duration-150 uppercase text-sm tracking-wider`}>
                RESULT
              </a>
              
              <div className="flex space-x-2 border-l border-gray-200 pl-4">
                <button 
                  className={getButtonClasses('EN')}
                  onClick={() => setActiveLang('EN')}
                >
                  EN
                </button>
                <button 
                  className={getButtonClasses('NP')}
                  onClick={() => setActiveLang('NP')}
                >
                  NP
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${primaryColor} text-white shadow-lg fixed w-full z-40 top-[70px]`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLinks accentColor="text-white" trackingClass="tracking-wider" />
          
          <a href="#" className={`mt-2 block w-full text-center px-4 py-2 ${accentColor} ${primaryTextColor} font-bold rounded-md uppercase text-sm bg-white hover:bg-gray-100 transition duration-150`}>
            RESULT
          </a>
          
          <div className="pt-4 border-t border-indigo-600 text-sm text-center space-y-1">
             <p className="flex items-center justify-center gap-2"><FiMail /> info@ria.edu.np</p>
             <p className="flex items-center justify-center gap-2"><FaPhone /> +977 7777777</p>
             <div className="flex gap-4 text-xl items-center justify-center pt-2">
                <FaYoutube className="text-red-300" />
                <FaFacebook className="text-blue-300" />
                <FaInstagram className="text-pink-300" />
                <FaTwitter className="text-blue-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}