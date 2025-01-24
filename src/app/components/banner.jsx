"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black py-40 px-20 overflow-hidden">
      {/* Layered Background Shapes */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-30 blur-3xl transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-500 to-teal-500 opacity-40 blur-2xl transform translate-x-1/2 translate-y-1/2 rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-teal-500 to-purple-500 opacity-20 blur-2xl transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Text Section */}
        <div className="order-2 md:order-2 mt-4 md:mt-0 md:pl-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            <TypeAnimation
              sequence={[
                "Welcome to My Website",
                1000,
                "I'm Thanapat Sukkree",
                1000,
                "I'm Guide ! !",
                1000,
                "ธนภัทร สุขกรี",
                1000,
                "ไกด์ ธนภัทร",
                1000,
              ]}
              wrapper="span"
              speed={175}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <hr className="mt-4 border-t-4 border-gray-500 w-2/3" />
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            นายธนภัทร สุขกรี ชื่อเล่น "ไกด์" นักศึกษาชั้นปีที่ 3
            สาขาวิศวกรรมคอมพิวเตอร์ <br />
            สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
            วิทยาเขตชุมพรเขตรอุดมศักดิ์ จังหวัดชุมพร <br />
          </p>
          <div className="flex space-x-10 mt-6">
            <Link
              href="https://www.facebook.com/thn.phathr.sukh.kri"
              className="px-6 py-3 mt-8 w-[200px] h-[60px] border-2 border-blue-400 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-white"
              >
                <path
                  fill="currentColor"
                  d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24h11.499v-9.294h-3.136v-3.622h3.136v-2.669c0-3.112 1.843-4.842 4.687-4.842 1.358 0 2.551.101 2.891.147v3.321h-1.944c-1.518 0-1.897.717-1.897 1.755v2.299h3.591l-.464 3.622h-3.127V24h6.253c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"
                />
              </svg>
              <span>Facebook</span>
            </Link>
            <Link
              href="https://github.com/GxideZ"
              className="px-6 py-3 mt-8 w-[200px] h-[60px] bg-gray-900 border-2 border-gray-500 hover:bg-gray-900 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center space-x-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-white"
              >
                <path
                  fill="currentColor"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.804 8.207 11.4.6.112.82-.26.82-.577v-2.21c-3.338.728-4.036-1.497-4.036-1.497-.544-1.378-1.333-1.745-1.333-1.745-1.091-.744.083-.73.083-.73 1.208.085 1.843 1.239 1.843 1.239 1.073 1.832 2.813 1.303 3.5.998.107-.777.42-1.303.76-1.603-2.665-.302-5.467-1.334-5.467-5.933 0-1.313.468-2.381 1.236-3.22-.124-.303-.535-1.523.116-3.167 0 0 1.007-.321 3.29 1.21 1.88-.522 3.88-.522 5.76 0 2.283-1.531 3.29-1.21 3.29-1.21.652 1.644.24 2.864.116 3.167.768.839 1.236 1.908 1.236 3.22 0 4.612-2.804 5.63-5.48 5.928.43.37.82 1.092.82 2.21v3.293c0 .318.219.69.83.576C20.562 21.804 24 17.302 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
              <span>GitHub</span>
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-1 flex justify-center md:justify-end px-4 md:px-[100px]">
          <div className="relative group">
            {/* เลเยอร์พื้นหลัง */}
            <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 group-hover:scale-105 transition-transform duration-500">
              <img
                src="1.jpg"
                alt="Thanapat Sukkree"
                className="w-full h-full rounded-full bg-gray-900"
              />
            </div>

            {/* รูปหลัก */}
            <img
              src="8.jpg"
              alt="Thanapat Sukkree"
              className="w-96 md:w-96 rounded-full relative z-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-2"
            />

            {/* รูปภาพ T ด้านนอก */}
            <img
              src="T.png"
              alt="Pointer Image"
              className="absolute -top-10 -left-11 w-full z-30 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
