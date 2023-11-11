import React from "react";

const Home = () => {
  return (
    <div>
    <div className="flex justify-center items-start min-h-screen bg-gray-100 pt-20">
      <div className="flex flex-wrap gap-5 ml-56">
        <div className="w-1/5 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Temel Bilgiler
          </h2>
          <div className="flex justify-center mb-4">
            <img
              src="../src/assets/img/html.PNG"
              className="w-32 h-32 rounded-full"
            />
          </div>
          <h3 className="text-lg font-medium mb-4">
            Algoritma, HTML, CSS, JS Öğrenerek yazılıma adım atabilirsin.
          </h3>
          <a
            href="#_"
            className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group flex items-center justify-center"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Detaylar
            </span>
          </a>
        </div>

        <div className="w-1/5 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-center">Programlama Dilleri</h2>
          <div className="flex justify-center mb-4">
            <img
              src="../src/assets/img/programming.png"
              alt="Temel Bilgiler Image"
              className="w-32 h-32 rounded-full"
            />
          </div>
          <h3 className="text-lg font-medium mb-4">
            Python, Java veya C++ gibi bir dilde derinlemesine bilgi edinme
          </h3>
          <a
            href="#_"
            className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group flex items-center justify-center"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Detaylar
            </span>
          </a>
        </div>

        <div className="w-1/5 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Çerçeveler ve Kütüphaneler
          </h2>
          <div className="flex justify-center mb-4">
            <img
              src="../src/assets/img/library.jpg"
              alt="Temel Bilgiler Image"
              className="w-32 h-32 rounded-full"
            />
          </div>
          <h3 className="text-lg font-medium mb-4">
            React, Laravel, Node.js, Spring gibi Çerçeveler ve Kütüphaneler öğren.
          </h3>
          <a
            href="#_"
            className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group flex items-center justify-center"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Detaylar
            </span>
          </a>
        </div>

        <div className="w-1/5 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-center">Veritabanları</h2>
          <div className="flex justify-center mb-4">
            <img
              src="../src/assets/img/database.png"
              alt="Temel Bilgiler Image"
              className="w-32 h-32 rounded-full"
            />
          </div>
          <h3 className="text-lg font-medium mb-4">
            Temel DevOps araçlarına ve bulut hizmetlerine aşinalık kazanma.
          </h3>
          <a
            href="#_"
            className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group flex items-center justify-center"
          >
            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Detaylar
            </span>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
