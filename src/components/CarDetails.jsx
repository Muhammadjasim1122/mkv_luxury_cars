import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CarImageGallery from "./CarImageGallery";
import CarDescription from "./CarDescription";
import CarSpecifications from "./CarSpecifications";
import CarPricing from "./CarPricing";
import CarFeatures from "./CarFeatures";
import CarDeliveryFees from "./CarDeliveryFees";
import CarBookingForm from "./CarBookingForm";
import vehicle1 from "../assets/vehicle_1753797302018_1.webp";
import vehicle2 from "../assets/vehicle_1753798409558_0.webp";
import vehicle3 from "../assets/vehicle_1753799029160_0.webp";
import vehicle4 from "../assets/vehicle_1753804231314_0.webp";
import vehicle5 from "../assets/vehicle_1753804778499_0.webp";
import vehicle6 from "../assets/vehicle_1754054135790_0.webp";
import vehicle7 from "../assets/vehicle_1755003031853_0.webp";
import vehicle8 from "../assets/vehicle_1755521426087_0.webp";
import vehicle9 from "../assets/vehicle_1755947868278_0.webp";
import vehicle10 from "../assets/vehicle_1757679276195_0.webp";
import vehicle11 from "../assets/vehicle_1757680323155_0.webp";

// Import brand logos
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

// Brand to logo mapping
const brandLogoMap = {
  "Rolls Royce": brand16,
  "Lamborghini": brand2,
  "Ferrari": brand3,
  "Porsche": brand4,
  "Audi": brand5,
  "BMW": brand6,
  "Mercedes-Benz": brand7,
  "Bentley": brand8,
  "McLaren": brand9,
  "Aston Martin": brand10,
  "Maserati": brand11,
  "Jaguar": brand12,
  "Land Rover": brand13,
  "Range Rover": brand14,
  "Lexus": brand15,
  "Infiniti": brand16,
  "Genesis": brand17,
  "Tesla": brand18,
};

// Helper function to get brand logo
export const getBrandLogo = (brandName) => {
  return brandLogoMap[brandName] || brand1; // Default to first logo if brand not found
};

// Car data - matches SuperCarsGrid
const allCars = [
  {
    title: "Rolls Royce Cullinan Black Badge",
    slug: "rolls-royce-cullinan-black-badge",
    categories: ["Luxury SUV", "Luxury Cars"],
    brand: "Rolls Royce",
    price: 7499,
    prevPrice: "7999",
    kmIncluded: "200",
    engine: "V12",
    seating: "4 - 5",
    mainImage: vehicle3,
    galleryImages: [
      "https://www.mkvluxury.com/_next/image?url=https%3A%2F%2Fserver.supercarexperiencedubai.com%2Fuploads%2Fvehicles%2Fvehicle_1753112090242_1.webp&w=1200&q=75",
      "https://www.mkvluxury.com/_next/image?url=https%3A%2F%2Fserver.supercarexperiencedubai.com%2Fuploads%2Fvehicles%2Fvehicle_1753112090243_2.webp&w=1200&q=75",
      "https://www.mkvluxury.com/_next/image?url=https%3A%2F%2Fserver.supercarexperiencedubai.com%2Fuploads%2Fvehicles%2Fvehicle_1753112090243_3.webp&w=1200&q=75",
      "https://www.mkvluxury.com/_next/image?url=https%3A%2F%2Fserver.supercarexperiencedubai.com%2Fuploads%2Fvehicles%2Fvehicle_1753112090244_4.webp&w=1200&q=75"
    ],
    description: "<h1>Rolls-Royce Cullinan Black Badge Rental in Dubai</h1><p>Unleash the ultimate blend of power and luxury with the&nbsp;Rolls-Royce Cullinan Black Badge Dubai's most exclusive SUV. Handcrafted with bespoke Black Badge enhancements, this masterpiece boasts a&nbsp;600+ horsepower twin-turbo V12 engine, signature blacked-out styling, and a cabin adorned with the finest leather and carbon fiber.</p><p>Whether cruising Sheikh Zayed Road or making a grand entrance at Palm Jumeirah, the Cullinan Black Badge delivers&nbsp;unmatched prestige and performance.</p><p>Why Rent With Us?</p><p>✔&nbsp;24/7 VIP Service&nbsp;– Doorstep delivery across Dubai</p><p>✔&nbsp;Impeccably Maintained Fleet&nbsp;– Always in showroom condition</p><p>✔&nbsp;Flexible Rental Packages&nbsp;– Daily, weekly, or monthly options</p><p>✔&nbsp;Full Insurance &amp; Support&nbsp;– Drive with complete confidence</p><p><a href=\"https://mkvluxury.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Luxury Rent a Car in Dubai</a>&nbsp;and experience automotive excellence. With limited availability of this ultra-exclusive model, we recommend securing your dates in advance.</p>",
    specifications: {
      year: "2024",
      color: "Gray",
      luggage: "3 Bags",
      doors: "5",
      acceleration: "5.6 Sec",
      seats: "5",
      cylinders: "12",
      engine: "6.75 ltr"
    },
    features: ["Tinted Windows", "Apple Carplay", "Cruise Control", "Premium Audio", "Parking Assist", "Parking Sensors", "Sunroof", "Reverse Camera", "Paddle Shift"],
    pricing: {
      daily: 7499,
      weekly: 44994,
      monthly: 157479,
      includedMileage: "1400 KM",
      additionalMileageCharge: "30 AED / KM"
    },
    deliveryFees: [
      { city: "Dubai", delivery: "75 AED", pickup: "75 AED" },
      { city: "Abu Dhabi", delivery: "400 AED", pickup: "400 AED" },
      { city: "Sharjah", delivery: "300 AED", pickup: "300 AED" },
      { city: "Ajman", delivery: "400 AED", pickup: "400 AED" },
      { city: "Ras Al Khaimah", delivery: "400 AED", pickup: "400 AED" },
      { city: "Fujairah", delivery: "500 AED", pickup: "500 AED" },
      { city: "Umm Al Quwain", delivery: "400 AED", pickup: "400 AED" }
    ]
  },
  {
    title: "Lamborghini Urus Performante",
    slug: "lamborghini-urus-performante",
    categories: ["Luxury SUV"],
    brand: "Lamborghini",
    price: 6599,
    prevPrice: "6999",
    kmIncluded: "180",
    engine: "V8",
    seating: "4 - 5",
    badge: "Best Seller of the Month",
    mainImage: vehicle2,
    galleryImages: [vehicle2, vehicle2, vehicle2, vehicle2],
    description: "<h1>Lamborghini Urus Performante Rental in Dubai</h1><p>Experience the ultimate fusion of supercar performance and SUV practicality with the&nbsp;Lamborghini Urus Performante. This high-performance SUV delivers&nbsp;666 horsepower from its twin-turbo V8 engine, achieving 0-100 km/h in just 3.3 seconds.</p><p>With its aggressive aerodynamics, carbon fiber components, and race-inspired suspension, the Urus Performante is the perfect choice for those who demand both luxury and extreme performance on Dubai's roads.</p><p>Why Rent With Us?</p><p>✔&nbsp;Premium Fleet&nbsp;– Latest models in pristine condition</p><p>✔&nbsp;Flexible Terms&nbsp;– Daily, weekly, or monthly rentals</p><p>✔&nbsp;24/7 Support&nbsp;– Always available for assistance</p><p>✔&nbsp;Full Coverage&nbsp;– Comprehensive insurance included</p><p><a href=\"https://mkvluxury.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Rent a Lamborghini in Dubai</a>&nbsp;and make every drive an unforgettable experience.</p>",
    specifications: {
      year: "2024",
      color: "Black",
      luggage: "2 Bags",
      doors: "5",
      acceleration: "3.3 Sec",
      seats: "5",
      cylinders: "8",
      engine: "4.0 ltr"
    },
    features: ["Sport Mode", "All-Wheel Drive", "Premium Sound System", "Navigation System", "Parking Sensors", "360 Camera", "Panoramic Roof", "Carbon Fiber Accents", "Racing Seats"],
    pricing: {
      daily: 6599,
      weekly: 39594,
      monthly: 138579,
      includedMileage: "1260 KM",
      additionalMileageCharge: "35 AED / KM"
    },
    deliveryFees: [
      { city: "Dubai", delivery: "75 AED", pickup: "75 AED" },
      { city: "Abu Dhabi", delivery: "400 AED", pickup: "400 AED" },
      { city: "Sharjah", delivery: "300 AED", pickup: "300 AED" },
      { city: "Ajman", delivery: "400 AED", pickup: "400 AED" },
      { city: "Ras Al Khaimah", delivery: "400 AED", pickup: "400 AED" },
      { city: "Fujairah", delivery: "500 AED", pickup: "500 AED" },
      { city: "Umm Al Quwain", delivery: "400 AED", pickup: "400 AED" }
    ]
  },
  {
    title: "Lamborghini Urus S",
    slug: "lamborghini-urus-s",
    categories: ["Coupe", "Supercars"],
    brand: "Ferrari",
    price: 5999,
    prevPrice: "6499",
    kmIncluded: "150",
    engine: "V8",
    seating: "0 - 2",
    badge: "Ferrari Collection",
    mainImage: vehicle1,
    galleryImages: [vehicle1, vehicle1, vehicle1, vehicle1],
    description: "<h1>Lamborghini Urus S Rental in Dubai</h1><p>Discover the perfect balance of elegance and power with the&nbsp;Lamborghini Urus S. This refined super SUV combines&nbsp;657 horsepower with luxurious comfort, making it ideal for both city driving and long-distance journeys.</p><p>With its sophisticated design, premium interior materials, and advanced technology, the Urus S offers an unparalleled driving experience in Dubai. Perfect for special occasions, business meetings, or simply enjoying the finest in automotive luxury.</p><p>Why Rent With Us?</p><p>✔&nbsp;Exclusive Collection&nbsp;– Handpicked luxury vehicles</p><p>✔&nbsp;Easy Booking Process&nbsp;– Simple and straightforward</p><p>✔&nbsp;Competitive Rates&nbsp;– Best prices in Dubai</p><p>✔&nbsp;Professional Service&nbsp;– Expert team at your service</p><p><a href=\"https://mkvluxury.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Luxury Car Rental Dubai</a>&nbsp;– Your gateway to premium automotive experiences.</p>",
    specifications: {
      year: "2024",
      color: "White",
      luggage: "2 Bags",
      doors: "5",
      acceleration: "3.5 Sec",
      seats: "5",
      cylinders: "8",
      engine: "4.0 ltr"
    },
    features: ["Adaptive Air Suspension", "Bang & Olufsen Sound", "Virtual Cockpit", "Night Vision", "Traffic Assist", "Lane Keep Assist", "Blind Spot Monitor", "Heated Seats", "Ventilated Seats"],
    pricing: {
      daily: 5999,
      weekly: 35994,
      monthly: 125979,
      includedMileage: "1050 KM",
      additionalMileageCharge: "32 AED / KM"
    },
    deliveryFees: [
      { city: "Dubai", delivery: "75 AED", pickup: "75 AED" },
      { city: "Abu Dhabi", delivery: "400 AED", pickup: "400 AED" },
      { city: "Sharjah", delivery: "300 AED", pickup: "300 AED" },
      { city: "Ajman", delivery: "400 AED", pickup: "400 AED" },
      { city: "Ras Al Khaimah", delivery: "400 AED", pickup: "400 AED" },
      { city: "Fujairah", delivery: "500 AED", pickup: "500 AED" },
      { city: "Umm Al Quwain", delivery: "400 AED", pickup: "400 AED" }
    ]
  },
  {
    title: "Ferrari Purosangue 2025",
    slug: "ferrari-purosangue-2025",
    categories: ["Supercars"],
    brand: "Ferrari",
    price: 6199,
    prevPrice: "6599",
    kmIncluded: "160",
    engine: "V8",
    seating: "0 - 2",
    badge: "Open Top Special",
    mainImage: vehicle4,
    galleryImages: [vehicle4, vehicle4, vehicle4, vehicle4],
    description: "<h1>Ferrari Purosangue 2025 Rental in Dubai</h1><p>Experience Ferrari's first-ever four-door, four-seater SUV with the&nbsp;Ferrari Purosangue 2025. This revolutionary vehicle combines&nbsp;715 horsepower from a naturally aspirated V12 engine with the practicality of an SUV, creating an unprecedented driving experience.</p><p>With its sleek design, cutting-edge technology, and signature Ferrari performance, the Purosangue redefines what a luxury SUV can be. Perfect for those who demand the best of both worlds – supercar performance and SUV versatility.</p><p>Why Rent With Us?</p><p>✔&nbsp;Latest Models&nbsp;– 2025 Ferrari Purosangue available</p><p>✔&nbsp;Premium Service&nbsp;– White-glove treatment</p><p>✔&nbsp;Flexible Packages&nbsp;– Tailored to your needs</p><p>✔&nbsp;Complete Peace of Mind&nbsp;– Full insurance and support</p><p><a href=\"https://mkvluxury.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Ferrari Rental Dubai</a>&nbsp;– Drive the prancing horse in style.</p>",
    specifications: {
      year: "2025",
      color: "Red",
      luggage: "2 Bags",
      doors: "4",
      acceleration: "3.3 Sec",
      seats: "4",
      cylinders: "12",
      engine: "6.5 ltr"
    },
    features: ["V12 Engine", "All-Wheel Drive", "Ferrari Infotainment", "Premium Leather", "Carbon Fiber", "Active Suspension", "Brembo Brakes", "Sport Exhaust", "Racing Seats"],
    pricing: {
      daily: 6199,
      weekly: 37194,
      monthly: 130179,
      includedMileage: "1120 KM",
      additionalMileageCharge: "33 AED / KM"
    },
    deliveryFees: [
      { city: "Dubai", delivery: "75 AED", pickup: "75 AED" },
      { city: "Abu Dhabi", delivery: "400 AED", pickup: "400 AED" },
      { city: "Sharjah", delivery: "300 AED", pickup: "300 AED" },
      { city: "Ajman", delivery: "400 AED", pickup: "400 AED" },
      { city: "Ras Al Khaimah", delivery: "400 AED", pickup: "400 AED" },
      { city: "Fujairah", delivery: "500 AED", pickup: "500 AED" },
      { city: "Umm Al Quwain", delivery: "400 AED", pickup: "400 AED" }
    ]
  },
  {
    title: "McLaren Artura Spider 2025",
    slug: "mclaren-artura-spider-2025",
    categories: ["Convertible Cars", "Supercars"],
    brand: "Porsche",
    price: 5499,
    prevPrice: "5999",
    kmIncluded: "140",
    engine: "V6",
    seating: "0 - 2",
    mainImage: vehicle5,
    galleryImages: [vehicle5, vehicle5, vehicle5, vehicle5],
    description: "<h1>McLaren Artura Spider 2025 Rental in Dubai</h1><p>Feel the wind in your hair with the&nbsp;McLaren Artura Spider 2025, a hybrid supercar that combines&nbsp;671 horsepower with eco-friendly technology. This convertible masterpiece features a retractable hardtop and McLaren's advanced hybrid powertrain.</p><p>With its lightweight carbon fiber construction, lightning-fast acceleration, and open-top driving experience, the Artura Spider is perfect for enjoying Dubai's beautiful weather and stunning skyline views.</p><p>Why Rent With Us?</p><p>✔&nbsp;Hybrid Technology&nbsp;– Performance meets efficiency</p><p>✔&nbsp;Convertible Experience&nbsp;– Open-top luxury</p><p>✔&nbsp;Modern Fleet&nbsp;– Latest 2025 models</p><p>✔&nbsp;Expert Support&nbsp;– Knowledgeable team</p><p><a href=\"https://mkvluxury.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Supercar Rental Dubai</a>&nbsp;– Experience McLaren engineering excellence.</p>",
    specifications: {
      year: "2025",
      color: "Orange",
      luggage: "1 Bag",
      doors: "2",
      acceleration: "3.0 Sec",
      seats: "2",
      cylinders: "6",
      engine: "3.0 ltr"
    },
    features: ["Retractable Hardtop", "Hybrid Powertrain", "Carbon Fiber Body", "Active Aero", "Racing Seats", "Digital Dashboard", "Premium Audio", "Sport Mode", "Launch Control"],
    pricing: {
      daily: 5499,
      weekly: 32994,
      monthly: 115479,
      includedMileage: "980 KM",
      additionalMileageCharge: "30 AED / KM"
    },
    deliveryFees: [
      { city: "Dubai", delivery: "75 AED", pickup: "75 AED" },
      { city: "Abu Dhabi", delivery: "400 AED", pickup: "400 AED" },
      { city: "Sharjah", delivery: "300 AED", pickup: "300 AED" },
      { city: "Ajman", delivery: "400 AED", pickup: "400 AED" },
      { city: "Ras Al Khaimah", delivery: "400 AED", pickup: "400 AED" },
      { city: "Fujairah", delivery: "500 AED", pickup: "500 AED" },
      { city: "Umm Al Quwain", delivery: "400 AED", pickup: "400 AED" }
    ]
  },
  {
    title: "Ferrari 296 GTB 2024",
    slug: "ferrari-296-gtb-2024",
    categories: ["Supercars"],
    brand: "Audi",
    price: 4999,
    prevPrice: "5499",
    kmIncluded: "130",
    engine: "V10",
    seating: "0 - 2",
    mainImage: vehicle6,
    galleryImages: [vehicle6, vehicle6, vehicle6, vehicle6],
    description: "<h1>Ferrari 296 GTB 2024 Rental in Dubai</h1><p>Experience the future of Ferrari with the&nbsp;Ferrari 296 GTB 2024, a plug-in hybrid supercar that delivers&nbsp;818 horsepower from its V6 engine and electric motor combination. This revolutionary model represents Ferrari's commitment to sustainable performance.</p><p>With its stunning design, cutting-edge hybrid technology, and track-ready performance, the 296 GTB offers an exhilarating driving experience while maintaining environmental consciousness.</p><p>Why Rent With Us?</p><p>✔&nbsp;Hybrid Innovation&nbsp;– Latest Ferrari technology</p><p>✔&nbsp;Track Performance&nbsp;– Race-ready capabilities</p><p>✔&nbsp;Luxury Experience&nbsp;– Premium comfort and style</p><p>✔&nbsp;Complete Service&nbsp;– Full support included</p><p><a href=\"https://mkvluxury.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Ferrari 296 GTB Rental</a>&nbsp;– Drive the future of supercars.</p>",
    specifications: {
      year: "2024",
      color: "Yellow",
      luggage: "1 Bag",
      doors: "2",
      acceleration: "2.9 Sec",
      seats: "2",
      cylinders: "6",
      engine: "3.0 ltr"
    },
    features: ["Hybrid System", "Electric Mode", "Ferrari E-Diff", "F1-Trac", "Side Slip Control", "Premium Leather", "Carbon Fiber", "Racing Wheels", "Sport Exhaust"],
    pricing: {
      daily: 4999,
      weekly: 29994,
      monthly: 104979,
      includedMileage: "910 KM",
      additionalMileageCharge: "28 AED / KM"
    },
    deliveryFees: [
      { city: "Dubai", delivery: "75 AED", pickup: "75 AED" },
      { city: "Abu Dhabi", delivery: "400 AED", pickup: "400 AED" },
      { city: "Sharjah", delivery: "300 AED", pickup: "300 AED" },
      { city: "Ajman", delivery: "400 AED", pickup: "400 AED" },
      { city: "Ras Al Khaimah", delivery: "400 AED", pickup: "400 AED" },
      { city: "Fujairah", delivery: "500 AED", pickup: "500 AED" },
      { city: "Umm Al Quwain", delivery: "400 AED", pickup: "400 AED" }
    ]
  },
  {
    title: "Ferrari F8 Spider",
    slug: "ferrari-f8-spider",
    categories: ["Supercars", "Convertible Cars"],
    brand: "BMW",
    price: 4499,
    prevPrice: "4999",
    kmIncluded: "120",
    engine: "V8",
    seating: "4 - 5",
    mainImage: vehicle7,
    galleryImages: [vehicle7, vehicle7, vehicle7, vehicle7],
    description: "<h1>Ferrari F8 Spider Rental in Dubai</h1><p>Experience the thrill of open-top driving with the&nbsp;Ferrari F8 Spider, featuring a&nbsp;710 horsepower twin-turbo V8 engine and a retractable hardtop. This convertible supercar combines breathtaking performance with the freedom of open-air motoring.</p><p>Perfect for Dubai's perfect weather, the F8 Spider lets you enjoy the city's stunning skyline and beautiful coastline while experiencing the raw power and precision of a true Ferrari supercar.</p><p>Why Rent With Us?</p><p>✔&nbsp;Convertible Experience&nbsp;– Open-top luxury</p><p>✔&nbsp;Supercar Performance&nbsp;– Track-ready power</p><p>✔&nbsp;Premium Fleet&nbsp;– Well-maintained vehicles</p><p>✔&nbsp;Flexible Rentals&nbsp;– Daily to monthly options</p><p><a href=\"https://mkvluxury.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Ferrari F8 Spider Rental</a>&nbsp;– Convertible supercar excellence.</p>",
    specifications: {
      year: "2023",
      color: "Blue",
      luggage: "1 Bag",
      doors: "2",
      acceleration: "2.9 Sec",
      seats: "2",
      cylinders: "8",
      engine: "3.9 ltr"
    },
    features: ["Retractable Hardtop", "Twin-Turbo V8", "Ferrari Dynamic Enhancer", "Premium Leather", "Carbon Fiber", "Racing Wheels", "Sport Exhaust", "Launch Control", "Track Mode"],
    pricing: {
      daily: 4499,
      weekly: 26994,
      monthly: 94479,
      includedMileage: "840 KM",
      additionalMileageCharge: "27 AED / KM"
    },
    deliveryFees: [
      { city: "Dubai", delivery: "75 AED", pickup: "75 AED" },
      { city: "Abu Dhabi", delivery: "400 AED", pickup: "400 AED" },
      { city: "Sharjah", delivery: "300 AED", pickup: "300 AED" },
      { city: "Ajman", delivery: "400 AED", pickup: "400 AED" },
      { city: "Ras Al Khaimah", delivery: "400 AED", pickup: "400 AED" },
      { city: "Fujairah", delivery: "500 AED", pickup: "500 AED" },
      { city: "Umm Al Quwain", delivery: "400 AED", pickup: "400 AED" }
    ]
  },
  {
    title: "Rolls Royce Cullinan",
    slug: "rolls-royce-cullinan",
    categories: ["Luxury Cars"],
    brand: "Mercedes-Benz",
    price: 4799,
    prevPrice: "5299",
    kmIncluded: "125",
    engine: "V8",
    seating: "0 - 2",
    mainImage: vehicle8,
    galleryImages: [vehicle8, vehicle8, vehicle8, vehicle8],
    description: "<h1>Rolls-Royce Cullinan Rental in Dubai</h1><p>Experience the pinnacle of luxury with the&nbsp;Rolls-Royce Cullinan, the world's most luxurious SUV. Powered by a&nbsp;563 horsepower V12 engine, this masterpiece combines uncompromising luxury with exceptional capability.</p><p>With its handcrafted interior, whisper-quiet cabin, and legendary Rolls-Royce attention to detail, the Cullinan offers an unparalleled experience for those who demand nothing but the absolute best.</p><p>Why Rent With Us?</p><p>✔&nbsp;Ultimate Luxury&nbsp;– World-class comfort</p><p>✔&nbsp;Prestige Experience&nbsp;– Make a statement</p><p>✔&nbsp;VIP Service&nbsp;– Premium treatment</p><p>✔&nbsp;Complete Package&nbsp;– All-inclusive service</p><p><a href=\"https://mkvluxury.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Rolls-Royce Rental Dubai</a>&nbsp;– The ultimate in automotive luxury.</p>",
    specifications: {
      year: "2024",
      color: "Silver",
      luggage: "4 Bags",
      doors: "5",
      acceleration: "5.2 Sec",
      seats: "5",
      cylinders: "12",
      engine: "6.75 ltr"
    },
    features: ["V12 Engine", "Magic Carpet Ride", "Starlight Headliner", "Premium Leather", "Wood Veneers", "Chauffeur Package", "Entertainment System", "Climate Control", "Panoramic Roof"],
    pricing: {
      daily: 4799,
      weekly: 28794,
      monthly: 100779,
      includedMileage: "875 KM",
      additionalMileageCharge: "29 AED / KM"
    },
    deliveryFees: [
      { city: "Dubai", delivery: "75 AED", pickup: "75 AED" },
      { city: "Abu Dhabi", delivery: "400 AED", pickup: "400 AED" },
      { city: "Sharjah", delivery: "300 AED", pickup: "300 AED" },
      { city: "Ajman", delivery: "400 AED", pickup: "400 AED" },
      { city: "Ras Al Khaimah", delivery: "400 AED", pickup: "400 AED" },
      { city: "Fujairah", delivery: "500 AED", pickup: "500 AED" },
      { city: "Umm Al Quwain", delivery: "400 AED", pickup: "400 AED" }
    ]
  },
  {
    title: "Bentley Bentayga Mansory",
    slug: "bentley-bentayga-mansory",
    categories: ["Luxury Cars", "Luxury SUV"],
    brand: "Mercedes-Benz",
    price: 4799,
    prevPrice: "5299",
    kmIncluded: "125",
    engine: "V8",
    seating: "0 - 2",
    mainImage: vehicle9,
    galleryImages: [vehicle9, vehicle9, vehicle9, vehicle9],
    description: "<h1>Bentley Bentayga Mansory Rental in Dubai</h1><p>Discover the ultimate in bespoke luxury with the&nbsp;Bentley Bentayga Mansory, a custom-tuned masterpiece that elevates the already exceptional Bentayga to new heights. With enhanced performance and exclusive Mansory styling, this is luxury redefined.</p><p>Featuring carbon fiber body enhancements, upgraded power output, and bespoke interior appointments, the Mansory Bentayga is for those who demand exclusivity and exceptional performance in equal measure.</p><p>Why Rent With Us?</p><p>✔&nbsp;Bespoke Luxury&nbsp;– Exclusive Mansory edition</p><p>✔&nbsp;Enhanced Performance&nbsp;– Upgraded power and handling</p><p>✔&nbsp;Unique Styling&nbsp;– Carbon fiber enhancements</p><p>✔&nbsp;Premium Experience&nbsp;– Unmatched luxury</p><p><a href=\"https://mkvluxury.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Bentley Rental Dubai</a>&nbsp;– Experience bespoke automotive excellence.</p>",
    specifications: {
      year: "2024",
      color: "Black",
      luggage: "3 Bags",
      doors: "5",
      acceleration: "4.5 Sec",
      seats: "5",
      cylinders: "8",
      engine: "4.0 ltr"
    },
    features: ["Mansory Tuning", "Carbon Fiber Body", "Enhanced Power", "Premium Leather", "Wood Trim", "All-Wheel Drive", "Air Suspension", "Premium Audio", "Panoramic Roof"],
    pricing: {
      daily: 4799,
      weekly: 28794,
      monthly: 100779,
      includedMileage: "875 KM",
      additionalMileageCharge: "29 AED / KM"
    },
    deliveryFees: [
      { city: "Dubai", delivery: "75 AED", pickup: "75 AED" },
      { city: "Abu Dhabi", delivery: "400 AED", pickup: "400 AED" },
      { city: "Sharjah", delivery: "300 AED", pickup: "300 AED" },
      { city: "Ajman", delivery: "400 AED", pickup: "400 AED" },
      { city: "Ras Al Khaimah", delivery: "400 AED", pickup: "400 AED" },
      { city: "Fujairah", delivery: "500 AED", pickup: "500 AED" },
      { city: "Umm Al Quwain", delivery: "400 AED", pickup: "400 AED" }
    ]
  },
  {
    title: "Ferrari F8 Tributo",
    slug: "ferrari-f8-tributo",
    categories: ["Supercars"],
    brand: "Mercedes-Benz",
    price: 4799,
    prevPrice: "5299",
    kmIncluded: "125",
    engine: "V8",
    seating: "0 - 2",
    mainImage: vehicle10,
    galleryImages: [vehicle10, vehicle10, vehicle10, vehicle10],
    description: "<h1>Ferrari F8 Tributo Rental in Dubai</h1><p>Experience the ultimate tribute to Ferrari's V8 heritage with the&nbsp;Ferrari F8 Tributo, delivering&nbsp;710 horsepower from its award-winning twin-turbo V8 engine. This track-focused supercar represents the pinnacle of mid-engine Ferrari performance.</p><p>With its aggressive aerodynamics, lightweight construction, and race-derived technology, the F8 Tributo offers an uncompromising driving experience that honors Ferrari's legendary V8 tradition.</p><p>Why Rent With Us?</p><p>✔&nbsp;Track Performance&nbsp;– Race-ready capabilities</p><p>✔&nbsp;V8 Heritage&nbsp;– Award-winning engine</p><p>✔&nbsp;Advanced Aero&nbsp;– Optimized for performance</p><p>✔&nbsp;Premium Service&nbsp;– Complete support</p><p><a href=\"https://mkvluxury.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Ferrari F8 Tributo Rental</a>&nbsp;– Pure Ferrari performance.</p>",
    specifications: {
      year: "2023",
      color: "Red",
      luggage: "1 Bag",
      doors: "2",
      acceleration: "2.9 Sec",
      seats: "2",
      cylinders: "8",
      engine: "3.9 ltr"
    },
    features: ["Twin-Turbo V8", "Ferrari Dynamic Enhancer", "Side Slip Control", "Premium Leather", "Carbon Fiber", "Racing Wheels", "Sport Exhaust", "Launch Control", "Track Mode"],
    pricing: {
      daily: 4799,
      weekly: 28794,
      monthly: 100779,
      includedMileage: "875 KM",
      additionalMileageCharge: "29 AED / KM"
    },
    deliveryFees: [
      { city: "Dubai", delivery: "75 AED", pickup: "75 AED" },
      { city: "Abu Dhabi", delivery: "400 AED", pickup: "400 AED" },
      { city: "Sharjah", delivery: "300 AED", pickup: "300 AED" },
      { city: "Ajman", delivery: "400 AED", pickup: "400 AED" },
      { city: "Ras Al Khaimah", delivery: "400 AED", pickup: "400 AED" },
      { city: "Fujairah", delivery: "500 AED", pickup: "500 AED" },
      { city: "Umm Al Quwain", delivery: "400 AED", pickup: "400 AED" }
    ]
  },
  {
    title: "Ferrari F8 Spider Yellow",
    slug: "ferrari-f8-spider-yellow",
    categories: ["Supercars", "Convertible Cars"],
    brand: "Mercedes-Benz",
    price: 4799,
    prevPrice: "5299",
    kmIncluded: "125",
    engine: "V8",
    seating: "0 - 2",
    mainImage: vehicle11,
    galleryImages: [vehicle11, vehicle11, vehicle11, vehicle11],
    description: "<h1>Ferrari F8 Spider Yellow Rental in Dubai</h1><p>Make a bold statement with the&nbsp;Ferrari F8 Spider Yellow, a stunning convertible supercar that combines&nbsp;710 horsepower performance with eye-catching yellow styling. This vibrant edition of the F8 Spider is perfect for those who want to stand out.</p><p>With its retractable hardtop, twin-turbo V8 engine, and striking yellow exterior, this Ferrari is guaranteed to turn heads as you cruise through Dubai's most prestigious locations.</p><p>Why Rent With Us?</p><p>✔&nbsp;Bold Styling&nbsp;– Eye-catching yellow finish</p><p>✔&nbsp;Convertible Luxury&nbsp;– Open-top experience</p><p>✔&nbsp;Supercar Performance&nbsp;– Track-ready power</p><p>✔&nbsp;Premium Fleet&nbsp;– Well-maintained vehicles</p><p><a href=\"https://mkvluxury.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Ferrari F8 Spider Yellow Rental</a>&nbsp;– Stand out in style.</p>",
    specifications: {
      year: "2023",
      color: "Yellow",
      luggage: "1 Bag",
      doors: "2",
      acceleration: "2.9 Sec",
      seats: "2",
      cylinders: "8",
      engine: "3.9 ltr"
    },
    features: ["Retractable Hardtop", "Twin-Turbo V8", "Yellow Exterior", "Premium Leather", "Carbon Fiber", "Racing Wheels", "Sport Exhaust", "Launch Control", "Track Mode"],
    pricing: {
      daily: 4799,
      weekly: 28794,
      monthly: 100779,
      includedMileage: "875 KM",
      additionalMileageCharge: "29 AED / KM"
    },
    deliveryFees: [
      { city: "Dubai", delivery: "75 AED", pickup: "75 AED" },
      { city: "Abu Dhabi", delivery: "400 AED", pickup: "400 AED" },
      { city: "Sharjah", delivery: "300 AED", pickup: "300 AED" },
      { city: "Ajman", delivery: "400 AED", pickup: "400 AED" },
      { city: "Ras Al Khaimah", delivery: "400 AED", pickup: "400 AED" },
      { city: "Fujairah", delivery: "500 AED", pickup: "500 AED" },
      { city: "Umm Al Quwain", delivery: "400 AED", pickup: "400 AED" }
    ]
  },
];

// Helper function to get car by slug
const getCarBySlug = (slug) => {
  return allCars.find(car => car.slug === slug);
};

// Helper function to convert title to slug
export const titleToSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

export default function CarDetails() {
  const { carName } = useParams();
  const car = getCarBySlug(carName);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combine main image and gallery images
  const allImages = car ? [car.mainImage, ...car.galleryImages] : [];

  const openGallery = () => {
    setIsGalleryOpen(true);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  if (!car) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#2c3e50] mb-4">Car Not Found</h1>
            <p className="text-lg text-[#475569] mb-8">The car you're looking for doesn't exist.</p>
            <Link to="/our-fleet" className="text-[#df8c0c] font-semibold hover:underline">
              ← Back to Fleet
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          {/* Header and Image Gallery Section */}
          <CarImageGallery 
            car={car} 
            onViewMore={openGallery}
            isGalleryOpen={isGalleryOpen}
            allImages={allImages}
            currentImageIndex={currentImageIndex}
            onClose={closeGallery}
            onNext={nextImage}
            onPrev={prevImage}
            onKeyDown={handleKeyDown}
          />

          {/* Description and Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
            {/* Left Column - Description and Details */}
            <div className="w-full order-last flex flex-col gap-5">
              <CarDescription car={car} />
              <CarSpecifications car={car} />
              <CarPricing car={car} />
              <CarFeatures car={car} />
              <CarDeliveryFees car={car} />
            </div>

            {/* Right Column - Booking Form */}
            <CarBookingForm car={car} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

