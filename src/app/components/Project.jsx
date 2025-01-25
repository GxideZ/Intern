"use client";

import React, { useRef } from "react";
import Link from "next/link";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my skills and projects.",
      tools: ["Nuxt","Vue.js","Tailwind CSS", "JavaScript"],
      image: "10.png",
    },
    {
      id: 2,
      title: "Dummy Man",
      description:
        "Instument for measuring Soil and Air moisture.",
      tools: ["React", "Bootstrap", "PostgreSQL","Node-RED"],
      image: "12.png",
    },
    {
      id: 3,
      title: "Apartment Management System",
      description: "Apartment management system that collects various customer data ",
      tools: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      image: "15.png",
    },
    {
      id: 4,
      title: "Tonmai ศูนย์รวมความรู้ต้นไม้",
      description:
        "Website showing various plant species.",
      tools: ["HTML", "CSS","MySQL"],
      image: "16.png",
    },

  ];

  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });

      if (containerRef.current.scrollLeft <= 0) {
        containerRef.current.scrollLeft =
          containerRef.current.scrollWidth - containerRef.current.offsetWidth;
      }
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const scrollAmount = 300;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      setTimeout(() => {
        if (
          containerRef.current.scrollLeft + containerRef.current.offsetWidth >=
          containerRef.current.scrollWidth
        ) {
          containerRef.current.scrollLeft = 0;
        }
      }, 300);
    }
  };

  return (
    <div className="min-h-screen border-t border-gray-700 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-8 px-6 flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-40 pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        My Projects
      </h1>

      <div className="relative w-full max-w-6xl">
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full text-white hover:bg-blue-400 z-10"
        >
          ❮
        </button>
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full text-white hover:bg-blue-400 z-10"
        >
          ❯
        </button>

        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-scroll scroll-smooth hide-scrollbar"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[300px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-lg shadow-lg p-6 flex-shrink-0 hover:shadow-2xl hover:-translate-y-2 transform transition-transform duration-300"
            >
              {/* ชื่อโปรเจค */}
              <h2 className="text-2xl font-extrabold mb-2 text-white text-center">
                {project.title}
              </h2>
              {/* ภาพโปรเจค */}
              <div className="relative w-[450px] overflow-hidden rounded-md mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] object-cover transition-transform duration-500 transform hover:scale-110"
                />
                {/* Layer สำหรับ Gradient บนภาพ */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-75"></div>
              </div>

              

              {/* คำอธิบาย */}
              <p className="text-gray-300 mb-4 leading-relaxed text-sm text-justify">
                {project.description}
              </p>

              {/* รายการ Tools */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-100">
                  Tools Used:
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-gray-400">
                  {project.tools.map((tool, index) => (
                    <li
                      key={index}
                      className="bg-gray-800 px-3 py-1 rounded-md text-center shadow-sm text-sm"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ปุ่ม Show More */}
              <Link href={`projects/${project.id}`} legacyBehavior>
                <a className="block mt-6 text-center border-2 rounded-xl hover:text-white bg-gray-300 text-gray-700 font-bold py-2 hover:bg-gray-600 transition-colors">
                  Show more
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
