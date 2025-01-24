import React from "react";
import Link from "next/link";

const Aboutme = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black py-4 px-5 flex items-center justify-center relative">
      {/* เอฟเฟกต์ Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-40 pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

      {/* เนื้อหา About Me */}
      <div className="relative bg-gray-800 bg-opacity-90 w-full max-w-4xl shadow-xl rounded-3xl p-8 text-white">
        <h1 className="text-5xl font-extrabold text-blue-300 mb-6 text-center">
          About Me
        </h1>

        {/* รูปภาพ */}
        <div className="mb-6 flex justify-center">
          <img
            src="2.jpg"
            alt="Profile Picture"
            className="rounded-full border-8 border-gray-500 w-40 h-40 object-cover transition-transform duration-500 hover:scale-110 hover:shadow-xl"
          />
        </div>

        {/* Grid สำหรับแบ่งข้อมูล */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-6">
          {/* คอลัมน์ข้อมูล 1 */}
          <div>
            <p className="text-1xl mb-4 leading-relaxed">
              <span className="font-bold text-blue-200">Name :</span> Thanapat
              Sukkree / Guide
            </p>
            <p className="text-1xl mb-4 leading-relaxed">
              <span className="font-bold text-blue-200">Phone :</span>{" "}
              099-418-5781
            </p>
            <p className="text-1xl mb-4 leading-relaxed">
              <span className="font-bold text-blue-200">Date of Birth :</span>{" "}
              10 January 2004
            </p>
            <p className="text-1xl mb-4 leading-relaxed">
              <span className="font-bold text-blue-200">Age :</span> 20 Years
              old
            </p>
          </div>

          {/* คอลัมน์ข้อมูล 2 */}
          <div>
            <p className="text- mb-4 leading-relaxed">
              <span className="font-bold text-blue-200">Education :</span> KMITL
              Prince of Chumphon Campus
            </p>
            <p className="text-1xl mb-4 leading-relaxed">
              <span className="font-bold text-blue-200">GPA :</span> 3.76 / 4.00
            </p>
            <p className="text-1xl mb-4 leading-relaxed">
              <span className="font-bold text-blue-200">Branch :</span> Computer
              Engineering Bachelor's degree, Year 3
            </p>
          </div>
        </div>

        {/* My skills */}
        <div className="flex flex-wrap justify-start m-2 items-center my-6 space-y-3 space-x-3">
          <span className="text-2xl w-full font-bold text-start text-blue-300">
            My Skills :
          </span>

          {/* Skill tags */}
          <p className="text-blue-900 bg-blue-200 font-bold p-2 rounded-md">
            HTML
          </p>
          <p className="text-blue-900 bg-blue-200 font-bold p-2 rounded-md">
            CSS
          </p>
          <p className="text-blue-900 bg-blue-200 font-bold p-2 rounded-md">
            JavaScript
          </p>
          <p className="text-blue-900 bg-blue-200 font-bold p-2 rounded-md">
            Next.js
          </p>
          <p className="text-blue-900 bg-blue-200 font-bold p-2 rounded-md">
            React
          </p>
          <p className="text-blue-900 bg-blue-200 font-bold p-2 rounded-md">
            PHP
          </p>
          <p className="text-blue-900 bg-blue-200 font-bold p-2 rounded-md">
            MySQL
          </p>
          <p className="text-blue-900 bg-blue-200 font-bold p-2 rounded-md">
            Vue.js
          </p>
          <p className="text-blue-900 bg-blue-200 font-bold p-2 rounded-md">
            Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
