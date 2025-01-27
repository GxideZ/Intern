import React from 'react';

const Picture = () => {
  const images = [
    '6.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '7.jpg',
  ];

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center px-6 relative overflow-hidden border-t border-gray-700">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-30 blur-3xl transform -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-500 to-teal-800 opacity-40 blur-2xl transform translate-x-1/2 translate-y-1/8 rounded-full animate-spin-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-teal-500 to-purple-500 opacity-20 blur-2xl transform -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-8 text-gray-200 tracking-wide">
        Photo Album
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl z-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group transform transition duration-500 hover:scale-105 hover:rotate-1"
          >
            <img
              src={image}
              alt={`Album ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center space-y-2">
              <p className="text-white text-lg font-bold tracking-wider">
                Image {index + 1}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Picture;
