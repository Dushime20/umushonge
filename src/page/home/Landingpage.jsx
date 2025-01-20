import * as React from "react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCallback } from "react";

const LandingPage = () => {
  const [api, setApi] = useState();

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api, scrollNext]);

  const slides = [
    "/iktechimage/img16.jpg",
   
  ];

  return (
    <div className="relative w-full min-h-screen">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full h-full"
      >
        <CarouselContent className="h-[700px]">
          {slides.map((src, index) => (
            <CarouselItem key={index} className="relative h-full">
              <div className="relative w-full h-full">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6 md:px-12">
        <h1 className="text-5xl font-bold mb-4 text-white">Welcome to TechStore</h1>
        <p className="text-xl mb-6 text-white">
          Your one-stop shop for computers, parts, and repair services.
        </p>
        <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
