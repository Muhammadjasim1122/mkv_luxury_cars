import VehicleCard from './VehicleCard'

const vehicles = [
  {
    title: 'Supercars',
    image: 'https://www.mkvluxury.com/_next/image?url=%2Fassets%2Fsuper-cars.png&w=384&q=75',
  },
  {
    title: 'Luxury Cars',
    image: 'https://www.mkvluxury.com/_next/image?url=%2Fassets%2Fluxury-cars.png&w=384&q=75',
  },
  {
    title: 'Luxury SUV',
    image: 'https://www.mkvluxury.com/_next/image?url=%2Fassets%2Fluxury-suv.png&w=384&q=75',
  },
  {
    title: 'Convertible Cars',
    image: '	https://www.mkvluxury.com/_next/image?url=%2Fassets%2Fconvertible-cars.png&w=384&q=75',
  },
]

export default function HeroSection() {
  return (
    <section className="bg-white text-[#0f172a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-8 sm:pb-8 md:pb-2 pt-6 sm:pt-8 md:pt-10 text-center">
        <h1 className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
          Luxury and Supercar Rental with Zero Deposit
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-500 px-2">
          Let MKV Luxury guide you through the pinnacle of luxury car rentals.
        </p>
        <div className="grid grid-cols-2 gap-2 mt-10 mb-10 max-w-[900px] mx-auto justify-center md:grid-cols-4">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.title} {...vehicle} index={index} />
          ))}
        </div>


      </div>

    </section>
  )
}

