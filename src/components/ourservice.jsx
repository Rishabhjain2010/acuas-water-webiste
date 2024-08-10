import React from 'react';

const Service = () => {
  return (
    <div className="relative bg-gray-100 overflow-hidden py-20">
      <div className="container mx-auto py-20">
        <div className="text-center mx-auto pb-10 max-w-4xl">
          <h4 className="text-uppercase text-blue-600">Our Service</h4>
          <h1 className="text-4xl font-bold mb-6">Protect Your Family with Best Water</h1>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="lg:w-1/3 xl:w-1/4 px-4 mb-8 lg:mb-0">
            <div className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden group">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-full mb-4">
                    <i className="fas fa-hand-holding-water text-white text-2xl"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <a href="#" className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Residential Waters</a>
                  <p className="text-gray-600 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-lg shadow-lg p-6 mt-4 overflow-hidden group">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-full mb-4">
                    <i className="fas fa-dumpster-fire text-white text-2xl"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <a href="#" className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Commercial Waters</a>
                  <p className="text-gray-600 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-lg shadow-lg p-6 mt-4 overflow-hidden group">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-full mb-4">
                    <i className="fas fa-filter text-white text-2xl"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <a href="#" className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Filtration Plants</a>
                  <p className="text-gray-600 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="bg-transparent">
              <img src="img/water.png" className="w-full h-auto" alt="Water" />
            </div>
          </div>
          <div className="lg:w-1/3 xl:w-1/4 px-4">
            <div className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden group">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-full mb-4">
                    <i className="fas fa-assistive-listening-systems text-white text-2xl"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <a href="#" className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Water Softening</a>
                  <p className="text-gray-600 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-lg shadow-lg p-6 mt-4 overflow-hidden group">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-full mb-4">
                    <i className="fas fa-recycle text-white text-2xl"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <a href="#" className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Market Research</a>
                  <p className="text-gray-600 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                </div>
              </div>
            </div>
            <div className="relative bg-white rounded-lg shadow-lg p-6 mt-4 overflow-hidden group">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-full mb-4">
                    <i className="fas fa-project-diagram text-white text-2xl"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <a href="#" className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">Project Planning</a>
                  <p className="text-gray-600 mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
