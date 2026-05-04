import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16.25 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2.5">
        
        {/* Logo / Name */}
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-2.5 hidden md:block text-gray-300">
            Harold Saenz
          </span>
        </a>

        {/* Navigation Links - Centered */}
        <div className="w-125 h-full flex flex-row items-center justify-between ">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-3.75 px-5 py-2.5 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-white transition">
              About me
            </a>
            <a href="#skills" className="cursor-pointer hover:text-white transition">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-white transition">
              Projects
            </a>
            
          </div>
        </div>

        {/* Contact Button Section */}
        <div className="flex flex-row items-center gap-5">
          
          <a 
            href="#contact" 
            className="hidden lg:block px-5 py-2 border border-[#7042f861] rounded-full text-white bg-[#7042f821] hover:bg-[#7042f861] transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;