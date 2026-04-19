import React, { useState } from "react";

export default function App() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const achievements = [
    {
      title: "Microsoft Azure Fundamentals - AZ 900 Certification.",
      href: "/certificates/azure-az-900.pdf",
    },
    {
      title: "Recognized for performance and contributions during my work in my current organization.",
      href: "/certificates/current-organization-recognition.pdf",
    },
  ];

  const theme = prefersDark
    ? "bg-[#0f172a] text-white"
    : "bg-[#f8fafc] text-gray-900";

  const card = prefersDark
    ? "bg-[#1e293b]"
    : "bg-white";

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className={theme + " min-h-screen font-sans"}>
      {/* Navbar */}
      <nav className="px-6 py-5 shadow-sm md:px-8">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-xl font-bold tracking-wide md:text-2xl"> <span style={{ fontFamily: "BrickSans" }} >:)&nbsp;&nbsp;</span>&nbsp;Krushh Ishh</h1>
          {/* <h1 className="text-3xl" style={{ fontFamily: "BrickSans" }}>
          :)  Krushh Ishh
        </h1> */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl md:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current"></span>
              <span className="block h-0.5 w-5 bg-current"></span>
              <span className="block h-0.5 w-5 bg-current"></span>
            </span>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a
              href="mailto:kashish81099@gmail.com?subject=Opportunity&body=Hi Kashish,%0D%0A"
              className="bg-blue-500 text-white px-6 py-2 rounded-xl"
            >
              Mail Me
            </a>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className={card + " mt-4 rounded-2xl p-4 shadow md:hidden"}>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:kashish81099@gmail.com?subject=Opportunity&body=Hi Kashish,%0D%0A"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-blue-500 text-center text-white px-6 py-2 rounded-xl"
              >
                Mail Me
              </a>
            </div>
          </div>
        )}
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

          <p className="mb-2 text-gray-500">
            I build things that work — and then make them better.<br></br>
          </p>
          <p className="mb-6 text-gray-500">
            Java Full Stack Developer experienced in microservices,
            cloud platforms, and modern frontend frameworks.
            From creating applications from scratch to debugging tricky issues, upgrading systems,
            and mentoring teammates, I bring a mix of curiosity, ownership, and reliability to everything I do.
          </p>

          <div className="flex gap-4 mb-6">
            <a href="https://www.linkedin.com/in/kashish-6186a421b/details/recommendations/" className="underline" target="_blank">
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
          <div className="relative">
            <div className="absolute inset-0 translate-x-1 translate-y-2 rotate-[2deg] bg-[rgb(217_224_232)]" />
            <div className="relative border border-[rgb(217_224_232)] bg-white p-2">
              <img
                src="/assets/pfp.jpeg"
                alt="Kashish"
                className="h-80 w-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-10 py-16">
        <h2 className="text-3xl font-bold mb-10">What I Do</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Java & Spring Boot", "Frontend (React/Angular/Vue)", "Microservices", "Cloud (Azure)", "Security", "Testing & CI/CD"].map((skill, i) => (
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
              role: "Java Full Stack Developer | ABN Amro Bank | Nov 2022 - Present",
              short: "Worked on microservices, security and production deployments.",
              details: [
                "Upgraded 30+ microservices and BFF to Java 17 ensuring compatibility.",
                "Implemented security using Ping Federate and OAuth flows.",
                "Handled P1 production incidents and ensured quick resolution.",
                "Supported new joiners and contributed beyond core responsibilities.",
                "Worked on banking domain applications and system integrations.",
                "Migrated Vue 2 application to Vue 3",
                "Integrated backend APIs and improved application performance.",
                "Updated test cases and migrated from Jest to Vitest.",
                "Ensured smooth UI/UX with bilingual support."
              ]
            },
            {
              title: "Nagarro",
              role: "Software Engineer | July 2022 - Nov 2022",
              short: "Contributed to web development with a focus on Java, APIs, and delivery quality.",
              details: [
                "Built and enhanced application features using Java and Spring Boot for client-facing business requirements.",
                "Worked on REST API integration and backend logic to support seamless communication across services.",
                "Collaborated with cross-functional teams to understand requirements, troubleshoot issues, and deliver reliable releases.",
                "Improved code quality through debugging, testing, and maintaining clean, reusable implementation patterns.",
                "Supported end-to-end development tasks across backend and frontend touchpoints in an agile delivery environment."
              ]
            },
            {
              title: "iDigital Web",
              role: "Intern Android Developer | Nov 2021 - May 2022",
              short: "Built Android features and improved mobile app usability during my internship.",
              details: [
                "Developed Android application features using Java and Android Studio based on business requirements.",
                "Created and refined mobile UI screens with a focus on usability, responsiveness, and consistent user experience.",
                "Integrated APIs and handled data flow between the mobile app and backend services.",
                "Fixed bugs, optimized existing functionality, and supported testing to improve application stability.",
                "Worked closely with senior developers to learn mobile development practices and deliver assigned modules on time."
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
                      {/* <span className="text-sm text-blue-500">
                        {openIndex === i ? "▲" : "▼"}
                      </span> */}
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
        <h2 className="text-3xl font-bold mb-10">Education & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={card + " p-6 rounded-2xl shadow"}>
            <h3 className="text-xl font-semibold mb-2">Academic Background</h3>
            <p>Master's Degree in Computer Science</p>
            <p className="text-gray-500 mt-2">
              MCA | Institute of Engineering and Technology, Lucknow | 2020 - 2022
            </p>
          </div>

          <div className={card + " p-6 rounded-2xl shadow"}>
            <h3 className="text-xl font-semibold mb-3">Certifications</h3>
            <ul className="list-disc pl-5 text-gray-500 space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index}>
                  {achievement.title}{" "}
                  <a
                    href={achievement.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-blue-500 underline underline-offset-2"
                  >
                    Preview
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-16">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <div className={card + " p-6 rounded-xl shadow max-w-xl"}>
          <form
            action="mailto:kashish81099@gmail.com?subject=Opportunity"
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
