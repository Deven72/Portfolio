import profile from "./assets/profile.jpg";
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 backdrop-blur-md bg-white/5 sticky top-0 z-50 border-b border-white/10">
        <h1 className="text-2xl font-bold text-cyan-400">
          Devendra Kumar Kewat
        </h1>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        <img
            src={profile}
            alt="Devendra"
            className="w-40 h-40 rounded-full border-4 border-cyan-400 object-cover shadow-2xl"
            />
        <h1 className="text-5xl md:text-7xl font-extrabold mt-8 bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">
          Devendra Kumar Kewat
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-3xl">
          CSE Student | IoT Developer | Web Designer | Tech Enthusiast
        </p>

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <a
            href="https://github.com/Deven72"
            target="_blank"
            className="px-6 py-3 rounded-2xl bg-cyan-500 hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/devendra-kewat-1779403b9/"
            target="_blank"
            className="px-6 py-3 rounded-2xl bg-fuchsia-500 hover:scale-105 transition"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="px-6 py-3 rounded-2xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">About Me</h2>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
          <p className="text-gray-300 text-lg leading-8">
            I am a passionate and dedicated Computer Science Engineering 
            student with skills in web development, Python programming, 
            data science, and creative digital work. I enjoy learning new 
            technologies and creating practical solutions through coding 
            and design. I have experience working on projects related to 
            IoT, smart home automation, and website development. I am a 
            hardworking, detail-oriented, and quick learner who believes 
            in delivering quality work on time. I always focus on clear 
            communication, client satisfaction, and continuous improvement. 
            Along with technical skills, I also have creative abilities in 
            Canva designing, content editing, and digital presentations.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-fuchsia-400 mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Python",
            "IoT",
            "ESP8266",
            "Tailwind CSS",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Smart Home Automation",
              desc: "ESP8266 based smart home system with mobile app control.",
            },
            {
              title: "Notes Website",
              desc: "Responsive notes sharing platform with animated UI.",
            },
            {
              title: "PDF Editing Tool Website",
              desc: "Modern PDF 29+ Editing tools website.",
              link: "https://www.pdfmagic.co.in/", 
            
            },
            {
              title: "IoT Projects",
              desc: "Various IoT and automation projects using sensors.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:scale-[1.02] transition"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-2 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition"
                >
                View Project
                </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-fuchsia-400 mb-10">
          Contact Me
        </h2>

        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl">
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black/40 border border-white/10 rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-black/40 border border-white/10 rounded-xl p-4"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="bg-black/40 border border-white/10 rounded-xl p-4"
            ></textarea>

            <button className="bg-cyan-500 hover:scale-105 transition rounded-xl p-4 font-bold">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 border-t border-white/10">
        © 2026 Devendra Kumar Kewat. All rights reserved.
      </footer>
    </div>
  );
}
