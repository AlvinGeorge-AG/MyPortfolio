import React, { useState, useEffect } from "react";
import axios from "axios";
import GeometricLoader from './components/loading';
import Typewriter from './components/typewriter'
import "./App.css";


const data = [
  {
    heading: "Digital Patient Card",
    note: "A hospital Management System for Seamless communication between Doctors and Patients.",
    img: "/images/dpc.png",
    demoLink: "https://dpcfrontend.vercel.app/",
    githubLink: "https://github.com/AlvinGeorge-AG/DigitalPatientCardBackend",
    type: "Java Projects"
  },
  {
    heading: "GadNEXUS",
    note: "A full-stack gadget blog platform built with Flask, MongoDB, and Jinja.",
    img: "/images/gadnexus.png",
    demoLink: "https://gad-nexus.vercel.app/",
    githubLink: "https://github.com/AlvinGeorge-AG/GadNEXUS",
    type: "Python Projects"
  },
  {
    heading: "GitHUB Profile Analyser",
    note: "Analyse a github user profile and give suggestions.",
    img: "/images/githubanalyser.png",
    demoLink: "https://github-profile-analyzer-frontend.vercel.app/",
    githubLink: "https://github.com/AlvinGeorge-AG/GitHub-Profile-Analyzer",
    type: "FastAPI Projects"
  },
  {
    heading: "GitHUB ReadMe Generator",
    note: "Analyse a github user repository and generate a ReadME in markdown.",
    img: "/images/githubanalyser.png",
    demoLink: "https://github-profile-analyzer-frontend.vercel.app/",
    githubLink: "https://github.com/AlvinGeorge-AG/ReadmeSmith",
    type: "FastAPI Projects"
  },
  {
    heading: "QR CODE Generator",
    note: "Built by integrating API & JavaScript.",
    img: "/images/qrcodejs.png",
    demoLink: "https://alvingeorge-ag.github.io/QRcode-js-project/",
    githubLink: "https://github.com/AlvinGeorge-AG/QRcode-js-project.git",
    type: "JavaScript Projects"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languages, setlanguages] = useState([]);
  const [loading, setloading] = useState(true);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://alvin-portfoliobackend.vercel.app/languages");
        setlanguages(response.data);
        setTimeout(() => {
          setloading(false);
        }, 3000);
      } catch (error) {
        console.error(error);
        setloading(false);
      }
    };
    fetchData();
  }, []);

  return (

    <div className="bg-zinc-900 min-h-screen font-sans text-gray-200">

      {loading && <GeometricLoader />}

      {/* --- MOBILE NAV BAR --- */}
      <div className="fixed top-0 left-0 w-full bg-zinc-900 text-black shadow-md z-40 p-4 md:hidden flex justify-between items-center border-b border-zinc-700">
        <span onClick={() => setMenuOpen(true)} className="font-bold text-lg text-white tracking-wider">ALVIN GEORGE</span>
        <button onClick={() => setMenuOpen(true)} className="p-2 text-red">
          <i className="fa fa-bars text-2xl"></i>
        </button>
      </div>

      {/* --- SIDEBAR --- */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-black text-white shadow-2xl transform transition-transform duration-300 ease-in-out border-r border-zinc-800
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`
        }
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Close Button (Mobile) */}
          <button onClick={() => setMenuOpen(false)} className="md:hidden absolute top-4 right-4 text-gray-400 hover:text-white">
            <i className="fa fa-times text-xl"></i>
          </button>

          <div className="flex flex-col items-center pt-12 pb-8 px-6 text-center border-b border-zinc-800">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-700 mb-4 shadow-xl transition-transform hover:scale-105 duration-300">
              <img src="/images/my.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-xl font-bold tracking-wider text-white">ALVIN GEORGE</h4>
            <span className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Tech Enthusiast</span>
          </div>

          <nav className="flex-1 py-8">
            <ul className="flex flex-col space-y-2">
              {["About Me", "Tech Skills", "My Projects", "Resume", "Contact Me"].map((text, idx) => {
                const ids = ["#1", "#3", "#2", "#4", "#5"];
                return (
                  <li key={idx}>
                    <a
                      href={ids[idx]}
                      onClick={() => setMenuOpen(false)}
                      className="block py-3 px-8 text-sm font-medium text-gray-400 hover:bg-zinc-800 hover:text-white border-l-4 border-transparent hover:border-blue-500 transition-all"
                    >
                      {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-6 border-t border-zinc-800 flex justify-center gap-5">
            <i className="fa fa-github text-xl text-gray-500 hover:text-white cursor-pointer transition-colors hover:scale-110"></i>
            <i className="fa fa-linkedin text-xl text-gray-500 hover:text-blue-400 cursor-pointer transition-colors hover:scale-110"></i>
            <i className="fa fa-instagram text-xl text-gray-500 hover:text-pink-500 cursor-pointer transition-colors hover:scale-110"></i>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="md:ml-72 transition-all duration-300">

        {/* SECTION 1: ABOUT ME (With Typewriter) */}
        <section id="1" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-b border-zinc-700">
          <div className="mb-12">
            <h3 className="text-4xl font-bold uppercase text-white mb-2">About Me</h3>
            <div className="h-1 w-20 bg-blue-500 mb-6"></div>

            {/* TYPEWRITER INSERTED HERE */}
            {!loading &&
              <Typewriter />
            }

          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="w-full md:w-5/12 overflow-hidden rounded-lg shadow-2xl">
              {/* Added hover Effect to Image */}
              <img src="/images/lt.jpeg" alt="Laptop" className="w-full opacity-90 hover:opacity-100 hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full md:w-7/12">
              <h4 className="text-2xl font-bold mb-4 text-blue-400">Code Crusader</h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                Hi, I'm <span className="font-bold text-white">Alvin George</span>. With a strong foundation in programming fundamentals, I'm eager to dive deeper into technology. I've gained a solid grasp of Python, HTML, and CSS, and I'm excited to expand my skill set further.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-7/12 order-2 md:order-1">
              <h4 className="text-2xl font-bold mb-4 text-blue-400">My Thinking Dimension</h4>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a dedicated learner, always on the lookout for opportunities to grow and improve. I believe in the power of hard work and perseverance.
              </p>
            </div>
            <div className="w-full md:w-5/12 order-1 md:order-2 overflow-hidden rounded-lg shadow-2xl">
              {/* Added hover Effect to Image */}
              <img src="/images/tag.jpg" alt="Tag" className="w-full opacity-90 hover:opacity-100 hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS SECTION */}
        <section className="bg-zinc-800 py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-bold uppercase text-white">Highlights</h2>
              <p className="text-gray-400 mt-2">Current milestones & Achievements</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-700 hover:border-blue-500/30 transition-colors duration-300">
              <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
                {/* Added hover Effect to Image */}
                <img src="/images/IMG_20241222_060059.jpg" alt="Hackathon" className="w-full shadow-md hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full md:w-1/2">
                <h4 className="text-2xl font-bold mb-4 text-white">A 24 hr Hackathon!</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Throughout my journey, I have achieved several milestones that I am proud of. From mastering new programming languages to contributing to open-source projects, each step has been a learning experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: TECH SKILLS */}
        <section id="3" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold uppercase text-white">My Skills</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mt-4 mb-4"></div>
          </div>

          {/* GRID: grid-cols-2 for mobile, lg:grid-cols-4 for desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {languages.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-800 p-4 md:p-6 rounded-xl shadow-lg hover:bg-zinc-700 hover:-translate-y-2 transition-all duration-300 border border-zinc-700 flex flex-col items-center text-center group"
              >
                {/* Image Size: Smaller on mobile (12) */}
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={`/images/${item.image.toLowerCase().replace(/[^a-z0-9]/g, "")}.png`}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Font Size: Smaller on mobile */}
                <h4 className="text-sm md:text-lg font-bold text-white">{item.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: PROJECTS (Updated) */}
        <section id="2" className="py-24 bg-black px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold uppercase text-white tracking-widest">My Projects</h2>
              <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 mb-6 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
              <p className="text-gray-400 font-mono text-sm tracking-wider">
                [ CLICK CARDS TO DECRYPT DATA ]
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.map((item, index) => {
                const isActive = activeProject === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveProject(isActive ? null : index)} // Toggle click
                    className={`relative w-full aspect-video bg-zinc-900 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ease-out group
                      ${isActive ? "border-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-[1.02] z-10" : "border-zinc-800 hover:border-zinc-600"}
                    `}
                  >
                    {/* 1. COMPLETE PICTURE (Aspect Video ensures full screenshot visibility) */}
                    <img
                      src={item.img}
                      alt={item.heading}
                      className={`w-full h-full object-cover transition-all duration-500 
                        ${isActive ? "scale-110 blur-sm opacity-40" : "opacity-100"}
                      `}
                    />

                    {/* DEFAULT STATE: Title Badge (Always visible if not active) */}
                    <div className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                      <h4 className="text-lg font-bold text-white uppercase tracking-wider drop-shadow-md">
                        {item.heading}
                      </h4>
                    </div>

                    {/* 2. ACTIVE STATE: The "Control Panel" (Slides up on click) */}
                    <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/80 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]
                      ${isActive ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
                    `}>

                      {/* Decoration Lines */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

                      <h4 className="text-xl font-bold text-white uppercase tracking-widest mb-3 text-shadow-glow">
                        {item.heading}
                      </h4>

                      <p className="text-gray-300 text-sm mb-6 font-medium leading-relaxed max-w-[90%]">
                        {item.note}
                      </p>

                      <div className="flex gap-4">
                        {/* Live Demo Button */}
                        <a href={item.demoLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-red px-5 py-2 text-xs font-bold uppercase rounded tracking-wider transition-all shadow-lg hover:shadow-blue-500/50">
                            <i className="fa fa-eye"></i> Live Demo
                          </button>
                        </a>

                        {/* Github Button */}
                        <a href={item.githubLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          <button className="flex items-center gap-2 border border-zinc-500 hover:border-white text-gray-300 hover:text-white px-5 py-2 text-xs font-bold uppercase rounded tracking-wider transition-all hover:bg-white/10">
                            <i className="fa fa-github"></i> Code
                          </button>
                        </a>
                      </div>

                      {/* Close Hint */}
                      <span className="absolute bottom-1 text-[10px] text-gray-500 uppercase tracking-widest">
                        Click to Close
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* RESUME CTA SECTION */}
        <section id="4" className="py-12 px-6 md:px-12">
          <div className="max-w-6xl mx-auto relative group">

            {/* Background Gradient & Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/5 rounded-xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-70"></div>

            <div className="relative bg-zinc-900 border border-zinc-700 p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">

              {/* Decorative Scanline */}
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>

              {/* Text Content */}
              <div className="text-center md:text-left z-10">
                <h2 className="text-3xl font-bold text-white uppercase tracking-widest mb-2 text-shadow-glow">
                  Need a Developer?
                </h2>
                <p className="text-gray-400 font-mono text-sm tracking-wide">
                  <span className="text-blue-500">{">"}</span> EXECUTE_DOWNLOAD: <span className="text-white">ALVIN_RESUME.PDF</span>
                </p>
              </div>

              {/* Download Button with Alert */}
              <div className="z-10">
                <a
                  href="/resume.pdf"
                  download="Alvin_George_Resume.pdf"
                  onClick={() => alert("SYSTEM MESSAGE: Access Granted. Downloading Resume...")}
                >
                  <button className="group/btn relative overflow-hidden bg-white text-black font-bold py-4 px-10 rounded uppercase tracking-widest transition-all hover:bg-blue-500 hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] cursor-pointer">
                    <span className="relative z-10 flex items-center gap-3">
                      <i className="fa fa-download text-lg group-hover/btn:animate-bounce"></i>
                      Download CV
                    </span>
                  </button>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: CONTACT (Updated) */}
        <section id="5" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold uppercase text-white">Contact Me</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mt-4 mb-6"></div>
          </div>

          <div className="bg-zinc-800 p-10 shadow-2xl rounded-2xl border border-zinc-700">
            {/* CHANGED: Increased space-y from 6 to 8 */}
            <form className="space-y-8">
              {/* CHANGED: Increased gap from 6 to 8 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" className="w-full p-4 bg-zinc-900 border border-zinc-600 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500 transition-colors" placeholder="Your Name" />
                <input type="email" className="w-full p-4 bg-zinc-900 border border-zinc-600 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500 transition-colors" placeholder="Your Email" />
              </div>
              <input type="text" className="w-full p-4 bg-zinc-900 border border-zinc-600 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500 transition-colors" placeholder="Subject" />
              <p></p>
              <textarea rows="5" className="w-full p-4 bg-zinc-900 border border-zinc-600 rounded focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-500 transition-colors" placeholder="Message"></textarea>
              <button className="w-full bg-blue-600 text-black py-4 font-bold uppercase rounded hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/50">
                Send Message
              </button>
            </form>
          </div>

          <div className="text-center mt-16 text-gray-500 text-sm">
            <p>&#169; Alvin George Inc. All Rights Reserved.</p>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;