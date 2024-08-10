import React from 'react'

const counter = () => {
    return (
        <div className="relative overflow-hidden py-20 bg-gradient-to-b from-blue-800 to-blue-600 bg-cover bg-center" style={{ backgroundImage: "url('../img/fact-bg.jpg')" }}>
          <div className="container mx-auto py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              
              <div className="flex flex-col items-center text-center text-white">
                <div className="flex items-center justify-center w-24 h-24 bg-blue-500 rounded-full mb-4">
                  <i className="fas fa-thumbs-up text-3xl"></i>
                </div>
                <h4 className="text-lg mb-4">Happy Clients</h4>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">456</span>
                  <span className="text-6xl font-bold">+</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center text-white">
                <div className="flex items-center justify-center w-24 h-24 bg-blue-500 rounded-full mb-4">
                  <i className="fas fa-truck text-3xl"></i>
                </div>
                <h4 className="text-lg mb-4">Transport</h4>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">513</span>
                  <span className="text-6xl font-bold">+</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center text-white">
                <div className="flex items-center justify-center w-24 h-24 bg-blue-500 rounded-full mb-4">
                  <i className="fas fa-users text-3xl"></i>
                </div>
                <h4 className="text-lg mb-4">Employees</h4>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">53</span>
                  <span className="text-6xl font-bold">+</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center text-white">
                <div className="flex items-center justify-center w-24 h-24 bg-blue-500 rounded-full mb-4">
                  <i className="fas fa-heart text-3xl"></i>
                </div>
                <h4 className="text-lg mb-4">Years Experience</h4>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">17</span>
                  <span className="text-6xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default counter