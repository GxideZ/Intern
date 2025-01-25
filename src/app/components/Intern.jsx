import React from "react";

function Intern() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black py-8 px-6 flex items-center justify-center relative border-t border-gray-700">
      
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-40 pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full z-10">
        {/* ซ้าย: รูปภาพ */}
        <div className="flex justify-center items-center relative">
          {/* กรอบแสงรอบรูป */}
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400 via-red-400 to-pink-400 opacity-50 blur-xl animate-pulse"></div>
          <img
            src="9.jpg"
            alt="Thaanapat Sukkree"
            className="w-80 h-80 rounded-full shadow-lg relative z-10  transition-transform duration-500 hover:scale-105 hover:rotate-3"
          />
        </div>

        {/* ขวา: ข้อมูลตำแหน่งฝึกงาน */}
        <div className="p-8 bg-gray-800 text-white rounded-lg shadow-xl flex flex-col justify-center w-auto hover:shadow-2xl transition-shadow duration-500">
          {/* หัวข้อหลัก */}
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-300 relative group">
            <span className="relative z-10">กำลังมองหาที่ฝึกงานในตำแหน่ง</span>
          </h2>

          {/* รายการตำแหน่งงาน */}
          <ul className="list-disc list-inside space-y-4 text-lg text-start">
            <li className="relative group">
              <span className="absolute inset-0 bg-blue-500 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
              <span className="relative z-10">Front-End Developer</span>
            </li>
            <li className="relative group">
              <span className="absolute inset-0 bg-blue-500 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
              <span className="relative z-10">Web Developer</span>
            </li>
            <li className="relative group">
              <span className="absolute inset-0 bg-blue-500 blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-20"></span>
              <span className="relative z-10">Fullstack Developer</span>
            </li>
          </ul>

          {/* ระยะเวลาฝึกงาน */}
          <div className="mt-6 p-6 bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-transform duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold text-center text-white-400 relative group">
              <span className="relative z-10 text-blue-300">ระยะเวลาฝึกงาน</span>
            </h2>
            <h1 className="text-2xl text-center font-semibold mt-2 text-white relative group">
              <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 blur-sm opacity-50 transition-opacity duration-500 "></span>
              <span className="relative z-10">21/04/2025 - 31/10/2025</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intern;
