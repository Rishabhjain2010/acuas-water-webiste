import React from 'react';

const Products = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container mx-auto py-20">
        <div className="text-center mx-auto pb-10 max-w-4xl">
          <h4 className="text-uppercase text-blue-600">Our Products</h4>
          <h1 className="text-4xl font-bold mb-6">We Deliver Best Quality Bottle Packs.</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="lg:w-1/3 xl:w-1/4 w-full px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-300 rounded-lg">
              <img src="img/product-3.png" className="w-full h-64 object-cover" alt="Mineral Water Bottle" />
              <div className="bg-gray-50 text-center p-4">
                <p className="text-sm mb-2">2L 1 Bottle</p>
                <a href="#" className="text-xl font-semibold mb-2 block text-gray-800 hover:text-blue-600">Mineral Water Bottle</a>
                <p className="text-2xl text-blue-600 mb-3">$35.00</p>
                <a href="#" className="bg-blue-600 text-white rounded-full py-2 px-4 inline-block hover:bg-blue-700">Read More</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 xl:w-1/4 w-full px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-300 rounded-lg">
              <img src="img/product-2.png" className="w-full h-64 object-cover" alt="RO Water Bottle" />
              <div className="bg-gray-50 text-center p-4">
                <p className="text-sm mb-2">4L 2 Bottles</p>
                <a href="#" className="text-xl font-semibold mb-2 block text-gray-800 hover:text-blue-600">RO Water Bottle</a>
                <p className="text-2xl text-blue-600 mb-3">$70.00</p>
                <a href="#" className="bg-blue-600 text-white rounded-full py-2 px-4 inline-block hover:bg-blue-700">Read More</a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 xl:w-1/4 w-full px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-300 rounded-lg">
              <img src="img/product-1.png" className="w-full h-64 object-cover" alt="UV Water Bottle" />
              <div className="bg-gray-50 text-center p-4">
                <p className="text-sm mb-2">6L 3 Bottles</p>
                <a href="#" className="text-xl font-semibold mb-2 block text-gray-800 hover:text-blue-600">UV Water Bottle</a>
                <p className="text-2xl text-blue-600 mb-3">$100.00</p>
                <a href="#" className="bg-blue-600 text-white rounded-full py-2 px-4 inline-block hover:bg-blue-700">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
