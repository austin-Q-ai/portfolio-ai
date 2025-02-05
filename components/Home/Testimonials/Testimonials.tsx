import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialsData from "@/data/testimonials.json";
import NextImage from "next/image";

const Testimonials = (): JSX.Element => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "5px",
        },
      },
    ],
  };

  return (
    <div className="my-16" id="testimonial">
      <h2 className="mb-8 text-3xl font-bold">Testimonials</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="slider-card flex py-1">
              <div className="m-auto min-h-[250px] w-[100%] rounded-2xl rounded-xl border-[1px] border-tertiary bg-secondary/50 p-4  duration-200 hover:border-accent sm:w-[95%] md:hover:scale-[1.01] lg:p-6">
                <div className="flex flex-col sm:flex-row">
                  <div className="min-w-[100px]">
                    <NextImage
                      width={80}
                      height={80}
                      className="mb-3 h-20  w-20 rounded-full md:mb-0"
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="mb:items-center flex flex-col gap-x-4 md:flex-col">
                    <div className="text-lg font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="${hind.className} font-[300] font-medium text-[#48AEDD]">
                      {testimonial.position}
                    </div>
                    <p className="font-recoletablack mb-6 mt-3 min-h-[70px] text-[16px] font-[250]">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
