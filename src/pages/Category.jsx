import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SuperCarsGrid from "../components/SuperCarsGrid";
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

const vehicleImages = [
  vehicle1, vehicle2, vehicle3, vehicle4, vehicle5, vehicle6,
  vehicle7, vehicle8, vehicle9, vehicle10, vehicle11,
];

const allCars = [
  {
    id: 1,
    title: "Rolls Royce Cullinan Black Badge",
    categories: ["Luxury SUV", "Luxury Cars"],
    brand: "Rolls Royce",
    price: 7499,
    prevPrice: "7999",
    kmIncluded: "200",
    engine: "V12",
    seating: "4 - 5",
    image: vehicle3,
  },
  {
    id: 2,
    title: "Lamborghini Urus Performante",
    categories: ["Luxury SUV"],
    brand: "Lamborghini",
    price: 6599,
    prevPrice: "6999",
    kmIncluded: "180",
    engine: "V8",
    seating: "4 - 5",
    badge: "Best Seller of the Month",
    image: vehicle2,
  },
  {
    id: 3,
    title: "Lamborghini Urus S",
    categories: ["Coupe", "Supercars"],
    brand: "Ferrari",
    price: 5999,
    prevPrice: "6499",
    kmIncluded: "150",
    engine: "V8",
    seating: "0 - 2",
    badge: "Ferrari Collection",
    image: vehicle1,
  },
  {
    id: 4,
    title: "Ferrari Purosangue 2025",
    categories: ["Supercars"],
    brand: "McLaren",
    price: 6199,
    prevPrice: "6599",
    kmIncluded: "160",
    engine: "V8",
    seating: "0 - 2",
    badge: "Open Top Special",
    image: vehicle4,
  },
  {
    id: 5,
    title: "McLaren Artura Spider 2025",
    categories: ["Convertible Cars", "Supercars"],
    brand: "Porsche",
    price: 5499,
    prevPrice: "5999",
    kmIncluded: "140",
    engine: "V6",
    seating: "0 - 2",
    image: vehicle5,
  },
  {
    id: 6,
    title: "Ferrari 296 GTB 2024",
    categories: ["Supercars"],
    brand: "Audi",
    price: 4999,
    prevPrice: "5499",
    kmIncluded: "130",
    engine: "V10",
    seating: "0 - 2",
    image: vehicle6,
  },
  {
    id: 7,
    title: "Ferrari F8 Spider",
    categories: ["Supercars", "Convertible Cars"],
    brand: "BMW",
    price: 4499,
    prevPrice: "4999",
    kmIncluded: "120",
    engine: "V8",
    seating: "4 - 5",
    image: vehicle7,
  },
  {
    id: 8,
    title: "Rolls Royce Cullinan",
    categories: ["Luxury Cars"],
    brand: "Mercedes-Benz",
    price: 4799,
    prevPrice: "5299",
    kmIncluded: "125",
    engine: "V8",
    seating: "0 - 2",
    image: vehicle8,
  },
  {
    id: 9,
    title: "Bentley Bentayga Mansory",
    categories: ["Luxury Cars", "Luxury SUV"],
    brand: "Mercedes-Benz",
    price: 4799,
    prevPrice: "5299",
    kmIncluded: "125",
    engine: "V8",
    seating: "0 - 2",
    image: vehicle9,
  },
  {
    id: 10,
    title: "Ferrari F8 Tributo",
    categories: ["Supercars"],
    brand: "Mercedes-Benz",
    price: 4799,
    prevPrice: "5299",
    kmIncluded: "125",
    engine: "V8",
    seating: "0 - 2",
    image: vehicle10,
  },
  {
    id: 11,
    title: "Ferrari F8 Spider Yellow",
    categories: ["Supercars", "Convertible Cars"],
    brand: "Mercedes-Benz",
    price: 4799,
    prevPrice: "5299",
    kmIncluded: "125",
    engine: "V8",
    seating: "0 - 2",
    image: vehicle11,
  },
  {
    id: 12,
    title: "McLaren 720S Convertible",
    categories: ["Convertible Cars", "Supercars"],
    brand: "McLaren",
    price: 5800,
    prevPrice: "6200",
    kmIncluded: "155",
    engine: "V8",
    seating: "0 - 2",
    image: vehicle1,
  },
];

// Function to convert route category to display category
const routeToCategory = (routeCategory) => {
  const categoryMap = {
    "SuperCars": "Supercars",
    "Luxury-Cars": "Luxury Cars",
    "Luxury-SUV": "Luxury SUV",
    "Convertible-Cars": "Convertible Cars",
  };
  return categoryMap[routeCategory] || routeCategory;
};

export default function Category() {
  const { categoryName } = useParams();
  const category = routeToCategory(categoryName);

  // Filter cars that match the category
  const filteredCars = allCars.filter((car) => {
    return car.categories.some((cat) => {
      // Handle cases where categories might be strings with commas
      const catString = typeof cat === 'string' ? cat : String(cat);
      // Split by comma and check each part
      const catParts = catString.split(',').map(c => c.trim());
      return catParts.some(part => part === category);
    });
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-[0px]">
        <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
          <SuperCarsGrid cars={filteredCars} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

