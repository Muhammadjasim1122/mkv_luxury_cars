import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SuperCarsGrid from "./SuperCarsGrid";

// Helper function to convert slug to brand name
const slugToBrandName = (slug) => {
  const brandMap = {
    "rolls-royce": "Rolls Royce",
    "lamborghini": "Lamborghini",
    "ferrari": "Ferrari",
    "mclaren": "McLaren",
    "porsche": "Porsche",
    "audi": "Audi",
    "bmw": "BMW",
    "mercedes-benz": "Mercedes-Benz",
    "bentley": "Bentley",
    "aston-martin": "Aston Martin",
    "maserati": "Maserati",
    "jaguar": "Jaguar",
    "land-rover": "Land Rover",
    "range-rover": "Range Rover",
    "lexus": "Lexus",
    "infiniti": "Infiniti",
    "genesis": "Genesis",
    "tesla": "Tesla",
  };
  return brandMap[slug.toLowerCase()] || slug;
};

// Import baseCars from SuperCarsGrid (we'll export it)
// For now, we'll duplicate the data structure
import vehicle1 from "../assets/Bentley Bentayga Mansory.webp";
import vehicle2 from "../assets/Ferrari F8 Tributo.webp";
import vehicle3 from "../assets/Ferrari F8 Spider.webp";
import vehicle4 from "../assets/Ferrari Purosangue 2025.webp";
import vehicle5 from "../assets/Ferrari 296 GTB 2024.webp";
import vehicle6 from "../assets/Ferrari F8 Spider Yellow.webp";
import vehicle7 from "../assets/Lamborghini Urus Mansory.webp";
import vehicle8 from "../assets/Lamborghini UrusS.webp";
import vehicle9 from "../assets/Rolls Royce Cullinan Black Badge.webp";
import vehicle10 from "../assets/Rolls Royce Cullinan.webp";
import vehicle11 from "../assets/McLaren Artura Spider 2025.webp";

const baseCars = [
  {
    title: "Rolls Royce Cullinan Black Badge",
    categories: ["Luxury SUV", "Luxury Cars"],
    brand: "Rolls Royce",
    price: 7499,
    prevPrice: "7999",
    kmIncluded: "200",
    engine: "V12",
    seating: "4 - 5",
    image: vehicle9,
  },
  {
    title: "Lamborghini Urus Performante",
    categories: ["Luxury SUV"],
    brand: "Lamborghini",
    price: 6599,
    prevPrice: "6999",
    kmIncluded: "180",
    engine: "V8",
    seating: "4 - 5",
    badge: "Best Seller of the Month",
    image: vehicle7,
  },
  {
    title: "Lamborghini Urus S",
    categories: ["Coupe", "Supercars"],
    brand: "Lamborghini",
    price: 5999,
    prevPrice: "6499",
    kmIncluded: "150",
    engine: "V8",
    seating: "0 - 2",
    image: vehicle8,
  },
  {
    title: "Ferrari Purosangue 2025",
    categories: ["Supercars"],
    brand: "Ferrari",
    price: 6199,
    prevPrice: "6599",
    kmIncluded: "160",
    engine: "V8",
    seating: "0 - 2",
    badge: "Open Top Special",
    image: vehicle4,
  },
  {
    title: "Ferrari 296 GTB 2024",
    categories: ["Supercars"],
    brand: "Ferrari",
    price: 5499,
    prevPrice: "5999",
    kmIncluded: "140",
    engine: "V10",
    seating: "0 - 2",
    image: vehicle5,
  },
  {
    title: "Ferrari F8 Spider",
    categories: ["Supercars", "Convertible Cars"],
    brand: "Ferrari",
    price: 4999,
    prevPrice: "5499",
    kmIncluded: "130",
    engine: "V8",
    seating: "4 - 5",
    image: vehicle3,
  },
  {
    title: "Ferrari F8 Tributo",
    categories: ["Supercars"],
    brand: "Ferrari",
    price: 4499,
    prevPrice: "4999",
    kmIncluded: "120",
    engine: "V8",
    seating: "0 - 2",
    image: vehicle2,
  },
  {
    title: "Ferrari F8 Spider Yellow",
    categories: ["Supercars", "Convertible Cars"],
    brand: "Ferrari",
    price: 4799,
    prevPrice: "5299",
    kmIncluded: "125",
    engine: "V8",
    seating: "0 - 2",
    image: vehicle6,
  },
  {
    title: "Rolls Royce Cullinan",
    categories: ["Luxury Cars"],
    brand: "Rolls Royce",
    price: 4799,
    prevPrice: "5299",
    kmIncluded: "125",
    engine: "V8",
    seating: "0 - 2",
    image: vehicle10,
  },
  {
    title: "Bentley Bentayga Mansory",
    categories: ["Luxury Cars", "Luxury SUV"],
    brand: "Bentley",
    price: 4799,
    prevPrice: "5299",
    kmIncluded: "125",
    engine: "V8",
    seating: "0 - 2",
    image: vehicle1,
  },
];

export default function BrandCars() {
  const { brandName } = useParams();
  const brand = slugToBrandName(brandName);

  // Filter cars by brand
  const filteredCars = baseCars
    .filter((car) => car.brand === brand)
    .map((car, index) => ({
      ...car,
      id: index + 1,
    }));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20 sm:pt-24">
        <div className="container mx-auto px-4 py-8">
         
          {filteredCars.length > 0 ? (
            <SuperCarsGrid cars={filteredCars} />
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No cars found for {brand}
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

