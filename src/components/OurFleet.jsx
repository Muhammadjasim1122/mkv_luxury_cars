import { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SuperCarsGrid from "./SuperCarsGrid";
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
  vehicle1,
  vehicle2,
  vehicle3,
  vehicle4,
  vehicle5,
  vehicle6,
  vehicle7,
  vehicle8,
  vehicle9,
  vehicle10,
  vehicle11,
];

export default function OurFleet() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("High to Low");
  const [openFilter, setOpenFilter] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedEngine, setSelectedEngine] = useState(null);
  const [selectedSeating, setSelectedSeating] = useState(null);

  const filters = [
    { id: "category", label: "Category", icon: "https://www.mkvluxury.com/assets/car-category-icon.svg" },
    { id: "brand", label: "Brand", icon: "https://www.mkvluxury.com/assets/car-icon.svg" },
    { id: "price", label: "Price Range", icon: "https://www.mkvluxury.com/assets/price-icon.svg" },
    { id: "engine", label: "Engine Spec", icon: "https://www.mkvluxury.com/assets/engine-spec-icon.svg" },
    { id: "seating", label: "Seating Capacity", icon: "https://www.mkvluxury.com/assets/seating-capacity-icon.svg" }
  ];

  const categoryOptions = [
    "Supercars",
    "Luxury Cars",
    "Luxury SUV",
    "Convertible Cars"
  ];
  const brandOptions = [
    "Lamborghini",
    "Ferrari",
    "McLaren",
    "Porsche",
    "Audi",
    "BMW",
    "Mercedes-Benz"
  ];
  const priceOptions = [
    "500 - 999",
    "1000 - 1999",
    "2000 - 2999",
    "3000+",
  ];
  const engineOptions = [
    "V3",
    "V4",
    "V6",
    "V8",
    "V10",
    "V12",
   
  ];
  const seatingOptions = [
    "0 - 2",
    "4 - 5",
    "7 - 8 ",
    
  ];    

  const containerRefs = useRef({});

  const getSelectedValue = (filterId) => {
    switch (filterId) {
      case "category":
        return selectedCategory;
      case "brand":
        return selectedBrand;
      case "price":
        return selectedPrice;
      case "engine":
        return selectedEngine;
      case "seating":
        return selectedSeating;
      default:
        return null;
    }
  };

  // Car data
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
      image: vehicle3,
    },
    {
      title: "Lamborghini Urus Performante",
      categories: ["Performance SUV", "Supercars"],
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
      title: "Ferrari F8 Tributo",
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
      title: "McLaren 720S Spider",
      categories: ["Convertible Cars", "Supercars"],
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
      title: "Porsche 911 Turbo S",
      categories: ["Supercars", "Luxury Cars"],
      brand: "Porsche",
      price: 5499,
      prevPrice: "5999",
      kmIncluded: "140",
      engine: "V6",
      seating: "0 - 2",
      image: vehicle5,
    },
    {
      title: "Audi R8 V10",
      categories: ["Supercars", "Luxury Cars"],
      brand: "Audi",
      price: 4999,
      prevPrice: "5499",
      kmIncluded: "130",
      engine: "V10",
      seating: "0 - 2",
      image: vehicle6,
    },
    {
      title: "BMW M8 Competition",
      categories: ["Luxury Cars", "Supercars"],
      brand: "BMW",
      price: 4499,
      prevPrice: "4999",
      kmIncluded: "120",
      engine: "V8",
      seating: "4 - 5",
      image: vehicle7,
    },
    {
      title: "Mercedes-Benz AMG GT",
      categories: ["Supercars", "Luxury Cars"],
      brand: "Mercedes-Benz",
      price: 4799,
      prevPrice: "5299",
      kmIncluded: "125",
      engine: "V8",
      seating: "0 - 2",
      image: vehicle8,
    },
  ];

  const allCars = Array.from({ length: 12 }, (_, index) => {
    const template = baseCars[index % baseCars.length];
    return {
      ...template,
      id: index + 1,
      title: `${template.title}${index >= baseCars.length ? ` #${index + 1}` : ""}`,
      // Keep the original image from the template so each car type always has its matching image
      image: template.image,
    };
  });

  // Filtering logic
  const filteredCars = allCars.filter((car) => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        car.title.toLowerCase().includes(query) ||
        car.brand.toLowerCase().includes(query) ||
        car.categories.some((cat) => cat.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    // Category filter
    if (selectedCategory) {
      const matchesCategory = car.categories.some(
        (cat) => cat === selectedCategory || cat.includes(selectedCategory)
      );
      if (!matchesCategory) return false;
    }

    // Brand filter
    if (selectedBrand) {
      if (car.brand !== selectedBrand) return false;
    }

    // Price filter
    if (selectedPrice) {
      const [min, max] = selectedPrice.includes("+")
        ? [parseInt(selectedPrice.replace("+", "")), Infinity]
        : selectedPrice.split(" - ").map((p) => parseInt(p));
      if (car.price < min || (max !== Infinity && car.price > max)) return false;
    }

    // Engine filter
    if (selectedEngine) {
      if (car.engine !== selectedEngine) return false;
    }

    // Seating filter
    if (selectedSeating) {
      if (car.seating !== selectedSeating.trim()) return false;
    }

    return true;
  });

  // Sorting logic
  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case "High to Low":
        return b.price - a.price;
      case "Low to High":
        return a.price - b.price;
      case "Newest":
        return b.id - a.id;
      case "Oldest":
        return a.id - b.id;
      default:
        return 0;
    }
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside all filter containers
      let clickedInside = false;
      Object.keys(containerRefs.current).forEach((key) => {
        if (
          containerRefs.current[key] &&
          containerRefs.current[key].contains(event.target)
        ) {
          clickedInside = true;
        }
      });
      
      // Only close if clicked outside all containers
      if (!clickedInside && openFilter !== null) {
        setOpenFilter(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openFilter]);

  const toggleFilter = (filterId) => {
    setOpenFilter((prev) => {
      // If clicking the same filter that's already open, close it
      // Otherwise, open the clicked filter
      return prev === filterId ? null : filterId;
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="px-3 py-4 sm:px-6 sm:py-8 mt-[60px]">
        <div className="mx-auto max-w-7xl">
          {/* Search and Sort Section */}
          <div className="mb-4 flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center px-2 sm:px-4 md:px-8">
            {/* Search Bar */}
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search by car, brand, model"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-slate-200 bg-[#f5f5f5] px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-slate-700 placeholder:text-slate-500 focus:border-[#c77802] focus:outline-none"
              />
            </div>

            {/* Sort Button */}
            <div className="relative w-full sm:w-auto" ref={(el) => (containerRefs.current.sort = el)}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFilter("sort");
                }}
                className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-[#f5f5f5] px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#8b4513] w-full sm:w-auto"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                <span>{sortBy}</span>
                <svg
                  className={`h-4 w-4 transition-transform ${openFilter === "sort" ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openFilter === "sort" && (
                <div className="absolute right-0 top-full z-50 mt-1 w-full sm:w-auto min-w-[160px] rounded-lg border border-slate-200 bg-white shadow-lg">
                  <ul className="py-1">
                    {["High to Low", "Low to High", "Newest", "Oldest"].map((option) => (
                      <li key={option}>
                        <button
                          onClick={() => {
                            setSortBy(option);
                            setOpenFilter(null);
                          }}
                          className="w-full px-4 py-2 text-left text-xs sm:text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                        >
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Filter Buttons Row */}
          <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-3 px-2 sm:px-4 md:px-8">
            {filters.map((filter) => (
              <div key={filter.id} className="relative w-full sm:w-auto flex-1 sm:flex-none min-w-[140px]" ref={(el) => (containerRefs.current[filter.id] = el)}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFilter(filter.id);
                  }}
                  className="flex items-center justify-between rounded-full border border-slate-200 bg-[#f5f5f5] px-3 py-2 sm:px-6 md:px-8 sm:py-3 text-xs sm:text-sm font-semibold text-gray-500 w-full"
                >
                  <img 
                    src={filter.icon} 
                    alt={filter.label}
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-4 md:mr-6 flex-shrink-0"
                    loading="lazy"
                  />
                  <span className="flex-1 text-center truncate px-1">
                    {getSelectedValue(filter.id) || filter.label}
                  </span>
                  <svg
                    className={`ml-2 sm:ml-4 md:ml-6 h-3 w-3 sm:h-4 sm:w-4 transition-transform flex-shrink-0 ${openFilter === filter.id ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openFilter === filter.id && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-lg border border-slate-200 bg-white shadow-lg max-h-[300px] overflow-y-auto">
                    {(() => {
                      let options = [];
                      let selectedValue = null;
                      let setSelected = null;

                      switch (filter.id) {
                        case "category":
                          options = categoryOptions;
                          selectedValue = selectedCategory;
                          setSelected = setSelectedCategory;
                          break;
                        case "brand":
                          options = brandOptions;
                          selectedValue = selectedBrand;
                          setSelected = setSelectedBrand;
                          break;
                        case "price":
                          options = priceOptions;
                          selectedValue = selectedPrice;
                          setSelected = setSelectedPrice;
                          break;
                        case "engine":
                          options = engineOptions;
                          selectedValue = selectedEngine;
                          setSelected = setSelectedEngine;
                          break;
                        case "seating":
                          options = seatingOptions;
                          selectedValue = selectedSeating;
                          setSelected = setSelectedSeating;
                          break;
                        default:
                          return null;
                      }

                      return (
                        <ul className="py-1">
                          {options.map((option) => (
                            <li key={option}>
                              <button
                                onClick={() => {
                                  setSelected(option);
                                  setOpenFilter(null);
                                }}
                                className={`w-full px-4 sm:px-5 py-2 sm:py-1 text-left text-xs sm:text-sm font-semibold text-slate-900 transition-colors ${
                                  selectedValue === option
                                    ? "bg-slate-100"
                                    : "hover:bg-slate-50"
                                }`}
                              >
                                {option}
                              </button>
                            </li>
                          ))}
                        </ul>
                      );
                    })()}
                  </div>
                )}
              </div>
            ))}
          </div>


          {/* Cars Grid */}
          <SuperCarsGrid cars={sortedCars} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

