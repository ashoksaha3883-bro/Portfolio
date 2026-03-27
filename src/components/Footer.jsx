import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </div>

        {/* Main Content: Image Top (Mobile), Left (Desktop) | Form Bottom (Mobile), Right (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Container */}
          <div className="w-full h-full overflow-hidden rounded-2xl shadow-2xl border border-slate-800">
            <img 
              src="email2.webp" 
              alt="Contact us" 
              className="w-full h-[300px] lg:h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Form Container */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <form className="space-y-5" netlify  name='contact us'>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">Full Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  </span>
                  <input
                    type="text"
                    id="name"
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </span>
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-white"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-white"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} <span className="text-blue-400 font-medium">Flowbite™</span>. ashoksaha3883@gmail.com
          </p>
          
<div className="flex items-center gap-6">
  
  {/* LinkedIn */}
  <div
    onClick={() =>
      window.open(
        "https://www.linkedin.com/in/ashok-kumar-981a5a395",
        "_blank"
      )
    }
    className="cursor-pointer"
  >
    <SocialIcon path="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-12h4v2a4 4 0 013-2zM2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z" />
  </div>

  {/* Twitter */}
  <div
    onClick={() => window.open("https://twitter.com", "_blank")}
    className="cursor-pointer"
  >
    <SocialIcon path="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </div>

  {/* GitHub */}
  <div
    onClick={() =>
      window.open("https://github.com/ashoksaha3883-bro", "_blank")
    }
    className="cursor-pointer"
  >
    <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
  </div>

</div>
        </div>
      </div>
    </footer>
  )
}

// Helper component for clean social icons
const SocialIcon = ({ path }) => (
  <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors duration-300">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={path}></path>
    </svg>
  </a>
)

export default Footer