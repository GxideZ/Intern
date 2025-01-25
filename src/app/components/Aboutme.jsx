import React, { useState } from "react";

const Aboutme = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      skill: "HTML",
      icon: "🌐",
      // description: "เข้าใจหลักการทำงานและโครงสร้างของ HTML ได้ในระดับดี",
    },
    {
      skill: "CSS",
      icon: "🎨",
      // description: "สามารถใช้งาน CSS ได้ ในระดับปลานกลางใช้ในการตกแต่ง Website",
    },
    {
      skill: "JavaScript",
      icon: "📜",
      // description: "สาราถเขียน JavaScript ในเข้าใจหลักการทำงานในการดึง API ได้ระดับพอใช้ได้",
    },
    {
      skill: "Next.js",
      icon: "⚡",
      // description: "เข้าใจโครงสร้างและการทำงานของ Next.js ในระดับปานกลาง",
    },
    {
      skill: "React",
      icon: "⚛️",
      // description: "เข้าใจโครงสร้างและการทำงานของ React ในระดับปานกลาง จะเขียนเหมือน Next.js",
    },
    {
      skill: "PHP",
      icon: "🐘",
      // description: "เข้าใจการทำงานของ PHP ได้ระดับปานกลาง สามารถใช้ภาษา PHP ในการดึงข้อมูลจาก Database ได้",
    },
    {
      skill: "MySQL",
      icon: "🛢️",
      // description: "สามารถสร้างฐานข้อมูล และเข้าใจระบบและหลักการทำงานของ SQL ได้ในระดับปานกลาง",
    },
    {
      skill: "Vue.js",
      icon: "🟢",
      // description: "เข้าใจโครงสร้างการทำงานของ Vue.js ในระดับปานกลาง",
    },
    {
      skill: "Tailwind CSS",
      icon: "🌬️",
      // description: "เป็น framework ของ CSS สามารถเขียนและเข้าใจโครงสร้างในการเขียนในระดับปานกลาง",
    },
  ];

  return (
    <div className="min-h-screen border-t border-gray-700 bg-gradient-to-r from-gray-900 via-gray-800 to-black py-10 px-6 flex items-center justify-center relative">
      {/* เอฟเฟกต์ Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-40 pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>

      {/* เนื้อหา About Me */}
      <div className="relative bg-gray-800 bg-opacity-90 w-full max-w-5xl shadow-xl rounded-3xl p-8 text-white">
        <h1 className="text-5xl font-extrabold text-blue-300 mb-10 text-center">
          About Me
        </h1>

        {/* รูปภาพ */}
        <div className="mb-8 flex justify-center">
          <img
            src="2.jpg"
            alt="Profile Picture"
            className="rounded-full border-8 border-gray-500 w-40 h-40 object-cover transition-transform duration-500 hover:scale-110 hover:shadow-xl"
          />
        </div>

        {/* ข้อมูลส่วนตัว */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-3xl">
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
            <p className="text-1xl mb-4 leading-relaxed">
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

        {/* My Skills */}
        <div className="mt-10">
          {/* ปุ่ม Skill */}
          <div className="flex flex-wrap gap-3 justify-center ">
            <button
              onClick={() => setSelectedSkill("Skill")}
              className=" w-[800px] bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 text-sm"
            >
              MY SKILL
            </button>
          </div>

          {/* Skill Detail Modal */}
          {selectedSkill && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-hidden max-w-4xl mx-auto px-4 py-10">
              <div className="bg-white text-black p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <h3 className="text-xl font-bold mb-4 text-center">
                  My Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                  {skills.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition"
                    >
                      <p className="text-lg font-bold mb-1">
                        {item.icon} {item.skill}
                      </p>
                      <p className="text-gray-700 text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6">
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
