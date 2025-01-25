"use client";

import React from "react";
import { use } from "react";
import Link from "next/link";

const projectDetails = {
  1: {
    title: "Portfolio Website",
    description:
      "A personal profile website displays personal information and is developed using the Nuxt framework for building the website. Tailwind CSS is used for styling and designing the website's layout.",
    tools: ["Nuxt","Vue.js", "Tailwind CSS", "JavaScript"],
    image: "/10.png",
  },
  2: {
    title: "Dummy Man",
    description: "I was responsible for the software development in this project, which involves creating a device to measure soil and air humidity. The project utilizes PostgreSQL as the database and Node-RED to integrate hardware and software. The website was developed using the React framework to build a dashboard that displays the status of soil and air humidity.",
    tools: ["React", "Bootstrap", "PostgreSQL","Node-RED"],
    image: "/13.png",
  },
  3: {
    title: "Dummy Man",
    description: "I was responsible for the software development in this project, which involves creating a device to measure soil and air humidity. The project utilizes PostgreSQL as the database and Node-RED to integrate hardware and software. The website was developed using the React framework to build a dashboard that displays the status of soil and air humidity.",
    tools: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "/15.png",
  },
  4: {
    title: "Tonmai ศูนย์รวมความรู้ต้นไม้",
    description: "The website that shows information about various types of plants is developed using HTML and CSS. We can search for the plant species we want. We use MySQL as the database.",
    tools: ["HTML", "CSS", "MySQL"],
    image: "/16.png",
  },
};

const ProjectDetailsPage = ({ params }) => {
  const { id } = use(params);

  const project = projectDetails[Number(id)];

  if (!project) {
    return <div className="text-white">Project not found.</div>;
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white p-8 relative overflow-hidden">
        {/* Layer สำหรับเพิ่มเอฟเฟกต์เบลอ */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-purple-900 opacity-30 blur-3xl"></div>

        {/* เพิ่มไลท์วงกลมสำหรับสร้างมิติ */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-blue-500 opacity-25 rounded-full blur-3xl"></div>

        {/* Container ของเนื้อหาหลัก */}
        <div className="relative max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden bg-gray-800 bg-opacity-95 backdrop-blur-md">
          {/* ปุ่ม X */}
          <Link href="/">
            <button
              className="absolute top-4 right-4 text-gray-300 hover:text-white bg-gray-700 hover:bg-red-600 rounded-full p-2 shadow-md transition-all"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Link>

          {/* รายละเอียดโปรเจกต์ */}
          <div className="p-6">
            <h1 className="text-4xl font-extrabold text-center text-white mb-4">
              {project.title}
            </h1>
            {/* รูปภาพโปรเจกต์ */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-md mb-4 shadow-lg"
            />
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            <h2 className="text-2xl font-bold text-blue-100 mb-4">
              Tools Used :
            </h2>
            {/* รายการ Tools พร้อมตกแต่ง */}
            <ul className="grid grid-cols-2 gap-4 mb-6">
              {project.tools.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-200 bg-gray-700 px-4 py-2 rounded-lg shadow-sm"
                >
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  {tool}
                </li>
              ))}
            </ul>

            {Number(id) === 1 && (
              <div className="w-full">
                <Link href="https://profile-4ecd.onrender.com/?fbclid=IwY2xjawH_XEJleHRuA2FlbQIxMAABHZ7dgC0oaUXewjUp86ea8Qa3EHRwfaVNKDVQClFC7X5u-Z1Mcok7qIlZ8g_aem_6anv64s5vBgZVPWsE5Z_ug">
                  <button className="px-6 py-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md transition-all">
                    My Profile
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
