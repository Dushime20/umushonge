import React, { useState, useEffect, useCallback } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Accessories = () => {
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
    }, 3000); // Changed to 3 seconds for better user experience

    return () => clearInterval(interval);
  }, [api, scrollNext]);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Agahebuzo",
      quantity: 1,
      price: 2500,
      rating: 4.5,
      
      image: "/image/img1.jpg",
      category: "Umushonge Flour"
    },
    {
      id: 2,
      name: "Urugwiro",
      quantity: 2,
      price: 4000,
      rating: 4.8,
     
      image: "/image/img2.jpg",
      category: "Umushonge Flour"
    },
    {
      id: 3,
      name: "Ibyishimo",
      quantity: 3,
      price: 6000,
      rating: 4.7,
      image: "/image/img3.jpg",
      category: "Umushonge Flour"
    },
    {
      id: 4,
      name: "Umunezero",
      quantity: 5,
      price: 10000,
      rating: 4.6,
      image: "/image/img4.jpg",
      category: "Umushonge Flour"
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100  mt-3">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-600">Umushonge product</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-green-600">
            View All
          </button>
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
              <div className=" rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="p-4">
                  <span className="text-sm text-green-800 font-medium">{product.category}</span>
                  <h2 className="text-lg font-semibold text-gray-800 mt-1">{product.name}</h2>
                   <h2 className="text-lg font-semibold text-gray-800 mt-1">{product.quantity} Kg</h2>
                  
                  <div className="flex items-center mt-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-300">|</span>
                    <span className="text-sm text-gray-600">In Stock</span>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-gray-800">
                      {product.price} Rwf
                    </span>
                    <button className="p-2 rounded-full bg-green-600 text-white hover:bg-green-600 transition-colors duration-300">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Accessories;