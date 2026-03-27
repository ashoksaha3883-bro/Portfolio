import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spline from '@splinetool/react-spline';

import { footer } from 'framer-motion/client';

const Hero = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="relative w-full h-200 flex flex-col items-center gap-24">

      {/* Background Video */}
      <video
        className="fixed right-0 bottom-0 -z-10 mix-blend-overlay object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
        src="/galaxy.mp4"
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0a0a2a] backdrop-blur-lg shadow-lg z-[1000] transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div
          className="absolute top-5 right-5 text-3xl cursor-pointer text-white"
          onClick={toggleSidebar}
        >
          <i className="bx bx-x"></i>
        </div>

        <ul className="mt-16 flex flex-col items-center gap-6">
          {['Home', 'About', 'Skills', 'Projects'].map((item) => (
            <li key={item}>
              <a href="#" className="text-white text-lg hover:text-[#72a1de]">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6">
          {['youtube', 'github', 'linkedin-square'].map((icon) => (
            <a key={icon} className="text-white text-2xl hover:text-[#72a1de]">
              <i className={`bx bxl-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-between">

        {/* Background color ONLY for first screen */}
        <div className="absolute inset-0 bg-[#001f7c38] -z-10"></div>

        {/* Black Hole Video */}
        <div
          className="absolute top-0 w-full flex justify-center z-10 mix-blend-lighten"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            src="blackhole.mp4"
            className="w-full -mt-[27.5%] hidden lg:block "
          />
        </div>

        {/* Hero Info */}
        <div
          className="absolute left-[11%]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="text-[#72a1de] px-2 py-1 rounded-full border border-[#72a1de]/60 w-[240px] bg-[#220049]/30 shadow-[0_0_5px_#72a1de]">
            <i className="bx bxl-sketch mr-1"></i>
             HTML , Tailwind & React
          </div>

          <h1 className="text-6xl text-white font-semibold max-w-[600px] leading-[70px] mt-10 mb-6">
            Welcome! I` am a 
            <span className="gradient"> Front-End Developer</span>
               <p className="max-w-[550px] text-xl mb-10 mt-4 text-gray-300">  I'm a passionate fresher Front-End Developer who loves building clean and responsive websites using HTML, CSS, (Tailwind CSS), and React.js. I also have basic knowledge of backend concepts and API integration.</p>
            
          </h1>



        


          
          
        </div>

        {/* Hero Video */}
        <div
          className="absolute w-full flex justify-center z-10 mix-blend-lighten"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            src="hero-video.mp4"
            className="w-full ml-[40%] h-320 hidden lg:block"
          />
        </div>

        {/* Scroll Down */}
        <div className="scroll-down absolute left-1/2 bottom-[8%] -translate-x-1/2 w-[30px] h-[50px] border-2 border-gray-300 rounded-[50px] cursor-pointer shadow-[0_0_10px_rgba(255,255,255,0.6)]"></div>

      </section>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Hero;  