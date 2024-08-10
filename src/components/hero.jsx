import React from 'react';
import { Carousel } from 'react-bootstrap'; 
const NavbarAndHero = () => {
  return (
    <div className="relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 bg-white shadow-md">
        <a href="" className="navbar-brand p-0">
          <h1 className="text-primary text-3xl font-bold">
            <i className="fas fa-hand-holding-water me-3"></i>Acuas
          </h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="index.html" className="nav-item nav-link active">Home</a>
            <a href="about.html" className="nav-item nav-link">About</a>
            <a href="service.html" className="nav-item nav-link">Service</a>
            <a href="blog.html" className="nav-item nav-link">Blog</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu">
                <a href="feature.html" className="dropdown-item">Our Feature</a>
                <a href="product.html" className="dropdown-item">Our Product</a>
                <a href="team.html" className="dropdown-item">Our Team</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
          <div className="hidden xl:flex me-3">
            <div className="flex flex-col pe-3 border-end border-primary">
              <span className="text-body">Get Free Delivery</span>
              <a href="tel:+4733378901" className="text-primary">Free: + 0123 456 7890</a>
            </div>
          </div>
          <button className="btn btn-primary btn-md-square d-flex flex-shrink-0 mb-3 mb-lg-0 rounded-full me-3" data-bs-toggle="modal" data-bs-target="#searchModal">
            <i className="fas fa-search"></i>
          </button>
          <a href="" className="btn btn-primary rounded-full py-2 px-4">Order Now</a>
        </div>
      </nav>

      <div className="relative overflow-hidden">
        <Carousel>
          <Carousel.Item>
            <img src="img/carousel-1.jpg" className="d-block w-full" alt="Image" />
            <Carousel.Caption className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 p-5 text-end text-white">
              <h4 className="text-primary text-lg font-bold mb-4">Importance life</h4>
              <h1 className="text-4xl font-bold mb-4">Always Want Safe Water For Healthy Life</h1>
              <p className="mb-5 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <div className="flex justify-end">
                <a className="btn btn-primary rounded-full py-3 px-5 me-2" href="#">Order Now</a>
                <a className="btn btn-secondary rounded-full py-3 px-5 ms-2" href="#">Free Estimate</a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="img/carousel-2.jpg" className="d-block w-full" alt="Image" />
            <Carousel.Caption className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 p-5 text-start text-white">
              <h4 className="text-primary text-lg font-bold mb-4">Importance life</h4>
              <h1 className="text-4xl font-bold mb-4">Always Want Safe Water For Healthy Life</h1>
              <p className="mb-5 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <div className="flex">
                <a className="btn btn-primary rounded-full py-3 px-5 me-2" href="#">Order Now</a>
                <a className="btn btn-secondary rounded-full py-3 px-5 ms-2" href="#">Free Estimate</a>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default NavbarAndHero;
