import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="page-wraper">
      {/* Sidebar Menu */}
      <div className="responsive-nav">
        <i
          className="fa fa-bars"
          id="menu-toggle"
          onClick={() => setMenuOpen(true)}
        ></i>

        <div id="menu" className={`menu ${menuOpen ? "open" : ""}`}>
          <i
            className="fa fa-times"
            id="menu-close"
            onClick={() => setMenuOpen(false)}
          ></i>
          <div className="container">
            <div className="image">
              <a href="#">
                <img src="/images/oo.png" alt="" />
              </a>
            </div>
            <div className="author-content">
              <h4>ALVIN GEORGE</h4>
              <span>Tech Enthusiast</span>
            </div>
            <nav className="main-nav" role="navigation">
              <ul className="main-menu">
                <li><a href="#section1">About Me</a></li>
                <li><a href="#section3">My Projects</a></li>
                <li><a href="#section4">Contact Me</a></li>
              </ul>
            </nav>
            <div className="social-network">
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/Alvingeorge.500?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:alvingeorge_@outlook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/alvingeorge365"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/alvin.george__"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AlvinGeorge-AG"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright-text">
              <p></p>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section className="section about-me" data-section="section1">
        <div className="container">
          <div className="section-heading">
            <div style={{ maxHeight: "25px" }}>
              <h5>
                <span style={{ color: "#add8e6" }} className="auto-type"></span>
              </h5>
            </div>
            <h3 style={{ marginTop: "50px" }} className="">
              About Me
            </h3>
            <div className="line-dec"></div>
            <p className="">
              Hi, I'm Alvin George, a passionate B.Tech Computer Science student
              at <br /> Government Model Engineering College, Kochi.
            </p>
          </div>

          <div className="left-image-post">
            <div className="row">
              <div className="col-md-6">
                <div className="left-image">
                  <img src="/images/lt.jpeg" alt="" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-text">
                  <h4 className="">Code Crusader</h4>
                  <p className="">
                    With a strong foundation in programming fundamentals, I'm
                    eager to dive deeper into the world of technology. I've
                    already gained a solid grasp of basics in Python, HTML, and
                    CSS, and I'm excited to expand my skill set further.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="right-image-post">
            <div className="row">
              <div className="col-md-6">
                <div className="left-text">
                  <h4 className="">My Thinking Dimension</h4>
                  <p className="">
                    I'm a dedicated learner, always on the lookout for
                    opportunities to grow and improve. I believe in the power of
                    hard work and perseverance, and I'm ready to put in the
                    effort required to excel in the tech industry. When I find a
                    company that aligns with my values and utilizes my skills,
                    I'm willing to dedicate myself to contributing to its
                    success.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-image">
                  <img src="/images/tag.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section highlights" data-section="section-highlights">
        <div className="container">
          <div className="section-heading">
            <h2 className="">Highlights</h2>
            <div className="line-dec"></div>
            <span className="">Current Highlights</span>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="highlight-image">
                <img
                  src="/images/IMG_20241222_060059.jpg"
                  alt="Highlight"
                  className="img-fluid"
                />
              </div>
              <br />
            </div>
            <div className="col-md-6">
              <div className="highlight-text">
                <h4 className="">A 24 hr Hackathon !</h4>
                <br />
                <p className="">
                  Throughout my journey, I have achieved several milestones that
                  I am proud of. From mastering new programming languages to
                  contributing to open-source projects, each step has been a
                  learning experience. I am excited to continue this journey and
                  achieve even more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section my-services" data-section="section2">
        <div className="container">
          <div className="section-heading">
            <h2 className="">What I’m good at?</h2>
            <div className="line-dec"></div>
            <p className="">
              Beyond coding, I am fascinated with Artificial Intelligence and enjoy engaging in conversations with AI models.</p>
          </div>
          {/* languages and  Skills that I have gained */}
          <div className="row">
            <div className="col-md-6">
              <div className="service-item">
                <div className="second-service-icon service-icon"></div>
                <h4>HTML &amp; CSS</h4>
                <p>
                  Since childhood, I have wondered how websites are made and how they work. I was always eager to understand the mechanism of a website, which led me to study HTML & CSS. However, the problem with HTML and CSS is that if we don't revise them, we tend to forget everything.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item" style={{ height: "380px" }}>
                <div className="third-service-icon service-icon"></div>
                <h4>Python</h4>
                <p>
                  Even though I needed to study Python in Class X, only after completing Class XII did I realize the actual potential of Python programming language,Python is the simplest programming langauge I have ever studied.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item">
                <div className="fourth-service-icon service-icon"></div>
                <h4>Git &amp; GitHub</h4>
                <p>
                  It was challenging for me to understand Git, but with dedication and perseverance I learned the basics of the Git tool, Git is an unavoidable tool for developers.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item" style={{ height: "330px" }}>
                <div className="first-service-icon service-icon"></div>
                <h4>Java Script</h4>
                <p>
                  I am currently working on it, and I have <br />covered the basics. Also understand the True Potential of JS !<br /><br /><br />
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-item" style={{ height: "360px" }}>
                <div className="fifth-service-icon service-icon"></div>
                <h4>C Programming</h4>
                <p>
                  My first impression about C was :<br /> THE MOTHER OF ALL PROGRAMMING LANGAUGES <br />And I feel that much of effort is needed to master it...<br />
                  Anyways I am On my way..<br /><br /><br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section className="section my-work" data-section="section3">
        {/* Add your projects here */}
        <div class="section-heading">
          <h2 class="">My Projects</h2>
          <div class="line-dec"></div>
          <p class=""> I'm curious about the endless possibilities that AI presents and look forward to exploring this field further also I hope to complete more useful projects in future.</p>
        </div>
        <div className="isotope-box" style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="isotope-item" data-type="JavaScript Projects">
            <figure className="snip1321">
              <img
                src="/images/qrcodejs.png"
                alt="QR Code"
                style={{ height: "280px" }}
              />
              <figcaption>
                <a
                  href="https://alvingeorge-ag.github.io/QRcode-js-project/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-search"></i>
                </a>
                <h4>QR CODE generator built on JavaScript</h4>
                <span>
                  <b>
                    A simple QR code generator built by integrating API & JavaScript.
                    <br />
                    Click the search button to view my project.
                  </b>
                  <br />
                  <a href="https://github.com/AlvinGeorge-AG/QRcode-js-project.git" target="_blank" rel="noreferrer">
                    <button>Source Code</button>
                  </a>
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="isotope-item" data-type="JavaScript Projects">
            <figure className="snip1321">
              <img
                src="/images/clockjs.png"
                alt="clock"
                style={{ height: "280px" }}
              />
              <figcaption>
                <a
                  href="https://alvingeorge-ag.github.io/CLOCK_js_project/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-search"></i>
                </a>
                <h4>A Clock Using JavaScript</h4>
                <span>
                  <b>
                    A simple Clock created with HTML and JavaScript.
                    <br />
                    Click the search button to view my project.
                  </b>
                  <br />
                  <a href="https://github.com/AlvinGeorge-AG/CLOCK_js_project.git" target="_blank" rel="noreferrer">
                    <button>Source Code</button>
                  </a>
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="isotope-item" data-type="HTML&CSSProjects">
            <figure className="snip1321">
              <img
                src="/images/new.png"
                alt="MYWEB"
                style={{ height: "280px" }}
              />
              <figcaption>
                <a href="https://AlvinGeorge-AG.github.io/MYWEB" target="_blank" rel="noreferrer">
                  <i className="fa fa-search"></i>
                </a>
                <h4>My personal website</h4>
                <span>
                  <b>
                    A simple webpage created with HTML|CSS|JAVASCRIPT.
                    <br />
                    You are just currently viewing it!.
                  </b>
                  <br />
                  <a href="https://github.com/AlvinGeorge-AG/MYWEB/" target="_blank" rel="noreferrer">
                    <button>Source Code</button>
                  </a>
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="isotope-item" data-type="GitProjects HTML&CSSProjects">
            <figure className="snip1321">
              <img
                src="/images/Screenshot 2024-08-25 201131.png"
                alt=""
                style={{ height: "280px" }}
              />
              <figcaption>
                <a
                  href="https://AlvinGeorge-AG.github.io/Gitproject/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-search"></i>
                </a>
                <h4>Understanding Git and GitHub</h4>
                <span>
                  A simple webpage created with HTML and CSS.
                  <br />
                  Click the search button to view my project.
                  <br />
                  <br />
                  <a href="https://github.com/AlvinGeorge-AG/Gitproject.git" target="_blank" rel="noreferrer">
                    <button>Source Code</button>
                  </a>
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="isotope-item" data-type="HTML&CSSProjects JavaScript Projects">
            <figure className="snip1321">
              <img
                src="/images/imagesliderjs.png"
                alt="image slider"
                style={{ height: "280px" }}
              />
              <figcaption>
                <a
                  href="https://alvingeorge-ag.github.io/imageSlider_JavascriptProject/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-search"></i>
                </a>
                <h4>An ImageSlider Using JavaScript</h4>
                <span>
                  <b>
                    A simple ImageSlide created with HTML and JavaScript.
                    <br />
                    Click the search button to view my project.
                  </b>
                  <br />
                  <a href="https://github.com/AlvinGeorge-AG/imageSlider_JavascriptProject.git" target="_blank" rel="noreferrer">
                    <button>Source Code</button>
                  </a>
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="isotope-item" data-type="GitProjects">
            <figure className="snip1321" style={{ height: "280px" }}>
              <img src="/images/calu.png" alt="Calculator" />
              <figcaption>
                <a
                  href="https://AlvinGeorge-AG.github.io/CALCULATOR/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-search"></i>
                </a>
                <h4>A Simple Calculator!</h4>
                <span>
                  It is a simple Calculator made with JavaScript.
                  <br />
                  Click the search button to view my project.
                  <br />
                  <br />
                  <a href="https://github.com/AlvinGeorge-AG/CALCULATOR.git" target="_blank" rel="noreferrer">
                    <button>Source Code</button>
                  </a>
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="isotope-item" data-type="HTML&CSSProjects JavaScript Projects">
            <figure className="snip1321">
              <img
                src="/images/randquote.png"
                alt="random quote"
                style={{ height: "280px" }}
              />
              <figcaption>
                <a
                  href="https://alvingeorge-ag.github.io/Random-Quote-Generator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-search"></i>
                </a>
                <h4>A Random Quote Generator </h4>
                <span>
                  <b>
                    A Random Quote Generator By integrating JS AND API.
                    <br />
                    Click the search button to view my project.
                  </b>
                  <br />
                  <a href="https://github.com/AlvinGeorge-AG/Random-Quote-Generator.git" target="_blank" rel="noreferrer">
                    <button>Source Code</button>
                  </a>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-me" data-section="section4">
        <div className="container">
          <div className="section-heading">
            <h2 className="">Contact Me</h2>
            <div className="line-dec"></div>
            <p className="">
              Let's connect and see how we can collaborate...
            </p>
            <div className="social-network">
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/Alvingeorge.500?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                {/* Repeat for others */}
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="right-content">
              <div className="container">
                <form className="column" id="submit-form" action="">
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="Alvin"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your name..."
                          required
                        />
                      </fieldset>
                      <br />
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          name="email"
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your email..."
                          required
                        />
                      </fieldset>
                      <br />
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject..."
                          required
                        />
                      </fieldset>
                      <br />
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your message... !!!Please Click the Send Button Only Once And Wait!!!"
                          required
                        ></textarea>
                      </fieldset>
                      <br />
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <button type="submit" id="form-submit">
                          Send
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
              <br />
              <br />
              <div align="center">
                &#169; Alvin George Inc. All Rights Reserved.
                <br />
                Developed By Alvin George.
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
