import { Link } from "react-router-dom";
import { useCurrency } from "../contexts/CurrencyContext";
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

// Helper function to convert title to slug
const titleToSlug = (title) => {
  return title
    .toLowerCase()
    .trim()                    // remove leading/trailing spaces
    .replace(/\s+/g, "-")      // spaces -> dashes
    .replace(/[^a-z0-9-]/g, "")// remove non-url chars
    .replace(/-+$/g, "");      // remove trailing dashes
};

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

const defaultCars = Array.from({ length: 12 }, (_, index) => {
  const template = baseCars[index % baseCars.length];
  return {
    ...template,
    id: index + 1,
    title: `${template.title}${index >= baseCars.length ? ` #${index + 1}` : ""}`,
    // Keep the original image from the template so each car type always has its matching image
    image: template.image,
  };
});

export default function SuperCarsGrid({ cars = defaultCars }) {
  const { convertPrice, getCurrencySymbol } = useCurrency();
  
  return (
    <div>
    <div className="mb-6 sm:mb-8 text-center px-2 sm:px-4 md:px-8">
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              Explore the Luxury and Supercars
            </h2>
          </div>    
    <section className="px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-10">
         {/* Explore Section Heading */}
         

      <div className="mx-auto grid max-w-6xl gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => {
          const carSlug = titleToSlug(car.title);
          const convertedPrice = convertPrice(car.price);
          const convertedPrevPrice = car.prevPrice ? convertPrice(parseInt(car.prevPrice)) : null;
          const currencySymbol = getCurrencySymbol();
          return (
          <article
            key={car.id}
            className="flex h-full flex-col overflow-hidden rounded-[20px] sm:rounded-[25px] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:shadow-[0_35px_90px_rgba(15,23,42,0.12)]"
          >
            <Link to={`/our-fleet/${carSlug}`} className="relative block">
              <img src={car.image} alt={car.title} className="w-full h-[290px] object-cover" loading="lazy" />
            </Link>

            <div className="flex flex-1 flex-col gap-1 px-3 py-3 sm:py-4">
              <p
                className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-[#c27807]"
                style={{
                  fontFamily:
                    'var(--font-sf-pro-display), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                }}
              >
                {car.categories.join(", ")}
              </p>
              <Link to={`/our-fleet/${carSlug}`} className="block">
                <h3
                  className="text-lg sm:text-xl md:text-2xl font-bold leading-tight text-[#0f172a] hover:text-[#df8c0c] transition-colors cursor-pointer"
                  style={{
                    fontFamily:
                      'var(--font-sf-pro-display), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                    minHeight: "60px",
                  }}
                >
                  {car.title}
                </h3>
              </Link>
              <hr className="border-slate-400 border-b-2 mt-2 " />

              <div
                className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-base sm:text-lg font-bold text-[#0f172a]"
                style={{
                  fontFamily:
                    'var(--font-sf-pro-display), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                }}
              >
                <div className="flex flex-col py-2">
                  {convertedPrevPrice && (
                    <span className="text-xs sm:text-sm text-slate-500 font-medium line-through py-2">
                      {currencySymbol === '$' || currencySymbol === '€' || currencySymbol === '£' 
                        ? `${currencySymbol}${convertedPrevPrice.toLocaleString()}`
                        : `${convertedPrevPrice.toLocaleString()} ${currencySymbol}`}
                    </span>
                  )}
                  <span className="text-lg sm:text-[25px] font-bold">
                    {currencySymbol === '$' || currencySymbol === '€' || currencySymbol === '£' 
                      ? `${currencySymbol}${convertedPrice.toLocaleString()}`
                      : `${convertedPrice.toLocaleString()} ${currencySymbol}`}
                    <span className="text-xs sm:text-sm font-medium text-slate-500"> / Day</span>
                  </span>
                </div>
                <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base font-semibold text-[#c27807] mt-10">
                    <img src="https://www.mkvluxury.com/assets/250KM-icon.svg" alt="" 
                    className="w-4 h-2.5 sm:w-5 sm:h-3"
                    />
                  {car.kmIncluded} KM
                </span>
              </div>

              <div className="mt-auto flex flex-col gap-2 sm:gap-3 sm:flex-row">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#11b26e]  py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-black shadow-md sm:shadow-lg shadow-[#22c55e]/40 transition hover:scale-[1.01]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-black sm:w-[18px] sm:h-[18px]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat Now
                </button>
                <Link to={`/our-fleet/${carSlug}`} className="flex flex-1">
                  <button className="flex flex-1 items-center justify-center rounded-full bg-[#df8c0c] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-black shadow-md sm:shadow-lg shadow-[#df8c0c]/50 transition hover:scale-[1.01]">
                    Reserve for Free
                  </button>
                </Link>
              </div>
            </div>
          </article>
          );
        })}
      </div>
    </section>
    </div>
  );
}

