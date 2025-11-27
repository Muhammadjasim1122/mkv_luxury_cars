import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import brand images from assets/brandsname folder
import brand1 from "../assets/brandsname/mercedez.webp";
import brand2 from "../assets/brandsname/lamborghini.webp";
import brand3 from "../assets/brandsname/ferrai.webp";
import brand4 from "../assets/brandsname/porsche.webp";
import brand5 from "../assets/brandsname/audi.webp";
import brand6 from "../assets/brandsname/bmw.webp";
import brand7 from "../assets/brandsname/bentlay.webp";
import brand8 from "../assets/brandsname/rollsroyce.webp";
import brand9 from "../assets/brandsname/brand_1752677858992.webp";
import brand10 from "../assets/brandsname/brand_1752677847467.webp";
import brand11 from "../assets/brandsname/brand_1752677819427.webp";
import brand12 from "../assets/brandsname/brand_1752677980578.webp";
import brand13 from "../assets/brandsname/kandrover .webp";
import brand14 from "../assets/brandsname/lotus.webp";
import brand15 from "../assets/brandsname/ford.webp";
import brand16 from "../assets/brandsname/gmc.webp";
import brand17 from "../assets/brandsname/jetour.webp";
import brand18 from "../assets/brandsname/mexedez G.webp";

const brandImages = [
  brand1, brand2, brand3, brand4, brand5, brand6,
  brand7, brand8, brand9, brand10, brand11, brand12,
  brand13, brand14, brand15, brand16, brand17, brand18
];

const brands = [
  { name: "Mercedes-Benz" },
  { name: "BMW" },
  { name: "Audi" },
  { name: "Porsche" },
  { name: "Ferrari" },
  { name: "Lamborghini" },
  { name: "Bentley" },
  { name: "Rolls-Royce" },
  { name: "Jaguar" },
  { name: "Land Rover" },
  { name: "Volkswagen" },
  { name: "Toyota" },
  { name: "Honda" },
  { name: "Nissan" },
  { name: "Mazda" },
  { name: "Hyundai" },
  { name: "Kia" },
  { name: "Lexus" },
  { name: "Tesla" },
  { name: "Volvo" }
];

export default function BrandsCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ 
        left: -400, 
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ 
        left: 400, 
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative px-6 py-4 bg-[#ededed]">
      <h2 className="mb-3 text-center text-3xl font-bold text-[#0f172a]">Popular Brands</h2>

      <div className="relative mx-auto max-w-4xl">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-[-50px] top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-200 p-2 shadow-sm hover:bg-gray-300 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-[-50px] top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-200 p-2 shadow-sm hover:bg-gray-300 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-0 overflow-x-auto scroll-smooth px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 items-center justify-center w-24 h-24 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-transparent"
            >
              <img
                src={brandImages[index % brandImages.length]}
                alt={brand.name}
                className="object-contain h-full w-full"
                title={brand.name}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}