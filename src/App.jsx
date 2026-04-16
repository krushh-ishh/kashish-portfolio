import React, { useState } from "react";

export default function App() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const theme = prefersDark
    ? "bg-[#0f172a] text-white"
    : "bg-[#f8fafc] text-gray-900";

  const card = prefersDark
    ? "bg-[#1e293b]"
    : "bg-white";

  return (
    <div className={theme + " min-h-screen font-sans"}>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 shadow-sm">
        <h1 className="text-2xl font-bold tracking-wide">Krushh Ishh</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
          <a
            href="mailto:kashish81099@gmail.com?subject=Opportunity&body=Hi Kashish,%0D%0A"
            className="bg-blue-500 text-white px-6 py-2 rounded-xl"
          >
            Mail Me
          </a>
        </div>

      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="grid md:grid-cols-2 items-center px-10 py-20 gap-10"
      >
        <div>
          <p className="uppercase text-sm text-blue-500 mb-2">
            Welcome to my world
          </p>
          <h2 className="text-5xl font-bold leading-tight mb-4">
            Hi, I’m <span className="text-blue-500">Kashish</span>
          </h2>
          <h3 className="text-2xl mb-4">Java Full Stack Developer</h3>

          <p className="mb-6 text-gray-500">
            4+ years of experience building scalable microservices and modern
            web applications using Java, Spring Boot, React & Vue.
          </p>

          <div className="flex gap-4 mb-6">
            <a href="https://www.linkedin.com/in/kashish-6186a421b/" className="underline" target="_blank">
              LinkedIn
            </a>
            <a href="https://github.com/krushh-ishh" className="underline" target="_blank">
              GitHub
            </a>
            <a href="https://leetcode.com/u/krushh_ishh/" className="underline" target="_blank">
              LeetCode
            </a>
            <a href="https://www.naukri.com/code360/profile/krushh_ishh" className="underline" target="_blank">
              Code360
            </a>

          </div>

          <button className="bg-blue-500 text-white px-6 py-2 rounded-xl shadow">
            <a
              href="/Kashish-Java-full-stack-dev.pdf"
              download
              className="bg-blue-500 text-white px-6 py-2 rounded-xl"
            >
              Download Resume
            </a>
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="/profile.png"
            alt="Kashish"
            className="w-64 h-64  object-cover shadow-lg"
          />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-10 py-16">
        <h2 className="text-3xl font-bold mb-10">What I Do</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Java & Spring Boot", "Frontend (React/Vue)", "Microservices", "Cloud (Azure)", "Security (OAuth/Ping)", "Testing & CI/CD"].map((skill, i) => (
            <div
              key={i}
              className={card + " p-6 rounded-2xl shadow hover:scale-105 transition"}
            >
              <h3 className="font-semibold text-lg mb-2">{skill}</h3>
              <p className="text-sm text-gray-500">
                Building high-quality, scalable and production-ready solutions.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-10 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">My Experience</h2>

        {/** state for expand/collapse */}
        {(() => {
          const [openIndex, setOpenIndex] = React.useState(null);

          const toggle = (i) => {
            setOpenIndex(openIndex === i ? null : i);
          };

          const experiences = [
            {
              title: "TCS",
              role: "Java Full Stack Developer | 2021 - Present",
              short: "Worked on microservices, security and production deployments.",
              details: [
                "Upgraded 30+ microservices and BFF to Java 17 ensuring compatibility.",
                "Implemented security using Ping Federate and OAuth flows.",
                "Handled P1 production incidents and ensured quick resolution.",
                "Supported new joiners and contributed beyond core responsibilities.",
                "Worked on banking domain applications and system integrations."
              ]
            },
            {
              title: "Banking Client Project",
              role: "Full Stack Developer",
              short: "Worked on UI migration and performance improvements.",
              details: [
                "Migrated Vue 2 application to Vue 3 using Composition API.",
                "Rewrote frontend components while maintaining existing functionality.",
                "Integrated backend APIs and improved application performance.",
                "Updated test cases and migrated from Jest to Vitest.",
                "Ensured smooth UI/UX with bilingual support."
              ]
            }
          ];

          return (
            <div className="relative border-l-2 border-blue-500 ml-4">
              {experiences.map((exp, i) => (
                <div key={i} className="mb-10 ml-6">
                  <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"></span>

                  <div
                    onClick={() => toggle(i)}
                    className={card + " p-6 rounded-xl shadow cursor-pointer transition-all duration-300"}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <span className="text-sm text-blue-500">
                        {openIndex === i ? "▲" : "▼"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{exp.role}</p>

                    <p className="text-sm text-gray-500 mb-3">
                      {exp.short}
                      <span className="text-blue-500 ml-1">
                        {openIndex === i ? " show less" : "...read more"}
                      </span>
                    </p>

                    {openIndex === i && (
                      <ul className="list-disc pl-5 text-sm text-gray-500 space-y-2">
                        {exp.details.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-10 py-16">
        <h2 className="text-3xl font-bold mb-6">Education & Achievements</h2>

        <div className={card + " p-6 rounded-2xl shadow"}>
          <p>Bachelor’s Degree in Computer Science</p>
          <p className="text-gray-500 mt-2">
            Recognized for performance and contributions at TCS.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-16">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <div className={card + " p-6 rounded-xl shadow max-w-xl"}>
          <form
            action="mailto:kashish81099@gmail.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 border rounded-lg bg-transparent"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 border rounded-lg bg-transparent"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="p-3 border rounded-lg bg-transparent"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
