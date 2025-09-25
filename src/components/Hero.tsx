import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const sliderImages = [
  '/images/slider1.png',
  '/images/slider2.png',
  '/images/slider3.png',
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    handleSelect(); // Set initial value

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="absolute inset-0 w-full h-full"
      >
        <CarouselContent>
          {sliderImages.map((src, index) => (
            <CarouselItem key={index} className="relative w-full h-full">
              <div className="w-full h-full overflow-hidden">
                <img
                  src={src}
                  alt={`Slider Image ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-500 ${current === index ? 'animate-kenburns' : 'scale-100'}`}
                />
              </div>
              <div className="absolute inset-0 bg-[#d91e98] opacity-50"></div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Empowering the next generation, one footprint at a time
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            Footprints of Hope empowers Kenya's girls, youth, and women with resources, education, and support for resilient futures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#d91e98] hover:bg-[#b81b82] text-white text-lg px-8 py-4 transition-transform transform hover:scale-105">
              See Our Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white hover:text-primary text-lg px-8 py-4 transition-all duration-300 ease-in-out"
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;