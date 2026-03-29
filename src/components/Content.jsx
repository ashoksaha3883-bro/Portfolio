import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Clothes Shopping Platform",
    category: "(Front End / e-Commerce)",
    description: "E-Commerce is a shopping website designed to bring busy cloth online. Our mission is to provide a platform where you can easily buy clothes with work from home. ",
    image: "screen16.png", // Ensure this path is correct
    link: "https://e-commerce-website-b7lngbqmw-ashok-kumar9262s-projects.vercel.app",
    techStack: [
      "React – frontend framework",
      "Tailwind CSS",
      "React Router",
      "Context API",
      "LocalStorage",
      "JavaScript (ES6+)"
    ]
  },
  {
    id: 2,
    title: "GYM Website",
    category: "(Frontend / Fitness Website)",
    description: "Built a responsive gym website with React & Tailwind CSS, featuring a custom video player, BMI calculator, and Stripe/EmailJS-powered pricing—designed to make comparing fitness options simple and transparent.",
    image: "screen13.png", // Ensure you have this image or update the name
    link: "https://gym-website-h4lcm0thc-ashok-kumar9262s-projects.vercel.app",
    techStack: [
      "Media Handling",
      "Payment Integration",
      "State Management",
      "Routing",
      "Frontend Framework"
      
    ]
  },
  {
    id: 3,
    title: "Modern and minimal Dashboard",
    category: "(Front End / Tracking + analytics combined)",
    description: "A modern, high-performance dashboard designed for work analytics. It features complex data visualizations, also i added the according to User Language you can use it with own language with responsive version",
    image: "screen7.png", // Ensure you have this image or update the name
    link: "https://dashboard-online-store.netlify.app/",
    techStack: [
      "Date Handling",
      "Data Visualization",
      "Internationalization",
      "State Management",
      "User Interaction"
      
    ]
  }
];

const Content = () => {
  const [clickedProjectId, setClickedProjectId] = useState(null);

  const handleLaptopClick = (id) => {
    setClickedProjectId(clickedProjectId === id ? null : id);
  };

  return (
    <section className='md:pl-40 md:pr-40 overflow-hidden bg-[#00051e] py-20'>
      
      {/* Header */}
      <div className='flex flex-col items-center mb-10'>
        <h2 className='text-[40px] font-semibold px-4 py-2 w-max mx-auto text-center text-[#1788ae]'>
          Latest Works
        </h2>
        <hr className='border-[#1788ae] w-[200px] border-t-2' />
      </div>

      <div className='relative pt-20'>
        {/* Main Vertical Timeline Line */}
        <div className='hidden md:block absolute left-1/2 -top-10 bottom-0 w-[3px] bg-[#1788ae]/40 transform -translate-x-1/2 z-0'></div>

        <div className='flex flex-col gap-40'>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isClicked = clickedProjectId === project.id;

            return (
              <div 
                key={project.id} 
                className={`relative flex flex-col md:flex-row items-center gap-20 ${isEven ? '' : 'md:flex-row-reverse'}`}
              >
                
                {/* PROJECT IMAGE SIDE */}
                <div className='w-full md:w-1/2 z-10 relative'>
                  
                  {/* --- Horizontal Connecting Line to Timeline --- */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[113px] h-[2px] bg-[#1788ae]/40 z-0
                    ${isEven ? '-right-[40px]' : '-left-[40px]'}`}>
                    {/* Small glowing dot where it meets the vertical line */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#1788ae] rounded-full shadow-[0_0_10px_#1788ae]
                      ${isEven ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}>
                    </div>
                  </div>

                  {/* Visit Website Link & Line (Shown only on Click) */}
                  {isClicked && (
                    <div className="absolute -top-24 left-1/2 -translate-x-1/2 flex flex-col items-center z-30 animate-bounce">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#1788ae] text-white px-6 py-2 rounded-lg font-bold shadow-[0_0_15px_#1788ae] hover:bg-white hover:text-[#1788ae] transition-all duration-300 whitespace-nowrap"
                      >
                        Visit Website 🚀
                      </a>
                      <div className="w-[2px] h-12 bg-gradient-to-b from-[#1788ae] to-transparent shadow-[0_0_8px_#1788ae]"></div>
                    </div>
                  )}

                  {/* Laptop Container */}
 <div 
onClick={() => handleLaptopClick(project.id)}
className="relative flex items-center justify-center cursor-pointer group transition-transform duration-500 hover:scale-105 "
>
{/* Laptop Frame */}

  {/* Laptop Frame - Hidden on mobile & tablet */}
<div className="relative flex justify-center items-center">

  {/* Mobile & Tablet → Only Project Image */}
  <img
    src={project.image}
    alt={project.title}
    className="block lg:hidden p-2 w-full max-w-[400px] rounded-lg shadow-lg"
  />

  {/* Laptop Frame → Only for Laptop/Desktop */}
  <img
    src="leptop1.jpg"
    alt="Laptop frame"
    className="hidden lg:block w-[500px] xl:w-[600px] relative z-10 pointer-events-none shadow-xl shadow-indigo-500/20"
  />

  {/* Project Screenshot inside laptop → Only for Laptop/Desktop */}
  <img
    src={project.image}
    alt={project.title}
    className="hidden lg:block  absolute top-[8%] left-1/2 -translate-x-1/2 w-[48%] h-[82%] object-contain z-20"
  />

</div>

                    {/* Hint text on Hover */}
                    {!isClicked && (
                        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <span className="bg-[#1788ae]/90 text-white px-4 py-2 rounded-md backdrop-blur-sm text-sm">Click to reveal link</span>
                        </div>
                    )}
                  </div>
                </div>

                {/* TEXT SIDE */}
       <div className="w-full md:w-1/2 text-white z-10  flex flex-col items-center text-center md:items-start md:text-left p-5  ">
                  <h3 className='text-3xl font-bold mb-2 hover:text-[#1788ae] transition-colors cursor-pointer'>
                    {project.title}
                  </h3>
                  <span className='text-[#1788ae] font-mono text-sm uppercase tracking-widest'>
                    {project.category}
                  </span>
                  <p className='text-gray-400 mt-4 leading-relaxed '>
                    {project.description}
                  </p>
                  
                  {/* Technology Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#1788ae]/10 text-[#1788ae] text-xs px-3 py-1 rounded-full border border-[#1788ae]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;