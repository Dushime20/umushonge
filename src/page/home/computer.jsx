import React, { useState, useEffect, useCallback } from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Computers = () => {
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
      name: "Gaming Laptop Pro",
      price: 1299.99,
      rating: 4.5,
      image: "/iktechimage/img1.jpg",
      category: "Laptops"
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 129.99,
      rating: 4.8,
      image: "/iktechimage/img5.jpg",
      category: "Accessories"
    },
    {
      id: 3,
      name: "4K Gaming Monitor",
      price: 499.99,
      rating: 4.7,
      image: "/iktechimage/img4.jpg",
      category: "Monitors"
    },
    {
      id: 4,
      name: "RGB Mouse",
      price: 79.99,
      rating: 4.6,
      image: "/iktechimage/img3.jpg",
      category: "Accessories"
    },
    {
        id: 4,
        name: "RGB Mouse",
        price: 79.99,
        rating: 4.6,
        image: "/iktechimage/img2.jpg",
        category: "Accessories"
      },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-yellow-600">Shop</h1>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">
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
              <div className=" rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-3xl"
                  />
                  {/* <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button> */}
                </div>

                <div className="p-4">
                  <span className="text-sm text-blue-600 font-medium">{product.category}</span>
                  <h2 className="text-lg font-semibold text-gray-800 mt-1">{product.name}</h2>
                  
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
                      ${product.price}
                    </span>
                    <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
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

export default Computers;