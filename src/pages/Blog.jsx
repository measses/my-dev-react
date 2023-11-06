import React from 'react';

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 text-center">Blog</h1>
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6).fill().map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              <img src="https://via.placeholder.com/400" alt="Blog Post" className="w-full h-48 object-cover object-center" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">Lorem Ipsum Dolor</h2>
                <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="mt-4 block text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
