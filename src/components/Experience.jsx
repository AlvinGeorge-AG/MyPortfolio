import React from "react";

const experiences = [
  {
    title: "Machine Learning Intern",
    organization: "FlyRank AI",
    type: "Internship",
    start: "Jul 2026",
    end: "Present",
    location: "Remote",
    summary:
      "Currently working at FlyRank AI as an ML Intern, applying machine learning techniques to real-world AI products.",
    highlights: [
      "Working on ML model development and integration.",
      "Collaborating with cross-functional teams on AI-powered solutions.",
    ],
    iconSrc: "/images/flyrankai.png",
  },
  {
    title: "Initiatives Head",
    organization: "MACS MEC",
    type: "Part-time",
    start: "Apr 2026",
    end: "Present",
    location: "Model Engineering College",
    summary:
      "Leading initiatives at MACS (MEC Association of Computer Students). Previously served as Executive Member from Jul 2025 – Apr 2026.",
    highlights: [
      "Organizing tech events, workshops, and hackathons for the CS community.",
      "Linux System Administration and mentoring junior members.",
    ],
    iconSrc: "/images/macs.png",
  },
  {
    title: "Backend Developer Intern",
    organization: "MarkX",
    type: "Internship",
    start: "Jan 2026",
    end: "Mar 2026",
    location: "Remote",
    summary:
      "Working on Backend, API integrations, and Data Scrapping with Apify/Playwright.",
    highlights: [
      "Built An Automated System that Scrapes data from Instagram using APIFY.",
      "Used Langchain to Connect With AI Model.",
      "FastAPI backend development with AI & LLM integration (LangChain, Groq/Llama 3).",
    ],
    iconSrc: "/images/markx.jpeg",
  },
];

function Experience() {
  return (
    <section id="6" className="py-24 px-6 md:px-12 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-white tracking-widest">
            Experience
          </h2>
          <div className="mx-auto mt-4 mb-3 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-500 shadow-[0_0_18px_rgba(59,130,246,0.6)] animate-pulse"></div>
          <p className="text-gray-400">Internships, hackathons, achievements, and growth milestones</p>
        </div>

        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 via-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.6)] animate-pulse"></div>
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-[2px] bg-[linear-gradient(180deg,rgba(59,130,246,0.0),rgba(59,130,246,0.8),rgba(59,130,246,0.0))] opacity-70 animate-[pulse_3s_ease-in-out_infinite]"></div>

          {experiences.map((item, index) => (
            <div key={index} className="relative mb-10 last:mb-0">
              <div className="absolute -left-[4px] md:-left-[3px] top-7 w-3.5 h-3.5 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.9)] ring-4 ring-blue-500/20 animate-pulse"></div>

              <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 md:p-8 shadow-lg hover:border-blue-500/40 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center overflow-hidden">
                      {item.iconSrc ? (
                        <img
                          src={item.iconSrc}
                          alt={item.organization}
                          className="w-full h-full object-contain p-2"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-xs text-gray-400 font-semibold">
                          {item.organization
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 3)
                            .toUpperCase()}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-gray-400">
                        {item.organization} • {item.type} • {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:ml-auto w-full md:w-auto">
                    <span className="text-xs uppercase tracking-widest text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full w-fit border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.35)]">
                      {item.start} — {item.end}
                    </span>
                    <div className="hidden md:block h-px w-44 bg-gradient-to-r from-blue-500 via-indigo-400 to-transparent animate-pulse"></div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">{item.summary}</p>

                <div className="grid gap-2">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="mt-1 w-2 h-2 rounded-full bg-blue-500"></span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
