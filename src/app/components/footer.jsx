import React from "react";
import Link from "next/link";

const Footer = () => {
return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="border-t border-gray-700  py-4 text-center text-sm relative z-10"></div>
        <div className="absolute inset-0 pointer-events-none">
            <div className="bg-gradient-radial from-transparent via-gray-700 to-gray-900 opacity-50 w-[400px] h-[400px] rounded-full blur-3xl absolute top-[-100px] left-[-100px]"></div>
            <div className="bg-gradient-radial from-transparent via-gray-700 to-gray-900 opacity-50 w-[300px] h-[300px] rounded-full blur-2xl absolute bottom-[-100px] right-[-100px]"></div>
        </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-[150px] py-12 relative z-10">
        <div>
          <h2 className="text-lg font-bold mb-3">Contact Us</h2>
          <p className="mb-1">· Email: 65200156@kmitl.ac.th</p>
          <p className="mb-1">· Phone: +66 99 418 5781</p>
          <p>· Address: Prachuap Khiri Khan, Muang Prachuap Khilikhan, 77000</p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-3">Follow Us</h2>
          <Link href='https://www.facebook.com/thn.phathr.sukh.kri' className="mb-1">· Facebook: ธนภัทร สุขกรี</Link> <br />
          <Link href='https://github.com/GxideZ' className="mb-1">· Github : GxideZ</Link><br />
          <Link href='https://www.instagram.com/guid36/' >· Instagram: guid36</Link>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-3">Internship</h2>
          <p className="mb-1">· Front-End Developer</p>
          <p className="mb-1">· Web Developer</p>
          <p className="mb-1">· Fullstack Developer</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm relative z-10">
        © 2025 Guide - Thanapat Sukkree
      </div>
    </footer>
  );
};

export default Footer;
