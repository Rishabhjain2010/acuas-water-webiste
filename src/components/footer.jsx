import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-[#001442] text-white py-5">
        <div className="container py-5">
          <div className="flex flex-wrap mb-5 items-center">
            <div className="w-full lg:w-7/12 mb-5 lg:mb-0">
              <div className="relative mx-auto">
                <input
                  className="form-input rounded-full w-full py-3 px-4 pr-16"
                  type="text"
                  placeholder="Email address to Subscribe"
                />
                <button
                  type="button"
                  className="btn btn-secondary rounded-full absolute top-0 right-0 py-2 px-4 mt-2 mr-2"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="w-full lg:w-5/12 flex items-center justify-center lg:justify-end">
              <a
                className="btn btn-secondary btn-md-square rounded-full mr-3"
                href="#"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-secondary btn-md-square rounded-full mr-3"
                href="#"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-secondary btn-md-square rounded-full mr-3"
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="btn btn-secondary btn-md-square rounded-full"
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-5">
              <div className="flex flex-col">
                <h3 className="text-white mb-4 flex items-center">
                  <i className="fas fa-hand-holding-water text-primary mr-3"></i>
                  Acuas
                </h3>
                <p className="mb-3">
                  Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit consectetur
                  adipiscing elit.
                </p>
                <div className="relative">
                  <input
                    className="form-input rounded-full w-full py-3 px-4 pr-16"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary rounded-full absolute top-0 right-0 py-2 mt-2 mr-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-5">
              <div className="flex flex-col">
                <h4 className="text-white mb-4">About Us</h4>
                <a href="#" className="flex items-center mb-2 hover:text-primary">
                  <i className="fas fa-angle-right mr-2"></i> Why Choose Us
                </a>
                <a href="#" className="flex items-center mb-2 hover:text-primary">
                  <i className="fas fa-angle-right mr-2"></i> Free Water Bottles
                </a>
                <a href="#" className="flex items-center mb-2 hover:text-primary">
                  <i className="fas fa-angle-right mr-2"></i> Water Dispensers
                </a>
                <a href="#" className="flex items-center mb-2 hover:text-primary">
                  <i className="fas fa-angle-right mr-2"></i> Bottled Water
                  Coolers
                </a>
                <a href="#" className="flex items-center mb-2 hover:text-primary">
                  <i className="fas fa-angle-right mr-2"></i> Contact us
                </a>
                <a href="#" className="flex items-center mb-2 hover:text-primary">
                  <i className="fas fa-angle-right mr-2"></i> Terms & Conditions
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-5">
              <div className="flex flex-col">
                <h4 className="text-white mb-4">Business Hours</h4>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Mon - Friday:</h6>
                  <p className="text-white mb-0">09.00 am to 07.00 pm</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Saturday:</h6>
                  <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Vacation:</h6>
                  <p className="text-white mb-0">All Sunday is our vacation</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-5">
              <div className="flex flex-col">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href="#" className="flex items-center mb-2">
                  <i className="fa fa-map-marker-alt mr-2"></i> 123 Street, New
                  York, USA
                </a>
                <a href="mailto:info@example.com" className="flex items-center mb-2">
                  <i className="fas fa-envelope mr-2"></i> info@example.com
                </a>
                <a href="mailto:info@example.com" className="flex items-center mb-2">
                  <i className="fas fa-envelope mr-2"></i> info@example.com
                </a>
                <a href="tel:+01234567890" className="flex items-center mb-2">
                  <i className="fas fa-phone mr-2"></i> +012 345 67890
                </a>
                <a href="tel:+01234567890" className="flex items-center mb-3">
                  <i className="fas fa-print mr-2"></i> +012 345 67890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid bg-[#001442] text-white py-4 border-t border-white/10">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <span>
                <a href="#" className="border-b border-white">
                  <i className="fas fa-copyright text-light mr-2"></i>Rishabhjain2010
                </a>, All rights reserved.
              </span>
            </div>
            <div className="text-center md:text-right">
              Re-Designed & Developed By{' '}
              <a className="border-b border-white" href="https://github.com/Rishabhjain2010">
                Rishabhjain2010
              </a>{' '}
              Using {' '}
              <a className="border-b border-white" href="#">
              ReactJS & TailwindCSS
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="fixed bottom-30 right-30 bg-secondary text-white rounded-full p-3 text-lg transition-transform transform hover:scale-110"
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Footer;
