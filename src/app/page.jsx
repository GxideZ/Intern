"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// component
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Intern from "./components/Intern";
import Project from "./components/Project";
import Aboutme from "./components/Aboutme";
import Picture from "./components/Picture";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.25, // Trigger when 25% of the section is visible
    };

    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar activeSection={activeSection} />
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
      <section id="home" className="transition-all duration-1000">
        <Banner />
      </section>

      <section id="about" className="transition-all duration-1000">
        <Aboutme />
      </section>

      <section id="project" className="transition-all duration-1000">
        <Project />
      </section>

      <section id="intern" className="transition-all duration-1000">
        <Intern />
      </section>

      <section id="picture" className="transition-all duration-1000">
        <Picture />
      </section>

      <section id="contact" className="transition-all duration-1000">
        <Footer />
      </section>
      
      </motion.div>
    </div>
  );
}
