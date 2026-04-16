import React, { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode
    ? "bg-[#0f172a] text-white"
    : "bg-[#f8fafc] text-gray-900";

  const card = darkMode
    ? "bg-[#1e293b]"
    : "bg-white";

  return (
    <div className={theme + " min-h-screen font-sans"}>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 shadow-sm">
        <h1 className="text-2xl font-bold tracking-wide">Kashish</h1>
        <div className="space-x-6 hidden md:block">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="border px-3 py-1 rounded-lg"
        >
          {darkMode ? "Light" : "Dark"}
        </button>
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
            <a href="#" className="underline">
              LinkedIn
            </a>
            <a href="#" className="underline">
              GitHub
            </a>
            <a href="#" className="underline">
              LeetCode
            </a>
          </div>

          <button className="bg-blue-500 text-white px-6 py-2 rounded-xl shadow">
            Download Resume
          </button>
        </div>

        <div className="flex justify-center">
        <img src="src/assets/profile.png" className="w-64 h-64 rounded-2xl object-cover" />
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
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-6">
          <div className={card + " p-6 rounded-2xl shadow"}>
            <h3 className="text-xl font-semibold">TCS</h3>
            <p className="text-sm text-gray-500 mb-2">
              Java Full Stack Developer
            </p>
            <p>
              Upgraded 30+ microservices to Java 17, implemented Ping
              Federate-based security, handled production incidents and ensured
              seamless deployments.
            </p>
          </div>

          <div className={card + " p-6 rounded-2xl shadow"}>
            <h3 className="text-xl font-semibold">Banking Client Project</h3>
            <p className="text-sm text-gray-500 mb-2">Full Stack Developer</p>
            <p>
              Migrated Vue 2 to Vue 3 using Composition API, improved UI
              performance, integrated backend APIs and enhanced user
              experience.
            </p>
          </div>
        </div>
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

        <div className={card + " p-6 rounded-2xl shadow"}>
          <p>Email: your@email.com</p>
          <p>Phone: +91-XXXXXXXXXX</p>
        </div>
      </section>
    </div>
  );
}