import { Link } from "react-router-dom";

// Function to convert title to route format
const titleToRoute = (title) => {
  const routeMap = {
    "Supercars": "SuperCars",
    "Luxury Cars": "Luxury-Cars",
    "Luxury SUV": "Luxury-SUV",
    "Convertible Cars": "Convertible-Cars",
  };
  return routeMap[title] || title.replace(/\s+/g, "-");
};

export default function VehicleCard({ title, image, index }) {
  // Alternate between ml-auto and mr-auto: 0,2 get ml-auto, 1,3 get mr-auto
  const marginClass = index % 2 === 0 ? "!ml-auto" : "!mr-auto";
  const routePath = `/category/${titleToRoute(title)}`;
  
  return (
    <Link to={routePath} className={`col-span-1 relative flex items-end justify-center cursor-pointer overflow-hidden rounded-2xl bg-gray-800 transition-transform duration-300 ease-in-out hover:scale-[1.02] md:mx-auto mx-0 w-[180px] h-[180px] max-[398px]:w-[150px] max-[398px]:h-[150px] max-[340px]:w-[130px] max-[340px]:h-[130px] ${marginClass}`}>
      <img
        src={image}
        alt={title}
        width="180"
        height="180"
        decoding="async"
        className="absolute bottom-[2.2rem] object-contain opacity-80 transition-all duration-300 ease-in-out hover:opacity-100"
        loading="lazy"
        style={{ color: 'transparent' }}
      />
      <div className="absolute bottom-0 w-full text-center py-2 text-white font-bold">
        {title}
      </div>
    </Link>
  )
}
