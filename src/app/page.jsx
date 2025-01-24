"use client";
import { useEffect } from "react";
import { useState } from "react";

// component
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Intern from "./components/Intern";
import Project from "./components/Project";
import Aboutme from "./components/Aboutme";

export default function Home() {
  const [visibleSection, setVisibleSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar />
      
      <section id="home" className="opacity-0 translate-y-10 transition-all duration-1000">
        <Banner />
      </section>

      <section id="about" className="opacity-0 translate-y-10 transition-all duration-1000">
        <Aboutme />
      </section>

      <section id="project" className="opacity-0 translate-y-10 transition-all duration-1000">
        <Project />
      </section>

      <section id="intern" className="opacity-0 translate-y-10 transition-all duration-1000">
        <Intern />
      </section>

      <section id="contact" className="opacity-0 translate-y-10 transition-all duration-1000">
        <Footer />
      </section>
      
      
    </div>
  );
}
