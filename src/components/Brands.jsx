import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FAQ from "./FAQ";

// Import brand images from assets
import brand1 from "../assets/brandsname/brand_1752678032122.webp";
import brand2 from "../assets/brandsname/brand_1752677858992.webp";
import brand3 from "../assets/brandsname/brand_1752677775029.webp";
import brand4 from "../assets/brandsname/brand_1752677757334.webp";
import brand5 from "../assets/brandsname/brand_1752677819427.webp";
import brand6 from "../assets/brandsname/brand_1752677901991.webp";
import brand7 from "../assets/brandsname/brand_1752678011866.webp";
import brand8 from "../assets/brandsname/brand_1752677847467.webp";
import brand9 from "../assets/brandsname/brand_1752677757166.webp";
import brand10 from "../assets/brandsname/brand_1752678083133.webp";
import brand11 from "../assets/brandsname/brand_1752677965676.webp";
import brand12 from "../assets/brandsname/brand_1752677802512.webp";
import brand13 from "../assets/brandsname/brand_1752677980578.webp";
import brand14 from "../assets/brandsname/brand_1752677889392.webp";
import brand15 from "../assets/brandsname/brand_1752677785617.webp";
import brand16 from "../assets/brandsname/brand_1752678053411.webp";
import brand17 from "../assets/brandsname/brand_1752677993374.webp";
import brand18 from "../assets/brandsname/brand_1752677917842 (1).webp";

function BrandLogo({ image, index }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="bg-white border border-gray rounded-lg sm:rounded-xl p-1 sm:p-2 md:p-4 flex items-center justify-center shadow-md h-[80px] sm:h-[100px] md:h-[120px] w-full">
        <span className="text-xs text-slate-400">Brand {index + 1}</span>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300 h-[80px] sm:h-[100px] md:h-[120px] w-full">
      <img
        src={image}
        alt={`Brand ${index + 1}`}
        className="w-[70%] h-[70%] object-contain"
        loading="lazy"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

const brandLogos = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
  brand17,
  brand18,
];

export default function Brands() {
  return (
    <div className="min-h-[80vh] bg-white">
      <Header />
      
      <main>
        {/* Banner Section */}
        <section className="relative w-full px-4 sm:px-6 md:px-8 py-4 sm:py-8 md:py-14 mt-3 sm:mt-4 md:mt-4">
          <div className="mx-auto max-w-7xl">
            <div className="relative w-full h-[300px] sm:h-[80px] md:h-[320px] lg:h-[220px] rounded-[20px] sm:rounded-[40px] overflow-hidden">
              {/* Background Image with Orange Sports Car */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://www.mkvluxury.com/_next/image?url=%2Fassets%2Fbrands-banner.png&w=3840&q=75)',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 md:px-8">
                <div className="text-center max-w-4xl">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] leading-tight">
                    Car Brands to Rent in Dubai
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Content Section */}
        <section className="px-3 sm:px-4 md:px-6 lg:px-8 pt-0 pb-6 sm:pb-8 md:pb-10 lg:pb-1 mb-6 sm:mb-8 md:mb-10 bg-white" >
          <div className="mx-auto max-w-7xl">
            {/* Brands Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
              {brandLogos.map((logo, index) => (
                <BrandLogo 
                  key={index} 
                  image={logo}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Your Dream Car Section */}
        <section className="bg-[#f2f2f2] pl-3 sm:pl-4 md:pl-6 lg:pl-8 pr-3 sm:pr-4 md:pr-6 lg:pr-8 py-8 sm:py-10 md:py-12">
          <div className="max-w-4xl text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-[#2c3e50] mb-3 sm:mb-4 text-left">
              Your Dream Car is Waiting
            </h2>
            <p className="text-sm sm:text-base md:text-base text-[#2c3e50] leading-relaxed text-left">
              Ready for an unforgettable drive? Look through our online showroom to see what cars are free. You can also call our friendly team for help choosing the best car for you. At MKV Luxury, we don't just rent cars; we provide an experience you will love. Start your luxury journey with us today.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ hideImage={true} />
      </main>

      <Footer />
    </div>
  );
}

