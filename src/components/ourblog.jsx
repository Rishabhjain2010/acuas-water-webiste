import React from 'react';

const Blog = () => {
  return (
    <div className="bg-gray-100 pb-20">
      <div className="container mx-auto pb-20">
        <div className="text-center mx-auto pb-10 max-w-4xl">
          <h4 className="text-uppercase text-blue-600">Our Blog</h4>
          <h1 className="text-4xl font-bold mb-6">Latest Blog & News</h1>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="lg:w-1/3 xl:w-1/4 w-full px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden transition-transform duration-500 hover:shadow-lg hover:scale-105">
              <div className="relative">
                <img src="img/blog-1.jpg" className="w-full h-64 object-cover rounded-t-lg transition-transform duration-500 hover:scale-110" alt="Blog 1" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-blue-600 text-white rounded-lg z-10">
                  <i className="fa fa-calendar-alt mr-1"></i> Jan 12 2025
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-b-lg">
                <a href="#" className="text-xl font-semibold mb-2 block text-gray-800 hover:text-blue-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
                <a href="#" className="text-blue-600 font-bold hover:underline">Read More <i className="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 xl:w-1/4 w-full px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden transition-transform duration-500 hover:shadow-lg hover:scale-105">
              <div className="relative">
                <img src="img/blog-2.jpg" className="w-full h-64 object-cover rounded-t-lg transition-transform duration-500 hover:scale-110" alt="Blog 2" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-blue-600 text-white rounded-lg z-10">
                  <i className="fa fa-calendar-alt mr-1"></i> Jan 12 2025
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-b-lg">
                <a href="#" className="text-xl font-semibold mb-2 block text-gray-800 hover:text-blue-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
                <a href="#" className="text-blue-600 font-bold hover:underline">Read More <i className="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 xl:w-1/4 w-full px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden transition-transform duration-500 hover:shadow-lg hover:scale-105">
              <div className="relative">
                <img src="img/blog-3.jpg" className="w-full h-64 object-cover rounded-t-lg transition-transform duration-500 hover:scale-110" alt="Blog 3" />
                <div className="absolute top-6 left-6 px-4 py-2 bg-blue-600 text-white rounded-lg z-10">
                  <i className="fa fa-calendar-alt mr-1"></i> Jan 12 2025
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-b-lg">
                <a href="#" className="text-xl font-semibold mb-2 block text-gray-800 hover:text-blue-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
                <a href="#" className="text-blue-600 font-bold hover:underline">Read More <i className="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
