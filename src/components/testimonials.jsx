import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.",
    image: "img/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.",
    image: "img/testimonial-2.jpg",
    name: "Client Name",
    profession: "Profession",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.",
    image: "img/testimonial-3.jpg",
    name: "Client Name",
    profession: "Profession",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.",
    image: "img/testimonial-3.jpg",
    name: "Client Name",
    profession: "Profession",
  },
];

const Testimonial = () => {
  return (
    <div className="container-fluid bg-gray-100 pb-20">
      <div className="container mx-auto pb-20">
        <div className="text-center mx-auto pb-10 max-w-4xl">
          <h4 className="text-uppercase text-blue-600">Testimonials</h4>
          <h1 className="text-4xl font-bold mb-6">Our clients reviews.</h1>
        </div>
        <div>
        {/* <OwlCarousel className="owl-theme testimonial-carousel" items={1} autoplay loop nav dots> */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item text-center p-4">
              <p className="mb-4">{testimonial.text}</p>
              <div className="flex justify-center mb-4">
                <img src={testimonial.image} className="w-24 h-24 border-4 border-blue-600 rounded-full" alt={`Testimonial ${index + 1}`} />
              </div>
              <div>
                <h4 className="text-dark text-xl font-semibold mb-1">{testimonial.name}</h4>
                <p className="text-gray-600 mb-3">{testimonial.profession}</p>
                <div className="flex justify-center text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        {/* </OwlCarousel> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
