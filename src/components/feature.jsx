import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fas fa-hand-holding-water',
      title: 'Quality Check',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus',
    },
    {
      icon: 'fas fa-filter',
      title: '5 Steps Filtration',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus',
    },
    {
      icon: 'fas fa-recycle',
      title: 'Composition',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus',
    },
    {
      icon: 'fas fa-microscope',
      title: 'Lab Control',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus',
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto text-center pb-10">
        <h4 className="text-xl text-blue-600 uppercase">Our Feature</h4>
        <h1 className="text-5xl font-bold capitalize my-3">A Trusted Name In Bottled Water Industry</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-lg transition duration-500 hover:shadow-lg"
          >
            <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-blue-600 text-white">
              <i className={`${feature.icon} text-3xl transition-transform duration-500 hover:rotate-360`}></i>
            </div>
            <a href="#" className="text-2xl font-semibold mb-2">{feature.title}</a>
            <p className="mb-4">{feature.description}</p>
            <a href="#" className="text-gray-700 transition duration-500 hover:text-blue-600">
              Read More <i className="fa fa-angle-right"></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
