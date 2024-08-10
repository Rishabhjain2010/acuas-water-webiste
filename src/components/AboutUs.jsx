import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 overflow-hidden py-20">
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <div className="relative mt-8 ml-8 pb-8">
            <img
              src="img/about.jpg"
              alt="About Us"
              className="rounded-lg object-cover w-full h-full"
            />
          
            <div className="absolute inset-0 mt-[-30px] ml-[30px]">
              <div className="absolute w-full h-2 top-[-30px] right-0 bg-gray-700 rounded-md"></div>
              <div className="absolute w-2 h-full left-[-30px] bottom-[30px] bg-gray-700 rounded-md"></div>
            </div>
            <div className="absolute top-0 left-0 bg-gray-700 text-white font-bold text-2xl p-6 mt-[-30px] ml-[-30px] rounded-lg">
              20 Years Experience
            </div>
          </div>

          <div>
            <h4 className="text-blue-600 uppercase text-xl">About Us</h4>
            <h1 className="text-5xl font-bold mb-6">We Deliver The Quality Water.</h1>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem quas totam nostrum! Maxime rerum voluptatem sed, facilis unde a aperiam nulla voluptatibus excepturi ipsam iusto consequuntur.
            </p>
            
       
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-blue-600 text-white flex items-center justify-center w-20 h-20">
                    <i className="fas fa-tint text-2xl"></i>
                  </div>
                </div>
                <div className="ml-6">
                  <a href="#" className="text-2xl font-semibold inline-block mb-3">Satisfied Customer</a>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="rounded-full bg-blue-600 text-white flex items-center justify-center w-20 h-20">
                    <i className="fas fa-faucet text-2xl"></i>
                  </div>
                </div>
                <div className="ml-6">
                  <a href="#" className="text-2xl font-semibold inline-block mb-3">Standard Product</a>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                </div>
              </div>
            </div>

            <a href="#" className="bg-gray-700 text-white rounded-full py-3 px-6 inline-block">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
