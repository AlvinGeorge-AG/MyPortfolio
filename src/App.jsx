import React, { useState, useEffect } from "react";
import axios from "axios";
import GeometricLoader from './components/loading';
import "./App.css";

// Your Project Data
const data = [
  {
    heading: "QR CODE Generator",
    note: "Built by integrating API & JavaScript.",
    img: "/images/qrcodejs.png",
    demoLink: "https://alvingeorge-ag.github.io/QRcode-js-project/",
    githubLink: "https://github.com/AlvinGeorge-AG/QRcode-js-project.git",
    type: "JavaScript Projects"
  },
  {
    heading: "JavaScript Clock",
    note: "A simple Clock created with HTML and JS.",
    img: "/images/clockjs.png",
    demoLink: "https://alvingeorge-ag.github.io/CLOCK_js_project/",
    githubLink: "https://github.com/AlvinGeorge-AG/CLOCK_js_project.git",
    type: "JavaScript Projects"
  },
  {
    heading: "Personal Website",
    note: "Created with HTML | CSS | JavaScript.",
    img: "/images/new.png",
    demoLink: "https://AlvinGeorge-AG.github.io/MYWEB",
    githubLink: "https://github.com/AlvinGeorge-AG/MYWEB/",
    type: "HTML&CSSProjects"
  },
  {
    heading: "Understanding Git",
    note: "A simple webpage created with HTML/CSS.",
    img: "/images/Screenshot 2024-08-25 201131.png",
    demoLink: "https://AlvinGeorge-AG.github.io/Gitproject/",
    githubLink: "https://github.com/AlvinGeorge-AG/Gitproject.git",
    type: "GitProjects"
  },
  {
    heading: "Image Slider",
    note: "ImageSlide created with HTML and JS.",
    img: "/images/imagesliderjs.png",
    demoLink: "https://alvingeorge-ag.github.io/imageSlider_JavascriptProject/",
    githubLink: "https://github.com/AlvinGeorge-AG/imageSlider_JavascriptProject.git",
    type: "HTML&CSSProjects"
  },
  {
    heading: "Calculator",
    note: "Simple Calculator made with JavaScript.",
    img: "/images/calu.png",
    demoLink: "https://AlvinGeorge-AG.github.io/CALCULATOR/",
    githubLink: "https://github.com/AlvinGeorge-AG/CALCULATOR.git",
    type: "GitProjects"
  },
  {
    heading: "Quote Generator",
    note: "Random Quote Generator using API.",
    img: "/images/randquote.png",
    demoLink: "https://alvingeorge-ag.github.io/Random-Quote-Generator/",
    githubLink: "https://github.com/AlvinGeorge-AG/Random-Quote-Generator.git",
    type: "HTML&CSSProjects"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languages, setlanguages] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://alvin-portfoliobackend.vercel.app/languages");
        setlanguages(response.data);
        setloading(false);
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
      <div className="fixed top-0 left-0 w-full bg-zinc-900 shadow-md z-40 p-4 md:hidden flex justify-between items-center border-b border-zinc-700">
        <span className="font-bold text-lg text-white tracking-wider">ALVIN GEORGE</span>
        <button onClick={() => setMenuOpen(true)} className="p-2 text-black">
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
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-700 mb-4 shadow-xl">
              <img src="/images/my.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-xl font-bold tracking-wider text-white">ALVIN GEORGE</h4>
            <span className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Tech Enthusiast</span>
          </div>

          <nav className="flex-1 py-8">
            <ul className="flex flex-col space-y-2">
              {["About Me", "Tech Skills", "My Projects", "Contact Me"].map((text, idx) => {
                const ids = ["#1", "#3", "#2", "#4"];
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
            <i className="fa fa-github text-xl text-gray-500 hover:text-white cursor-pointer transition-colors"></i>
            <i className="fa fa-linkedin text-xl text-gray-500 hover:text-blue-400 cursor-pointer transition-colors"></i>
            <i className="fa fa-instagram text-xl text-gray-500 hover:text-pink-500 cursor-pointer transition-colors"></i>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="md:ml-72 transition-all duration-300">

        {/* SECTION 1: ABOUT ME */}
        <section id="1" className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-b border-zinc-700">
          <div className="mb-12">
            {/* CHANGED text-gray-800 to text-white */}
            <h3 className="text-4xl font-bold uppercase text-white mb-2">About Me</h3>
            <div className="h-1 w-20 bg-blue-500"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="w-full md:w-5/12">
              <img src="/images/lt.jpeg" alt="Laptop" className="w-full rounded-lg shadow-2xl opacity-90" />
            </div>
            <div className="w-full md:w-7/12">
              <h4 className="text-2xl font-bold mb-4 text-blue-400">Code Crusader</h4>
              {/* FIXED: Removed invalid text-black-700, Changed to text-gray-300 */}
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
            <div className="w-full md:w-5/12 order-1 md:order-2">
              <img src="/images/tag.jpg" alt="Tag" className="w-full rounded-lg shadow-2xl opacity-90" />
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS SECTION (Dark Mode) */}
        <section className="bg-zinc-800 py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-bold uppercase text-white">Highlights</h2>
              <p className="text-gray-400 mt-2">Current milestones & Achievements</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 items-center bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-700">
              <div className="w-full md:w-1/2">
                <img src="/images/IMG_20241222_060059.jpg" alt="Hackathon" className="w-full rounded-xl shadow-md" />
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

        {/* SECTION 3: TECH SKILLS (Dark Mode) */}
        <section id="3" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold uppercase text-white">My Skills</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mt-4 mb-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.map((item, index) => (
              // CHANGED: bg-white to bg-zinc-800, text-black to text-white
              <div key={index} className="bg-zinc-800 p-8 rounded-xl shadow-lg hover:bg-zinc-700 transition-all duration-300 border border-zinc-700 flex flex-col items-center text-center group">
                <div className="w-16 h-16 mb-6">
                  <img
                    src={`/images/${item.image.toLowerCase().replace(/[^a-z0-9]/g, "")}.png`}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* FIXED: Text colors for dark mode */}
                <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                <p className="text-sm text-gray-400 font-medium">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: PROJECTS (Dark Mode + Fixed Text) */}
        <section id="2" className="py-24 bg-black px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold uppercase text-white">My Projects</h2>
              <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 mb-6"></div>
              {/* FIXED: Changed text color to gray-400 */}
              <p className="text-gray-400 max-w-2xl mx-auto font-medium">
                Hover over the cards to see project details.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {data.map((item, index) => (
                <div key={index} className="relative group w-full sm:w-[350px] h-[280px] bg-zinc-900 rounded-xl overflow-hidden shadow-2xl cursor-pointer border border-zinc-800">

                  {/* IMAGE */}
                  <img
                    src={item.img}
                    alt={item.heading}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-40"
                  />

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                    {/* Icons and Text */}
                    <a href={item.demoLink} target="_blank" rel="noreferrer" className="mb-3 text-white hover:text-blue-400 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <i className="fa fa-search text-3xl"></i>
                    </a>

                    <h4 className="text-xl font-bold text-white uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.heading}
                    </h4>

                    {/* FIXED: Force white text on hover */}
                    <p className="text-gray-300 text-sm mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                      {item.note}
                    </p>

                    <a href={item.githubLink} target="_blank" rel="noreferrer" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                      <button className="border-2 border-white text-white px-5 py-2 text-sm font-bold uppercase rounded hover:bg-white hover:text-black transition-colors">
                        Source Code
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CONTACT (Dark Mode) */}
        <section id="4" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold uppercase text-white">Contact Me</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mt-4 mb-6"></div>
          </div>

          <div className="bg-zinc-800 p-10 shadow-2xl rounded-2xl border border-zinc-700">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" className="w-full p-4 bg-zinc-900 border border-zinc-600 rounded focus:border-blue-500 text-white placeholder-gray-500" placeholder="Your Name" />
                <input type="email" className="w-full p-4 bg-zinc-900 border border-zinc-600 rounded focus:border-blue-500 text-white placeholder-gray-500" placeholder="Your Email" />
              </div>
              <input type="text" className="w-full p-4 bg-zinc-900 border border-zinc-600 rounded focus:border-blue-500 text-white placeholder-gray-500" placeholder="Subject" />
              <textarea rows="5" className="w-full p-4 bg-zinc-900 border border-zinc-600 rounded focus:border-blue-500 text-white placeholder-gray-500" placeholder="Message"></textarea>
              <button className="w-full bg-blue-600 text-black py-4 font-bold uppercase rounded hover:bg-blue-700 transition-all shadow-lg">
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